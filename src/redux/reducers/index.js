import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { registrationReducer } from "./registrationReducer";
import { paymentReducer } from './paymentReducer';
import { paymentDataReducer } from './paymentDataReducer';

export const rootReducer = combineReducers({
  authReducer,
  registrationReducer,
  paymentReducer,
  paymentDataReducer,
});
