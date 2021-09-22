import { call, put, takeLatest, all } from "redux-saga/effects";

import {
  ADDRESS_LIST_FAILURE,
  ADDRESS_LIST_REQUEST,
  ADDRESS_LIST_SUCCESS,
} from "../reducers/addressListReducer";
import { serverGetAddressList } from "../api/api";
import {
  getAddressListSuccessAction,
  getPaymentDataSuccessAction,
} from "../actions/actions";

/////////login

function* getAddressList({ payload }) {
  console.log(payload, "getDataPayload aaa");
  try {
    const { addresses } = yield call(serverGetAddressList, payload);
    console.log(addresses, "adresi");

    yield put(getAddressListSuccessAction(addresses));
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      default:
        message = "Something went wrong";
    }
    yield put({ type: ADDRESS_LIST_FAILURE, payload: message });
  }
}

export function* getAddressListWatcher() {
  yield takeLatest(ADDRESS_LIST_REQUEST, getAddressList);
}

export default function* getAddressListSaga() {
  yield all([getAddressListWatcher()]);
}
