import React from 'react';
import { connect } from 'react-redux';
import { responseInputChange } from '../redux/actions/formActions';

const RespondentOptions = ({ question, options, responseInputChange }) => {
  const handleChange = e => {
    responseInputChange(question.id, e.target.value);
  };

  return question.type === 'checkboxes' ? (
    options
      .filter(option => option.questionId === question.id)
      .map(option => (
        <div>
          <input type="checkbox" onChange={handleChange} />{' '}
          <span>{option.title}</span>
        </div>
      ))
  ) : question.type === 'multiple_choice' ? (
    options
      .filter(option => option.questionId === question.id)
      .map(option => (
        <div>
          <input type="radio" onChange={handleChange} />{' '}
          <span>{option.title}</span>
        </div>
      ))
  ) : (
    <input type="text" onChange={handleChange} />
  );
};

export default connect(
  null,
  { responseInputChange }
)(RespondentOptions);
