import { globalNotification } from "../actionTypes";

const initialState = {
    snackbar: {
        show: false,
        severity: '',
        message: ''
    }
}

export default function globalNotificationReducer(state = initialState, action){
    switch(action.type){
        case globalNotification.SHOW_SNACKBAR:
            return{
                ...state,
                snackbar: {
                    show: true,
                    ...action.payload
                },
            };
        case globalNotification.HIDE_SNACKBAR:
            return{
                ...state,
                snackbar: {
                    show: false,
                    severity: '',
                    message: ''
                },
            };
        default:
            return state;
    }
}