import { createStore } from "redux";
import { myReducer } from "./reducer";
export const myStore = createStore(myReducer);
