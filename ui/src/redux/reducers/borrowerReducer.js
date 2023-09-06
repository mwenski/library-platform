import { borrower } from "../actionTypes";

const initialState = {
    borrowersData: [],
    searchQuery: "",
    borrower: {}
};

export default function borrowerReducer(state = initialState, action){
    switch(action.type){
        case borrower.GET_BORROWERS_SUCCESS:
            return{
                ...state,
                borrowersData: action.payload,
                searchQuery: ""
            };
        case borrower.SEARCH_BORROWERS_SUCCESS:
            return {
                ...state,
                borrowersData: action.payload.data,
                searchQuery: action.payload.query
            }
        case borrower.GET_BORROWER_SUCCESS:
            return{
                ...state,
                borrower: state.borrowersData.find(borrower => borrower.borrowerId === parseInt(action.payload))
            }
        case borrower.DELETE_BORROWER_SUCCESS:
            return{
                ...state,
                borrowersData: [
                    ...state.borrowersData.filter(borrower => borrower.borrowerId !== parseInt(action.payload))
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