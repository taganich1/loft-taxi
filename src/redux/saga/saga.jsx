import authSaga from "./authSaga";
import registrationSaga from "./registrationSaga";
import paymentSaga from "./paymentSaga";
import { all, fork } from "redux-saga/effects";
import paymentDataSaga from "./paymentDataSaga";
import getAddressListSaga from "./addressListSaga";

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(registrationSaga),
    fork(paymentSaga),
    fork(paymentDataSaga),
    fork(getAddressListSaga),
  ]);
}
