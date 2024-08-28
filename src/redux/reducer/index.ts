import { combineReducers } from '@reduxjs/toolkit';
// Import your slices here
import authReducer from './authSlice';

const rootReducer = combineReducers({
    authReducer,
});

export default rootReducer;
