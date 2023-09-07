import { library } from "../actionTypes";

const initialState = {
    servicedBook: {
        loan: {},
        copy: {}
    }
}

export default function libraryReducer(state = initialState, action){
    switch(action.type){
        case library.BORROW_BOOK_SUCCESS:
        case library.RETURN_BOOK_SUCCESS:
            return {
                ...state,
                servicedBook: {
                    loan: action.payload.loan,
                    copy: action.payload.copy
                },
            };
        case library.BORROW_BOOK_FAIL:
        case library.RETURN_BOOK_FAIL:
            return initialState;
        default:
            return state;
    }
}