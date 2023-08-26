# Database
FROM postgres:15 AS database
ENV POSTGRES_USER=admin \
    POSTGRES_PASSWORD=password \
    POSTGRES_DB=library
COPY library_db.sql /docker-entrypoint-initdb.d
EXPOSE 5432

# Backend
FROM node:18 AS server-api
WORKDIR /api
ENV PORT=9000
EXPOSE 9000
COPY api/ .
RUN npm install --no-optional
CMD ["node", "server.js"]

# Frontend build
FROM node:18 AS build
WORKDIR /ui
COPY ui/ .
RUN npm install && npm run build

# Frontend
FROM nginx:stable-alpine AS client-ui
EXPOSE 80
COPY --from=build /ui/build /usr/share/nginx/html
COPY ui/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]