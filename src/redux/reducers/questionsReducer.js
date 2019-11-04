import uuid from "uuid";

const initialState = {
  questions: [
    {
      id: new Date().getTime(),
      title: "",
      type: "TEXT"
    }
  ]
};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return {
        questions: [
          ...state.questions,
          { id: new Date().getTime() + uuid(), title: "", type: "TEXT" }
        ]
      };
    case "DELETE_QUESTION":
      const newQuestions = state.questions.filter(
        question => question.id !== action.payload
      );
      return {
        questions: newQuestions
      };
    case "EDIT_QUESTION_TITLE":
      const questionTitleToEdit = {
        ...state.questions.find(current => current.id === action.payload.id),
        title: action.payload.title
      };
      return {
        questions: [
          ...state.questions.filter(
            current => current.id !== action.payload.id
          ),
          questionTitleToEdit
        ].sort((a, b) => (a.id > b.id ? 1 : -1))
      };

    case "SELECT_TYPE":
      const questionToChangeType = {
        ...state.questions.find(current => current.id === action.payload.id),
        type: action.payload.type
      };
      return {
        questions: [
          ...state.questions.filter(
            current => current.id !== action.payload.id
          ),
          questionToChangeType
        ].sort((a, b) => (a.id > b.id ? 1 : -1))
      };
    default:
      return state;
  }
};

// const questions = [
//   {
//     id: uuid(),
//     type: "MULTI_CHOICE",
//     title: "Select a choice",
//     options: [
//       {
//         id: uuid(),
//         content: "First choice"
//       },
//       {
//         id: uuid(),
//         content: "Second choice"
//       },
//       {
//         id: uuid(),
//         content: "Third choice"
//       }
//     ]
//   },

//   {
//     id: uuid(),
//     type: "CHECKBOXES",
//     title: "Check All That Apply",
//     options: [
//       {
//         id: uuid(),
//         content: "First choice"
//       },
//       {
//         id: uuid(),
//         content: "Second choice"
//       },
//       {
//         id: uuid(),
//         content: "Third choice"
//       }
//     ]
//   },

//   {
//     id: uuid(),
//     type: "SINGLE_LINE_TEXT",
//     title: "Untitled",
//     placeholder: ""
//   },

//   {
//     id: uuid(),
//     type: "MUTLI_LINE_TEXT",
//     title: "Untitled",
//     placeholder: ""
//   },

//   {
//     id: uuid(),
//     type: "DROPDOWN",
//     title: "Select a choice",
//     options: [
//       {
//         id: uuid(),
//         content: "First choice"
//       },
//       {
//         id: uuid(),
//         content: "Second choice"
//       },
//       {
//         id: uuid(),
//         content: "Third choice"
//       }
//     ]
//   },

//   {
//     id: uuid(),
//     type: "MULTI_CHOICE",
//     title: "Respond to the following questions",
//     questions: [
//       {
//         id: uuid(),
//         content: "First Question"
//       },
//       {
//         id: uuid(),
//         content: "Second Question"
//       },
//       {
//         id: uuid(),
//         content: "Third Question"
//       }
//     ],
//     options: [
//       {
//         id: uuid(),
//         content: "First choice"
//       },
//       {
//         id: uuid(),
//         content: "Second choice"
//       },
//       {
//         _id: uuid(),
//         content: "Third choice"
//       }
//     ]
//   }
// ];
