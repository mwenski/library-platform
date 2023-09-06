import { error } from '../actionTypes';

const initialState = {
    message: {},
}

export default function errorReducer(state = initialState, action){
    switch(action.type){
        case error.GET_ERRORS:
            return {
                message: action.payload.message
            };
        case error.CLEAR_ERRORS:
            return {
                message: {}
            };
        default:
            return state;
    }
}