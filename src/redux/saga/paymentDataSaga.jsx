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
  console.log(payload, "getDataPayload aaa");
  try {
    const data = yield call(serverGetDataPayment, payload);
    console.log(data, "uuu");
    /*const payload = yield call(serverGetDataPayment, payload);*/
    /*const { cardName } = yield call(serverGetDataPayment, payload);
    const { cvc } = yield call(serverGetDataPayment, payload);
    const { expiryDate } = yield call(serverGetDataPayment, payload);*/

    yield put(getPaymentDataSuccessAction(data));

    localStorage.setItem("id", data.id);
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
    localStorage.removeItem("id");
  }
}

export function* getPaymentDataWatcher() {
  yield takeLatest(PAYMENT_DATA_REQUEST, getPaymentData);
}

export default function* paymentDataSaga() {
  yield all([getPaymentDataWatcher()]);
}
