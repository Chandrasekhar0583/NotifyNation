 import { combineReducers, configureStore } from "@reduxjs/toolkit";
 /**call reducer */
 import  questionReducer from "./qustion.reducer";
 import resultReducer from './result_reducer';
 const rootReducer = combineReducers({
    question: questionReducer,
    result:  resultReducer
 })
 /** create store with redure  */
  export default configureStore({reducer : rootReducer})