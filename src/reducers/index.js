import * as actions from "../actions";

const initialState = {
  guesses: [],
  feedback: "Make your guess!",
  auralStatus: "",
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RESTART_GAME:
      return {
        ...initialState,
        correctAnswer: Math.floor(Math.random() * 100) + 1
      };
    case actions.MAKE_GUESS:
      return {
        ...state,
        guesses: [...state.guesses, action.guess]
      };
    default:
      return state;
  }
};
