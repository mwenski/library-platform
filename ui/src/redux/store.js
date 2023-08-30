import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/index';

const preloadState = {};

export default configureStore({reducer, preloadState});