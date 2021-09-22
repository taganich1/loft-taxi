export const ADDRESS_LIST_REQUEST = "ADDRESS_LIST_REQUEST";
export const ADDRESS_LIST_SUCCESS = "ADDRESS_LIST_SUCCESS";
export const ADDRESS_LIST_FAILURE = "ADDRESS_LIST_FAILURE";

const initialState = {
  addresses: null,
  error: null,
};

export const addressListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDRESS_LIST_SUCCESS: {
      return {
        ...state,
        addresses: action.payload,
      };
    }
    case ADDRESS_LIST_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
