import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";

import {
  PAYMENT_DATA_FAILURE,
  PAYMENT_DATA_REQUEST,
  PAYMENT_DATA_SUCCESS,
} from "../reducers/paymentDataReducer";
import { serverGetDataPayment } from "../api/api";
import {
  getPaymentDataFailureAction,
  getPaymentDataSuccessAction,
} from "../actions/actions";

/////////login

function* getPaymentData({ payload }) {
  try {
    const data = yield call(serverGetDataPayment, payload);
    yield put(getPaymentDataSuccessAction(data));
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      default:
        message = "Something went wrong";
    }
    yield put(getPaymentDataFailureAction(message));

  }
}

export function* getPaymentDataWatcher() {
  yield takeLatest(PAYMENT_DATA_REQUEST, getPaymentData);
}

export default function* paymentDataSaga() {
  yield all([getPaymentDataWatcher()]);
}
