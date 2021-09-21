import { combineReducers } from "redux";
import authReducers from "./authReducers";

export const rootReducer = combineReducers({ authReducers: authReducers });
