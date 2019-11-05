import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  handleEditQuestionTitle,
  addOption,
  addQuestion,
  setQuestionType,
  handleEditionOptionTitle,
  deleteQuestion
} from "../redux/actions/formActions";

function Question({
  question,
  questionIndex,
  questions,
  options,
  addQuestion,
  setQuestionType,
  handleEditQuestionTitle,
  addOption
}) {
  useEffect(() => console.log(question), [question, options]);

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
            onChange={e => handleEditQuestionTitle(question.id, e.target.value)}
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
            onChange={e => setQuestionType(question.id, e.target.value)}
          >
            <option value="text">Text</option>
            <option value="checkboxes">Checkboxes</option>
            <option value="multiple_choice">Multiple Choice</option>
          </select>
        </div>
      </div>

      {question.type === "text" ? (
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
        options
          .filter(option => option.questionId === question.id)
          .map((option, index) => {
            switch (question.type) {
              case "checkboxes":
                console.log(question);
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
                        onChange={e =>
                          handleEditionOptionTitle(option.id, e.target.value)
                        }
                      />
                    </form>

                    {index ===
                      options.filter(
                        option => option.questionId === question.id
                      ).length -
                        1 && (
                      <button onClick={e => addOption(question.id)}>+</button>
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
                        onChange={e =>
                          handleEditionOptionTitle(option.id, e.target.vaue)
                        }
                      />
                    </form>

                    {index ===
                      options.filter(
                        option => option.questionId === question.id
                      ).length -
                        1 && (
                      <button onClick={e => addOption(question.id)}>+</button>
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
          onClick={addQuestion}
        >
          Add Question
        </button>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    questions: state.questions.questions,
    options: state.options.options
  };
};

export default connect(
  mapStateToProps,
  {
    handleEditQuestionTitle,
    addOption,
    addQuestion,
    setQuestionType,
    handleEditionOptionTitle,
    deleteQuestion
  }
)(Question);
