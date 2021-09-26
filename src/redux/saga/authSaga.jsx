import { call, put, takeLatest, all } from "redux-saga/effects";

import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
} from "../reducers/authReducer";
import { serverLogin } from "../api/api";

/////////login

function* authorize({ payload }) {
  console.log(payload, "sagaPayload");
  try {
    const { token } = yield call(serverLogin, payload);
    console.log(token, "token");
    yield put({ type: AUTH_SUCCESS, payload: token });
    localStorage.setItem("token", token);
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      default:
        message = "Something went wrong";
    }
    yield put({ type: AUTH_FAILURE, payload: message });
    localStorage.removeItem("token");
  }
}





export function* authorizeWatcher() {
  yield takeLatest(AUTH_REQUEST, authorize);
}

export default function* authSaga() {
  yield all([authorizeWatcher()]);
}
