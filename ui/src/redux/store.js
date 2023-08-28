import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';

const initialState = {};

export default configureStore(rootReducer, initialState);