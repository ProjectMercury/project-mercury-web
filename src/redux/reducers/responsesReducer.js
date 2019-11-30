import { GET_QUESTIONS, RESPONSE_INPUT_CHANGE } from "../types";

const initialState = {
  questions: [],
  options: [],
  responses: []
};

export const responsesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        questions: action.payload.questions,
        options: action.payload.options,
        responses: action.payload.questions.map(question => ({
          id: question.id,
          response: ""
        }))
      };

    case RESPONSE_INPUT_CHANGE:
      return {
        ...state,
        responses: state.responses.map(response => {
          return response.id !== action.payload.questionId
            ? response
            : { id: response.id, response: action.payload.value };
        })
      };

    default:
      return state;
  }
};
