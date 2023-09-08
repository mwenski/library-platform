import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/index';

const preloadState = {};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default configureStore({reducer, preloadState, composedEnhancer});