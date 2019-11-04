import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
import {
  handleEditQuestionTitle,
  handleAddOption,
  handleAddQuestion,
  handleSelectType,
  handleEditionOptionTitle,
  deleteQuestion
} from "../redux/actions/formActions";
import uuid from "uuid";

function Question({ question, questionIndex, questions, setQuestions }) {
  const [type, setType] = useState("TEXT");
  const [options, setOptions] = useState([]);

  useEffect(() => console.log(type), [type, options]);
  console.log(options);
  console.log(questions);

  const handleAddQuestion = e => {
    setQuestions([
      ...questions,
      { id: new Date().getTime() + uuid(), title: "", type: "TEXT" }
    ]);
  };

  const handleQuestionTitleChange = e => {
    const questionTitleToEdit = {
      ...questions.find(current => current.id === question.id),
      title: e.target.value
    };

    setQuestions(
      [
        ...questions.filter(current => current.id !== question.id),
        questionTitleToEdit
      ].sort((a, b) => (a.id > b.id ? 1 : -1))
    );
  };

  const handleSelectType = e => {
    if (e.target.value === "text") {
      setType("text");
    }

    if (e.target.value === "checkboxes") {
      setType("checkboxes");
      setOptions([
        {
          id: new Date().getTime() + uuid(),
          questionId: question.id,
          title: ""
        }
      ]);
    }

    if (e.target.value === "multiple_choice") {
      setType("multiple_choice");
      setOptions([
        {
          id: new Date().getTime() + uuid(),
          questionId: question.id,
          title: ""
        }
      ]);
    }
  };

  const handleOptionChange = (id, e) => {
    const optionToChange = {
      ...options.find(option => option.id === id),
      title: e.target.value
    };
    setOptions(
      [...options.filter(option => option.id !== id), optionToChange].sort(
        (a, b) => (a.id > b.id ? 1 : -1)
      )
    );
  };

  const handleAddOption = e => {
    setOptions([
      ...options,
      { id: new Date().getTime() + uuid(), questionId: question.id, title: "" }
    ]);
  };

  //   const relatedOptions = options.filter(
  //     option => option.questionID === question.id
  //   );

  return (
    <div style={{ marginTop: "5rem" }}>
      <div
        className="question-description"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="question-description-left">
          <input
            type="text"
            name="title"
            placeholder="Enter question title"
            onChange={handleQuestionTitleChange}
            style={{
              width: "300px",
              outline: 0,
              borderWidth: "0 0 1px",
              borderColor: "blue",
              marginBottom: "1rem"
            }}
          />
        </div>
        <div>
          <select
            className="question-description-right"
            onChange={handleSelectType}
          >
            <option value="text">Text</option>
            <option value="checkboxes">Checkboxes</option>
            <option value="multiple_choice">Multiple Choice</option>
          </select>
        </div>
      </div>

      {type === "text" ? (
        <input
          type="text"
          placeholder="Short text answer input"
          disabled
          style={{
            outline: 0,
            borderWidth: "0 0 1px",
            borderColor: "blue",
            width: "180px"
          }}
        ></input>
      ) : (
        options.map((option, index) => {
          switch (type) {
            case "checkboxes":
              return (
                <div
                  key={option.id}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <form>
                    <input type="checkbox" disabled />{" "}
                    <input
                      style={{
                        outline: 0,
                        borderWidth: "0 0 1px",
                        borderColor: "blue"
                      }}
                      type="text"
                      placeholder={`Option ${index + 1}`}
                      onChange={e => handleOptionChange(option.id, e)}
                    />
                  </form>

                  {index === options.length - 1 && (
                    <button onClick={handleAddOption}>+</button>
                  )}
                </div>
              );

            case "multiple_choice":
              return (
                <div
                  key={option.id}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <form>
                    <input type="radio" disabled />{" "}
                    <input
                      style={{
                        outline: 0,
                        borderWidth: "0 0 1px",
                        borderColor: "blue"
                      }}
                      type="text"
                      placeholder={`Option ${index + 1}`}
                      onChange={e => handleOptionChange(option.id, e)}
                    />
                  </form>

                  {index === options.length - 1 && (
                    <button onClick={handleAddOption}>+</button>
                  )}
                </div>
              );

            default:
              return null;
          }
        })
      )}
      {questionIndex === questions.length - 1 && (
        <button
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            marginTop: "1rem"
          }}
          onClick={handleAddQuestion}
        >
          Add Question
        </button>
      )}
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
  {
    handleEditQuestionTitle,
    handleAddOption,
    handleAddQuestion,
    handleSelectType,
    handleEditionOptionTitle,
    deleteQuestion
  }
)(Question);
