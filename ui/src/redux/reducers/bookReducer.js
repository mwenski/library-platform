import { book } from "../actionTypes";

const initialState = {
    booksArray: [],
    book: {}
};

export default function (state = initialState, action){
    switch(action.type){
        case book.GET_BOOKS_SUCCESS:
            const books = action.payload;

            return{
                ...state,
                booksArray: books
            };
        case book.CREATE_BOOK_SUCCESS:
            const newBook = action.payload;

            return{
                ...state,
                booksArray: [...state.booksArray, newBook]
            };
        case book.GET_BOOK_SUCCESS:
            const bookId = action.payload;

            return {
                ...state,
                book: state.booksArray.find(book => book.bookId == bookId)
            }
        case book.UPDATE_BOOK_SUCCESS:
            const updatedBook = action.payload;

            return{
                ...state,
                booksArray: [
                    ...state.booksArray.filter(book => book.bookId !== updatedBook.bookId),
                    updatedBook
                ],
                book: {}
            }
        case book.DELETE_BOOK_SUCCESS:
            const removedId = action.payload;

            return{
                ...state,
                booksArray: [
                    ...state.booksArray.filter(book => book.bookId !== removedId)
                ]
            }
        case book.GET_BOOKS_FAIL:
        case book.GET_BOOK_FAIL:
            return initialState;
        case book.CREATE_BOOK_FAIL:
        case book.UPDATE_BOOK_FAIL:
        case book.DELETE_BOOK_FAIL:
        default:
            return state;
    }
}