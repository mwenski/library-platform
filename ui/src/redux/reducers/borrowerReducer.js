import { borrower } from "../actionTypes";

const initialState = {
    borrowers: []
};

export default function(state = initialState, action){
    switch(action.type){
        case borrower.GET_BORROWERS_SUCCESS:
            const borrowers = action.payload;

            return{
                ...state,
                borrowers: borrowers
            };

        case borrower.DELETE_BORROWER_SUCCESS:
            const removedId = action.payload;

            return{
                ...state,
                borrowers: [
                    ...state.borrowers.filter(borrower => borrower.borrowerId !== removedId)
                ]
            }
        case borrower.GET_BORROWERS_FAIL:
            return initialState;
        case borrower.DELETE_borrower_FAIL:
        default:
            return state;
    }
}