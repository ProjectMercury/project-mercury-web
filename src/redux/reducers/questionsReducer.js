import uuid from "uuid";
import {
  EDIT_QUESTION_TITLE,
  ADD_QUESTION,
  SELECT_TYPE,
  DELETE_QUESTION
} from "../types";

const initialState = {
  questions: [
    {
      id: new Date().getTime() + uuid(),
      title: "",
      type: "text"
    }
  ]
};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        questions: [
          ...state.questions,
          { id: new Date().getTime() + uuid(), title: "", type: "text" }
        ]
      };
    case DELETE_QUESTION:
      const newQuestions = state.questions.filter(
        question => question.id !== action.payload
      );
      return {
        questions: newQuestions
      };
    case EDIT_QUESTION_TITLE:
      const questionTitleToEdit = {
        ...state.questions.find(current => current.id === action.payload.id),
        title: action.payload.title
      };
      return {
        questions: [
          ...state.questions.filter(
            current => current.id !== action.payload.id
          ),
          questionTitleToEdit
        ].sort((a, b) => (a.id > b.id ? 1 : -1))
      };

    case SELECT_TYPE:
      const questionToChangeType = {
        ...state.questions.find(current => current.id === action.payload.id),
        type: action.payload.type
      };
      return {
        questions: [
          ...state.questions.filter(
            current => current.id !== action.payload.id
          ),
          questionToChangeType
        ].sort((a, b) => (a.id > b.id ? 1 : -1))
      };
    default:
      return state;
  }
};
