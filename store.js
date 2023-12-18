import { createStore } from "redux";
import reducer from "./reducer";
import { combineReducers } from "redux";

const reducers=combineReducers({
    reducer
})

export const store=createStore(reducers,{})