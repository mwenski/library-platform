import { book } from "../actionTypes";

const initialState = {
    booksData: [],
    searchQuery: "",
    book: {}
};

export default function bookReducer(state = initialState, action){
    switch(action.type){
        case book.GET_BOOKS_SUCCESS:
            return{
                ...state,
                booksData: action.payload,
                searchQuery: ""
            };
        case book.SEARCH_BOOKS_SUCCESS: 
            return{
                ...state,
                booksData: action.payload.data,
                searchQuery: action.payload.query
            }
        case book.GET_BOOK_SUCCESS:
            return {
                ...state,
                book: state.booksData.find(book => book.bookId === parseInt(action.payload))
            }       
        case book.SET_SEARCH_QUERY:
            console.log(action.payload);
            return {
                ...state,
                searchQuery: action.payload
            } 
        case book.CREATE_BOOK_SUCCESS:
            return{
                ...state,
                booksData: [...state.booksData, action.payload]
            };
        case book.UPDATE_BOOK_SUCCESS:
            return{
                ...state,
                booksData: [
                    ...state.booksData.filter(book => book.bookId !== parseInt(action.payload.bookId)),
                    action.payload
                ],
                book: {}
            }
        case book.DELETE_BOOK_SUCCESS:
            return{
                ...state,
                booksData: [
                    ...state.booksData.filter(book => book.bookId !== parseInt(action.payload))
                ]
            }
        case book.GET_BOOKS_FAIL:
        case book.SEARCH_BOOKS_FAIL:
        case book.GET_BOOK_FAIL:
            return initialState;
        case book.CREATE_BOOK_FAIL:
        case book.UPDATE_BOOK_FAIL:
        case book.DELETE_BOOK_FAIL:
        default:
            return state;
    }
}