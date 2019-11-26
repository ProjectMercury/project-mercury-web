import React from "react";
import { connect } from "react-redux";
import Question from "../components/Question";
import { submitForm } from "../redux/actions/formActions";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function CreateForm({ options, questions, submitForm, history }) {
  const handleSubmit = () => {
    submitForm(questions, options, history);
  };

  return (
    <div>
      <Topbar />
      <Sidebar />
      <div>
        {questions.map((question, index) => (
          <Question
            key={question.id}
            question={question}
            questionIndex={index}
          />
        ))}
      </div>
      <button style={{ marginTop: "1.5rem" }} onClick={handleSubmit}>
        Submit Form
      </button>{" "}
      {/* this will post to the endpoint */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    questions: state.questions.questions,
    options: state.options.options
  };
};

export default connect(mapStateToProps, { submitForm })(CreateForm);
