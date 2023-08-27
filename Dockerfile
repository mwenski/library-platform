# Database
FROM postgres:15 AS database
COPY library_db.sql /docker-entrypoint-initdb.d/
EXPOSE 5432

# Backend
FROM node:13 AS server-api
WORKDIR /api
COPY api/ .
RUN npm install --no-optional
EXPOSE 9000
CMD ["node", "server.js"]

# Frontend build
FROM node:13 AS build
WORKDIR /ui
COPY ui/ .
RUN npm install && npm run build

# Frontend
FROM nginx:stable-alpine AS client-ui
COPY --from=build /ui/build /usr/share/nginx/html
COPY ui/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]