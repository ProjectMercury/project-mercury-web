import {
  CREATE_FORM,
  GET_USER_DETAILS,
  GET_RESPONSE_COUNT,
  LOADING_USER,
  GET_QUESTIONS
} from "../types";

const initialState = {
  loading: false,
  authenticated: false,
  data: {},
  lastFormId: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case CREATE_FORM:
      return {
        ...state,
        lastFormId: action.payload
      };
    case GET_QUESTIONS:
      return {
        ...state,
        loading: false
      };
    case GET_USER_DETAILS:
      return {
        ...state,
        data: action.payload,
        authenticated: true
      };
    case GET_RESPONSE_COUNT:
      return {
        ...state,
        data: { ...state.data, responseCount: action.payload },
        loading: false
      };
    default:
      return state;
  }
};
