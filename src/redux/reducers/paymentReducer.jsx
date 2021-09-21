export const PAYMENT_REQUEST = "PAYMENT_REQUEST";
export const PAYMENT_SUCCESS = "PAYMENT_SUCCESS";
export const PAYMENT_FAILURE = "PAYMENT_FAILURE";

const initialState = {
  token: localStorage.getItem("token"),
  error: null,
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_SUCCESS: {
      return { ...state };
    }
    case PAYMENT_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
