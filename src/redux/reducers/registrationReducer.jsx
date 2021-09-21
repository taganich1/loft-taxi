export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

const initialState = {
  token: localStorage.getItem("token") || null,
  error: null,
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
