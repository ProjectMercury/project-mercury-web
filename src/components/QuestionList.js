import React from "react";
import { connect } from "react-redux";
import Question from "./Question";

function QuestionList({ questions }) {
  return (
    <div className="survey-container">
      <div>
        {questions.map((question, index) => (
          <Question
            key={question.id}
            question={question}
            questionIndex={index}
          />
        ))}
      </div>
     <button disabled style={{marginTop: "1.5rem"}} >Submit Form</button>   {/* this will post to the endpoint */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    questions: state.questions.questions
  };
};

export default connect(
  mapStateToProps,
  {}
)(QuestionList);
