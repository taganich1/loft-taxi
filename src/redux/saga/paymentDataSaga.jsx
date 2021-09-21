import { call, put, takeLatest, all } from "redux-saga/effects";

import {
  PAYMENT_DATA_FAILURE,
  PAYMENT_DATA_REQUEST,
  PAYMENT_DATA_SUCCESS,
} from "../reducers/paymentDataReducer";
import { serverGetDataPayment } from "../api/api";

/////////login

function* getPaymentData({ payload }) {
  console.log(payload, "getDataPayload");
  try {
    const { id } = yield call(serverGetDataPayment, payload);
    console.log(id, "id");
    yield put({ type: PAYMENT_DATA_SUCCESS, payload: id });
    localStorage.setItem("id", id);
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      default:
        message = "Something went wrong";
    }
    yield put({ type: PAYMENT_DATA_FAILURE, payload: message });
    localStorage.removeItem("id");
  }
}

export function* getPaymentDataWatcher() {
  yield takeLatest(PAYMENT_DATA_REQUEST, getPaymentData);
}

export default function* paymentDataSaga() {
  yield all([getPaymentDataWatcher()]);
}
