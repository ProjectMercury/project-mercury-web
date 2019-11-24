import { CREATE_FORM } from '../types';

const initialState = {
  loading: false,
  authenticated: false,
  credentials: {},
  lastFormId: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FORM:
      return {
        ...state,
        lastFormId: action.payload
      };
    default:
      return state;
  }
};
