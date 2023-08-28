import { error } from '../actionTypes';

export const returnErrors = (message) => {
    return{
        type: error.GET_ERRORS,
        payload: { message }
    };
}

export const clearErrors = () => {
    return {
        type: error.CLEAR_ERRORS
    };
}