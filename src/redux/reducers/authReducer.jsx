import { LOG_OUT } from "../actions/actions";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";

const initialState = {
  token: localStorage.getItem("token") || null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return { ...state, token: action.payload };
    }
    case AUTH_FAILURE: {
      return { ...state, error: action.payload };
    }
    case LOG_OUT: {
      return { ...state, token: null, error: null };
    }
    default:
      return state;
  }
};
