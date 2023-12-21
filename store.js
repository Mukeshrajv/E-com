// import { createStore } from "redux";
// import myReducer from "./Reducer";

// const store=createStore(myReducer)
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducer/reducer";

export default configureStore({
    reducer:{
        item:reducer
    }
})