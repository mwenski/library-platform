import { borrower } from "../actionTypes";

const initialState = {
    borrowersArray: [],
    borrower: {}
};

export default function (state = initialState, action){
    switch(action.type){
        case borrower.GET_BORROWERS_SUCCESS:
            const borrowers = action.payload;

            return{
                ...state,
                borrowersArray: borrowers
            };
        case borrower.GET_BORROWER_SUCCESS:
            const borrowerId = action.payload;

            return{
                ...state,
                borrower: state.borrowersArray.find(borrower => borrower.borrowerId == borrowerId)
            }
        case borrower.DELETE_BORROWER_SUCCESS:
            const removedId = action.payload;

            return{
                ...state,
                borrowersArray: [
                    ...state.borrowersArray.filter(borrower => borrower.borrowerId !== removedId)
                ]
            }
        case borrower.GET_BORROWERS_FAIL:
        case borrower.GET_BORROWER_FAIL:
            return initialState;
        case borrower.DELETE_BORROWER_FAIL:
        default:
            return state;
    }
}