import React from "react";
import { connect } from "react-redux";

import "./guess-count.css";

export class GuessCount extends React.Component {
  render() {
    const guessCount = this.props.guesses.length;
    const isPlural = guessCount !== 1;
    const guessNoun = isPlural ? "guesses" : "guess";

    return (
      <h2 id="guessCount">
        You've made <span id="count">{guessCount}</span> {guessNoun}!
      </h2>
    );
  }
}

const mapStateToProps = state => ({ guesses: state.guesses });

export default connect(mapStateToProps)(GuessCount);
