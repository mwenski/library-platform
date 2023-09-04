import { loan } from "../actionTypes";

const initialState = {
    loansData: []
};

export default function def(state = initialState, action){
    switch(action.type){
        case loan.GET_LOANS_SUCCESS:
            return{
                ...state,
                loansData: 
                [...state.loansData.filter(loan => loan.borrowerId != action.payload.borrowerId)]
                .concat(action.payload.data)
            };
        case loan.CREATE_LOAN_SUCCESS:
            return{
                ...state,
                loansData: [...state.loansData, action.payload]
            };
        case loan.UPDATE_LOAN_SUCCESS:
            return{
                ...state,
                loansData: [
                    ...state.loansData.filter(loan => loan.loanId != action.payload.loanId),
                    action.payload
                ]
            }
        case loan.DELETE_LOAN_SUCCESS:
            return{
                ...state,
                loansData: [
                    ...state.loansData.filter(loan => loan.loanId != action.payload)
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