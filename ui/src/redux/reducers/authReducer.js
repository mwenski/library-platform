import { auth } from "../actionTypes";
const initialState = {
    isAuthenticated: false,
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.refreshToken('refreshToken'),
    userData: JSON.parse(localStorage.getItem('userData'))
};

export default function (state = initialState, action){
    switch(action.type){
        case auth.LOGIN_SUCCESS:
            const { accessToken, refreshToken, userData } = action.payload;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('userData', JSON.stringify(userData));

            return{
                ...state,
                isAuthenticated: true,
                accessToken,
                refreshToken,
                userData
            };
        case auth.REGISTER_SUCCESS:
            return{
                ...state
            };
        case auth.REFRESH_TOKEN_SUCCESS:
            const newAccessToken = action.payload;
            localStorage.setItem('accessToken', newAccessToken);

            return{
                ...state,
                accessToken: newAccessToken
            };
        case auth.LOGIN_FAIL:
        case auth.REGISTER_FAIL:
        case auth.LOGOUT_SUCCESS:
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('userData');

            return initialState;
        default:
            return state;
    }
}