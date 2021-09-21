export const PAYMENT_DATA_REQUEST = "PAYMENT_DATA_REQUEST";
export const PAYMENT_DATA_SUCCESS = "PAYMENT_DATA_SUCCESS";
export const PAYMENT_DATA_FAILURE = "PAYMENT_DATA_FAILURE";

const initialState = {
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id") || null,
  cardNumber: localStorage.getItem("cardNumber") || null,
  error: null,
};

export const paymentDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_DATA_SUCCESS: {
      return { ...state, id: action.payload };
    }
    case PAYMENT_DATA_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
