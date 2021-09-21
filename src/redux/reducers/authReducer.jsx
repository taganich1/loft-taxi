import { LOG_IN, LOG_OUT, AUTHENTICATE, REGISTER } from "../actions/actions";

const defaultState = {
  isLoggedIn: false,
};

const authReducers = (state = defaultState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { isLoggedIn: true };
    case LOG_OUT:
      return { isLoggedIn: false };
    case AUTHENTICATE:
      return { isLoggedIn: true };
    case REGISTER:
      return { isLoggedIn: true };
    default:
      return state;
  }
};

export default authReducers;
