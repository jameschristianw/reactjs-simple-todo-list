import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from './reducer/MainReducer'
import todoReducer from './reducer/todoReducer'

const reducers = combineReducers({
  mainReducer, 
  todoReducer
})

const store = configureStore({
  reducer: reducers
})

export default store