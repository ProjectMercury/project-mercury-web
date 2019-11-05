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
      const index = state.questions.findIndex(
        index => index.id === action.payload.id
      );
      const updatedQuestion = {
        ...state.questions[index],
        title: action.payload.title
      };
      return {
        questions: [
          ...state.questions.slice(0, index),
          updatedQuestion,
          ...state.questions.slice(index + 1)
        ]
      };

    case SELECT_TYPE:
      const indexOfQuestion = state.questions.findIndex(
        index => index.id === action.payload.id
      );
      const updatedQuestionType = {
        ...state.questions[indexOfQuestion],
        type: action.payload.type
      };
      return {
        questions: [
          ...state.questions.slice(0, indexOfQuestion),
          updatedQuestionType,
          ...state.questions.slice(indexOfQuestion + 1)
        ]
      };
    default:
      return state;
  }
};
