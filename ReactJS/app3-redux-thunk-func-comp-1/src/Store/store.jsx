import { applyMiddleware, createStore } from "redux";
import { myReducer } from "./reducer";
import { thunk } from "redux-thunk";
export const myStore = createStore(myReducer, applyMiddleware(thunk));
