import { auth } from "../actionTypes";
const initialState = {
    isAuthenticated: false,
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.refreshToken('refreshToken'),
    borrowerData: JSON.parse(localStorage.getItem('borrowerData'))
};

export default function(state = initialState, action){
    switch(action.type){
        case auth.LOGIN_SUCCESS:
            const { accessToken, refreshToken, borrowerData } = action.payload;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('borrowerData', JSON.stringify(borrowerData));

            return{
                ...state,
                isAuthenticated: true,
                accessToken,
                refreshToken,
                borrowerData
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
            localStorage.removeItem('borrowerData');

            return initialState;
        default:
            return state;
    }
}