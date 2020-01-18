import { ADD_INFO } from "./types";

const initialState = {
  user:[{text:"Frame"}]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_INFO:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}