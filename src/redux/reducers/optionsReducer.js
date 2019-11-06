import uuid from "uuid";
import {
  EDIT_OPTION_TITLE,
  ADD_OPTION,
  SELECT_TYPE,
  DELETE_OPTION
} from "../types";

const initialState = {
  options: []
};

export const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OPTION:
      return {
        options: [
          ...state.options,
          {
            id: new Date().getTime() + uuid(),
            questionId: action.payload,
            title: ""
          }
        ]
      };
    case EDIT_OPTION_TITLE:
      const index = state.options.findIndex(
        index => index.id === action.payload.id
      );
      const updatedOption = {
        ...state.options[index],
        title: action.payload.title
      };
      return {
        options: [
          ...state.options.slice(0, index),
          updatedOption,
          ...state.options.slice(index + 1)
        ]
      };
    case DELETE_OPTION:
      return {
        options: state.options.filter(option => option.id !== action.payload)
      };

    case SELECT_TYPE:
      if (action.payload.type === "text") return state;
      else {
        if (
          state.options.find(option => option.questionId === action.payload.id)
        ) {
          return {
            options: [
              ...state.options.filter(
                option => option.questionId !== action.payload.id
              ),
              {
                id: new Date().getTime() + uuid(),
                questionId: action.payload.id,
                title: ""
              }
            ]
          };
        } else
          return {
            options: [
              ...state.options,
              {
                id: new Date().getTime() + uuid(),
                questionId: action.payload.id,
                title: ""
              }
            ]
          };
      }

    default:
      return state;
  }
};
