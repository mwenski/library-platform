import { copy } from "../actionTypes";

const initialState = {
    copies: []
};

export default function(state = initialState, action){
    switch(action.type){
        case copy.GET_COPIES_SUCCESS:
            const copies = action.payload;

            return{
                ...state,
                copies: copies
            };
        case copy.CREATE_COPY_SUCCESS:
            const newCopy = action.payload;

            return{
                ...state,
                copies: [...state.copies, newCopy]
            };
        case copy.UPDATE_COPY_SUCCESS:
            const updatedCopy = action.payload;

            return{
                ...state,
                copies: [
                    ...state.copies.filter(copy => copy.copyId !== updatedCopy.copyId),
                    updatedCopy
                ]
            }
        case copy.DELETE_COPY_SUCCESS:
            const removedId = action.payload;

            return{
                ...state,
                copies: [
                    ...state.copies.filter(copy => copy.copyId !== removedId)
                ]
            }
        case copy.GET_COPIES_FAIL:
            return initialState;
        case copy.CREATE_COPY_FAIL:
        case copy.UPDATE_COPY_FAIL:
        case copy.DELETE_COPY_FAIL:
        default:
            return state;
    }
}