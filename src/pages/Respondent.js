import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';

import { getForm } from '../redux/actions/formActions';
import RespondentOptions from '../components/RespondentOptions';

const Respondent = ({ getForm, questions, options, responses }) => {
  let { id } = useParams();

  const handleSubmit = () => {
    axiosWithAuth()
      .post(`/forms/${id}/responses`, { responses })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    axiosWithAuth()
      .get(`/forms/${id}`)
      .then(({ data: { inputs, options } }) => {
        getForm(inputs, options);
      });
  }, []);
  return questions ? (
    <div>
      {questions.map(question => (
        <>
          <h1>{question.title}</h1>
          <RespondentOptions question={question} options={options} />
        </>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  ) : (
    <p>Loading</p>
  );
};

export default connect(
  state => state.responses,
  { getForm }
)(Respondent);
