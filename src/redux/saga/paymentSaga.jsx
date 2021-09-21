import { call, put, takeLatest, all } from "redux-saga/effects";

import {
  PAYMENT_FAILURE,
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
} from "../reducers/paymentReducer";
import { serverPayment } from "../api/api";

/////////login

function* payment({ payload }) {
  console.log(payload, "sagaPayload payment ");
  try {
    const { token } = yield call(serverPayment, payload);

    console.log(token, "token");
    yield put({ type: PAYMENT_SUCCESS, payload: token });
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      default:
        message = "Something went wrong";
    }
    yield put({ type: PAYMENT_FAILURE, payload: message });
  }
}

export function* paymentWatcher() {
  yield takeLatest(PAYMENT_REQUEST, payment);
}

export default function* authSaga() {
  yield all([paymentWatcher()]);
}
