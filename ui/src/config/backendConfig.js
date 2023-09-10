import { useNavigate } from "react-router-dom";
import axios from "axios";
import store from '../redux/store';
import { auth } from "../redux/actionTypes";

const NavigationFunction = () => {
    const navigate = useNavigate();
    navigate('/login');
}

const refreshTokenAction = (error) => {
    const originalRequest = error.config;
    const { dispatch } = store;

    if(error.response.status === 401 && originalRequest.url === 'http://localhost:9000/auth/refresh-token'){
        NavigationFunction();
        return Promise.reject(error);
    }

    if(error.res.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem('refreshToken');

        return axios.post('/auth/refresh-token', { refreshToken })
        .then(res => {
            if(res.status === 200 || res.status === 201){
                const newAccessToken = res.data.data;
                dispatch({
                    type: auth.REFRESH_TOKEN_SUCCESS, 
                    payload: newAccessToken
                });

                originalRequest.headers['authorization'] = newAccessToken;
                return axios(originalRequest);
            }
        });
    }
    return Promise.reject(error);
}

const instance = axios.create({});

instance.interceptors.request.use(config => {
    const token = store.getState().auth.accessToken;
    config.headers['authorization'] = token;

    return config;
});

instance.interceptors.response.use(response => {
    return response;
}, refreshTokenAction);

export default instance;



