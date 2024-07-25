import { createStore } from "redux";
import { myReducer } from "./Reducer";
export const myStore = createStore(myReducer);
