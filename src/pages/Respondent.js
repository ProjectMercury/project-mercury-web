import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { getForm } from "../redux/actions/formActions";
import RespondentOptions from "../components/RespondentOptions";
import Loader from "../components/Loader";

const Respondent = ({ getForm, questions, options, responses }) => {
  let { id } = useParams();

  const handleSubmit = () => {
    axios
      .post(
        `https://us-central1-form-builder-97c3a.cloudfunctions.net/api/forms/${id}/responses`,
        { responses }
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getForm(id);
  }, []);
  return questions ? (
    <div>
      {questions.map(question => (
        <div key={question.id}>
          <h1>{question.title}</h1>
          <RespondentOptions question={question} options={options} />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  ) : (
    <Loader />
  );
};

export default connect(state => state.responses, { getForm })(Respondent);
