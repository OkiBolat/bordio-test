import {combineReducers} from "@reduxjs/toolkit";
import canban from "./canban/reducer";

const rootReducer = combineReducers({
  canban
})

export default rootReducer;