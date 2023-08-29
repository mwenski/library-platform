import { book } from "../actionTypes";

const initialState = {
    books: []
};

export default function(state = initialState, action){
    switch(action.type){
        case book.GET_BOOKS_SUCCESS:
            const books = action.payload;

            return{
                ...state,
                books: books
            };
        case book.CREATE_BOOK_SUCCESS:
            const newBook = action.payload;

            return{
                ...state,
                books: [...state.books, newBook]
            };
        case book.UPDATE_BOOK_SUCCESS:
            const updatedBook = action.payload;

            return{
                ...state,
                books: [
                    ...state.books.filter(book => book.bookId !== updatedBook.bookId),
                    updatedBook
                ]
            }
        case book.DELETE_BOOK_SUCCESS:
            const removedId = action.payload;

            return{
                ...state,
                books: [
                    ...state.books.filter(book => book.bookId !== removedId)
                ]
            }
        case book.GET_BOOKS_FAIL:
            return initialState;
        case book.CREATE_BOOK_FAIL:
        case book.UPDATE_BOOK_FAIL:
        case book.DELETE_BOOK_FAIL:
        default:
            return state;
    }
}