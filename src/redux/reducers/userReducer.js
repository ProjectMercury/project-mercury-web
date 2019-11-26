import { CREATE_FORM, GET_USER_DETAILS, GET_RESPONSE_COUNT } from "../types";

const initialState = {
  loading: false,
  authenticated: false,
  data: {},
  lastFormId: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FORM:
      return {
        ...state,
        lastFormId: action.payload
      };

    case GET_USER_DETAILS:
      return {
        ...state,
        data: action.payload
      };
    case GET_RESPONSE_COUNT:
      return {
        ...state,
        data: { ...state.data, responseCount: action.payload.responseCount }
      };
    default:
      return state;
  }
};
