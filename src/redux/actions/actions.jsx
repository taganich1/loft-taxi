import { AUTH_REQUEST } from "../reducers/authReducer";
import { REGISTER_REQUEST } from "../reducers/registrationReducer";
import { PAYMENT_REQUEST } from '../reducers/paymentReducer';
import { PAYMENT_DATA_REQUEST } from '../reducers/paymentDataReducer';

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


export const getPaymentDataAction = (payload) => ({
  type: PAYMENT_DATA_REQUEST,
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