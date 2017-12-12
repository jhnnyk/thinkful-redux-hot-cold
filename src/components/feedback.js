import React from "react";
import { connect } from "react-redux";

import "./feedback.css";

export function Feedback(props) {
  /**
   * Below, we'll use the guessCount to generate a key so that React treats the feedback message
   * as a DOM change, even when a guess does not change the feedback text.
   * This is necessary for consistent aural feedback via aria-live.
   */
  const key = props.guesses.length;

  let guessAgain;
  if (key !== 0) {
    guessAgain = <span className="visuallyhidden">Guess again!</span>;
  }
  return (
    <h2
      key={key}
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.feedback} {guessAgain}
    </h2>
  );
}

const mapStateToProps = state => ({
  auralStatus: state.auralStatus,
  feedback: state.feedback,
  guesses: state.guesses,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Feedback);
