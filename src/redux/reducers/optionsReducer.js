import uuid from "uuid";

const initialState = {
  options: []
};

export const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_OPTION":
      return {
        options: [
          ...state.options,
          {
            id: new Date().getTime() + uuid(),
            questionId: action.payload,
            title: ""
          }
        ]
      };
    case "EDIT_OPTION_TITLE":
      const optionToChange = {
        ...state.options.find(option => option.id === action.payload.id),
        title: action.payload.title
      };
      return {
        options: [
          ...state.options.filter(option => option.id !== action.payload.id),
          optionToChange
        ].sort((a, b) => (a.id > b.id ? 1 : -1))
      };

    case "SELECT_TYPE":
      return {
        options: [
          ...state.options,
          [
            {
              id: new Date().getTime() + uuid(),
              questionId: action.payload,
              title: ""
            }
          ]
        ]
      };

    default:
      return state;
  }
};
