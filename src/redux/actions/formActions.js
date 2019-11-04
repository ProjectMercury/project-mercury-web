import {
  ADD_OPTION,
  ADD_QUESTION,
  DELETE_QUESTION,
  SELECT_TYPE,
  EDIT_OPTION_TITLE,
  EDIT_QUESTION_TITLE
} from "../types";

export const addQuestion = () => dispatch => {
  dispatch({
    type: ADD_QUESTION
  });
};

export const handleEditQuestionTitle = (id, title) => dispatch => {
  dispatch({
    type: EDIT_QUESTION_TITLE,
    payload: { id: id, title: title }
  });
};

export const deleteQuestion = id => dispatch => {
  dispatch({
    type: DELETE_QUESTION,
    payload: id
  });
};

export const addOption = questionId => dispatch => {
  dispatch({
    type: ADD_OPTION,
    payload: questionId
  });
};

export const handleEditionOptionTitle = (id, title) => dispatch => {
  dispatch({
    type: EDIT_OPTION_TITLE,
    payload: { id: id, title: title }
  });
};

export const setQuestionType = (id, type) => dispatch => {
  dispatch({
    type: SELECT_TYPE,
    payload: { id: id, type: type }
  });
};
