import {
  ADD_OPTION,
  ADD_QUESTION,
  DELETE_QUESTION,
  SELECT_TYPE,
  EDIT_OPTION_TITLE,
  EDIT_QUESTION_TITLE
} from "../types";

export function addQuestion() {
  return {
    type: ADD_QUESTION
  };
}

export function handleEditQuestionTitle(id, title) {
  return {
    type: EDIT_QUESTION_TITLE,
    payload: { id: id, title: title }
  };
}

export function deleteQuestion(id) {
  return {
    type: DELETE_QUESTION,
    payload: id
  };
}

export function addOption(questionId) {
  return {
    type: ADD_OPTION,
    payload: questionId
  };
}

export function handleEditionOptionTitle(questionId, title) {
  return {
    type: EDIT_OPTION_TITLE,
    payload: { id: questionId, title: title }
  };
}

export function setQuestionType(id, type) {
  return {
    type: SELECT_TYPE,
    payload: { id: id, type: type }
  };
}
