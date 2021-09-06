const defaultState = {
  authed: false,
};

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const REGISTER = "REGISTER";

export const authedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, authed: !state.authed };
    case LOG_OUT:
      return { ...state, authed: !state.authed };
    case REGISTER:
      return { ...state, authed: !state.authed };
    default:
      return state;
  }
};
