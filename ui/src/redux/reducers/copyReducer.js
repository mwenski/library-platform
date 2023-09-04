import { copy } from "../actionTypes";

const initialState = {
    copiesData: []
};

export default function def(state = initialState, action){
    switch(action.type){
        case copy.GET_COPIES_SUCCESS:
            return{
                ...state,
                copiesData: 
                    [...state.copiesData.filter(copy => copy.bookId != action.payload.bookId)]
                    .concat(action.payload.data)
            };
        case copy.CREATE_COPY_SUCCESS:
            return{
                ...state,
                copiesData: [...state.copiesData, action.payload]
            };
        case copy.UPDATE_COPY_SUCCESS:
            return{
                ...state,
                copiesData: [
                    ...state.copiesData.filter(copy => copy.copyId != action.payload.copyId),
                    action.payload
                ]
            }
        case copy.DELETE_COPY_SUCCESS:
            return{
                ...state,
                copies: [
                    ...state.copiesData.filter(copy => copy.copyId != action.payload)
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