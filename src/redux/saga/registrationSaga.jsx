import { all, call, put, takeLatest } from "redux-saga/effects";
import { serverRegister } from "../api/api";
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
} from "../reducers/registrationReducer";
import { AUTH_SUCCESS } from "../reducers/authReducer";

export function* register({ payload }) {
  console.log(payload, "regsaga pay");
  try {
    const { token } = yield call(serverRegister, payload);
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
    yield put({ type: REGISTER_FAILURE, payload: message });
    localStorage.removeItem("token");
  }
}

export function* registerWatcher() {
  yield takeLatest(REGISTER_REQUEST, register);
}

export default function* registrationSaga() {
  yield all([registerWatcher()]);
}
