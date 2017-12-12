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
    case actions.GENERATE_AURAL_UPDATE:
      const pluralize = state.guesses.length !== 1;

      let auralStatus = `Here's the status of the game right now: ${
        state.feedback
      } You've made ${state.guesses.length} ${
        pluralize ? "guesses" : "guess"
      }.`;

      if (state.guesses.length > 0) {
        auralStatus += ` ${
          pluralize ? "In order of most- to least-recent, they are" : "It was"
        }: ${state.guesses.reverse().join(", ")}`;
      }

      return { ...state, auralStatus: auralStatus };
    case actions.MAKE_GUESS:
      const guess = parseInt(action.guess, 10);
      if (isNaN(guess)) {
        return { ...state, feedback: "Please enter a valid number" };
      }

      const difference = Math.abs(guess - state.correctAnswer);

      let feedback;
      if (difference >= 50) {
        feedback = "You're Ice Cold...";
      } else if (difference >= 30) {
        feedback = "You're Cold...";
      } else if (difference >= 10) {
        feedback = "You're Warm.";
      } else if (difference >= 1) {
        feedback = "You're Hot!";
      } else {
        feedback = "You got it!";
      }

      // We typically wouldn't touch the DOM directly like this in React
      // but this is the best way to update the title of the page,
      // which is good for giving screen-reader users
      // instant information about the app.
      document.title = feedback ? `${feedback} | Hot or Cold` : "Hot or Cold";

      return { ...state, feedback, guesses: [...state.guesses, action.guess] };
    default:
      return state;
  }
};
