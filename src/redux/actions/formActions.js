import {
  ADD_OPTION,
  ADD_QUESTION,
  DELETE_QUESTION,
  SELECT_TYPE,
  EDIT_OPTION_TITLE,
  EDIT_QUESTION_TITLE,
  DELETE_OPTION,
  CREATE_FORM,
  GET_QUESTIONS,
  RESPONSE_INPUT_CHANGE
} from '../types';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

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

export const deleteOption = id => dispatch => {
  dispatch({
    type: DELETE_OPTION,
    payload: id
  });
};

export const submitForm = (questions, options, history) => async dispatch => {
  const inputs = [...questions];
  try {
    let newForm = await axiosWithAuth().post(
      'https://us-central1-form-builder-97c3a.cloudfunctions.net/api/forms',
      { inputs, options }
    );
    console.log(newForm.data);
    dispatch({
      type: CREATE_FORM,
      payload: newForm.data.formId
    });
    history.push('/preview');
  } catch (error) {
    console.log(error);
  }
};

export const getForm = (questions, options) => {
  return {
    type: GET_QUESTIONS,
    payload: {
      questions,
      options
    }
  };
};

export const responseInputChange = (questionId, value) => {
  return {
    type: RESPONSE_INPUT_CHANGE,
    payload: {
      questionId,
      value
    }
  };
};
