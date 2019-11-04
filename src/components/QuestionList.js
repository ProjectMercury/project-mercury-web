import React from "react";
import { connect } from "react-redux";
import Question from "./Question";

function QuestionList({ questions }) {
  return (
    <div>
      {questions.map((question, index) => (
        <Question
          key={question.id}
          question={question}
          questionIndex={index}
        />
      ))}
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
