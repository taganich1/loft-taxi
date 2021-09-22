import { AUTH_REQUEST } from "../reducers/authReducer";
import { REGISTER_REQUEST } from "../reducers/registrationReducer";
import { PAYMENT_REQUEST } from "../reducers/paymentReducer";
import {
  PAYMENT_DATA_FAILURE,
  PAYMENT_DATA_REQUEST,
  PAYMENT_DATA_SUCCESS,
} from "../reducers/paymentDataReducer";
import {
  ADDRESS_LIST_FAILURE,
  ADDRESS_LIST_REQUEST,
  ADDRESS_LIST_SUCCESS,
} from "../reducers/addressListReducer";

export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTER = "REGISTER";

export const authorize = (payload) => ({
  type: AUTH_REQUEST,
  payload,
});

export const logOutAction = {
  type: LOG_OUT,
};

export const registrationAction = (payload) => ({
  type: REGISTER_REQUEST,
  payload,
});

export const setPaymentDataAction = (payload) => ({
  type: PAYMENT_REQUEST,
  payload,
});

export const getPaymentDataAction = (payload) => {
  console.log(payload, "action.payload");
  return {
    type: PAYMENT_DATA_REQUEST,
    payload,
  };
};

export const getPaymentDataSuccessAction = (payload) => {
  console.log(payload, "action.payload suc");
  return {
    type: PAYMENT_DATA_SUCCESS,
    payload,
  };
};

export const getPaymentDataFailureAction = (payload) => {
  console.log(payload, "action.payload fail");
  return {
    type: PAYMENT_DATA_FAILURE,
    payload,
  };
};

export const getAddressListAction = (payload) => ({
  type: ADDRESS_LIST_REQUEST,
  payload,
});

export const getAddressListSuccessAction = (payload) => ({
  type: ADDRESS_LIST_SUCCESS,
  payload,
});




/*
export const authenticateAction = (payload) => ({
  type: AUTHENTICATE,
  payload,
});
*/
/*
export const logInAction = (payload) => ({
  type: LOG_IN,
  payload,
});
*/
