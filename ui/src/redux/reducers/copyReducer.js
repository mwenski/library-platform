import { copy } from "../actionTypes";

const initialState = {
    copiesArray: []
};

export default function def(state = initialState, action){
    switch(action.type){
        case copy.GET_COPIES_SUCCESS:
            const copies = action.payload.data;
            const bookId = action.payload.bookId;

            return{
                ...state,
                copiesArray: 
                    [...state.copiesArray.filter(copy => copy.bookId != bookId)]
                    .concat(copies)
            };
        case copy.CREATE_COPY_SUCCESS:
            const newCopy = action.payload;

            return{
                ...state,
                copiesArray: [...state.copiesArray, newCopy]
            };
        case copy.UPDATE_COPY_SUCCESS:
            const updatedCopy = action.payload;

            return{
                ...state,
                copiesArray: [
                    ...state.copiesArray.filter(copy => copy.copyId != updatedCopy.copyId),
                    updatedCopy
                ]
            }
        case copy.DELETE_COPY_SUCCESS:
            const removedId = action.payload;

            return{
                ...state,
                copies: [
                    ...state.copiesArray.filter(copy => copy.copyId != removedId)
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