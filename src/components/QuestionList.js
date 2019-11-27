import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Question from "./Question";
import { submitForm } from "../redux/actions/formActions";
import Topbar from "./Topbar";
import { heading_4 } from "./~reusables/variables/font-sizes";

function QuestionList({ options, questions, submitForm, history }) {
  const handleSubmit = () => {
    submitForm(questions, options, history);
  };

  return (
    <Div>
      <Topbar />
      <FormContainer>
        <h4>Create a Form</h4>
        <>
          {questions.map((question, index) => (
            <Question
              key={question.id}
              question={question}
              questionIndex={index}
            />
          ))}
        </>
        <button style={{ marginTop: "1.5rem" }} onClick={handleSubmit}>
          Submit Form
        </button>{" "}
      </FormContainer>
    </Div>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  min-height: 90vh;
  margin-top: 20px;
  background: #ffffff;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  h4 {
    font-size: ${heading_4};
    font-family: "Muli";
    color: #3d505e;
    font-weight: bold;
    display: flex;
    padding: 2rem;
  }
`;

const Div = styled.div`
  background: #f0f4ff;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;


const mapStateToProps = state => {
  return {
    questions: state.questions.questions,
    options: state.options.options
  };
};

export default connect(mapStateToProps, { submitForm })(QuestionList);
