import { loan } from "../actionTypes";

const initialState = {
    loans: []
};

export default function(state = initialState, action){
    switch(action.type){
        case loan.GET_LOANS_SUCCESS:
            const loans = action.payload;

            return{
                ...state,
                loans: loans
            };
        case loan.CREATE_LOAN_SUCCESS:
            const newLoan = action.payload;

            return{
                ...state,
                loans: [...state.loans, newLoan]
            };
        case loan.UPDATE_LOAN_SUCCESS:
            const updatedLoan = action.payload;

            return{
                ...state,
                loans: [
                    ...state.loans.filter(loan => loan.loanId !== updatedLoan.loanId),
                    updatedLoan
                ]
            }
        case loan.DELETE_LOAN_SUCCESS:
            const removedId = action.payload;

            return{
                ...state,
                loans: [
                    ...state.loans.filter(loan => loan.loanId !== removedId)
                ]
            }
        case loan.GET_LOANS_FAIL:
            return initialState;
        case loan.CREATE_LOAN_FAIL:
        case loan.UPDATE_LOAN_FAIL:
        case loan.DELETE_LOAN_FAIL:
        default:
            return state;
    }
}