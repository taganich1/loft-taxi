export const PAYMENT_DATA_REQUEST = "PAYMENT_DATA_REQUEST";
export const PAYMENT_DATA_SUCCESS = "PAYMENT_DATA_SUCCESS";
export const PAYMENT_DATA_FAILURE = "PAYMENT_DATA_FAILURE";

const initialState = {
  /*id: localStorage.getItem("id") || null,*/
  /*error: null,*/
  cardNumber: "",
  expiryDate: "",
  cardName: "",
  cvc: "",
};


export const paymentDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_DATA_SUCCESS: {
      return {
        ...state,
        id: action.payload.id,
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate,
        cardName: action.payload.cardName,
        cvc: action.payload.cvc,
      };
    }
    case PAYMENT_DATA_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
