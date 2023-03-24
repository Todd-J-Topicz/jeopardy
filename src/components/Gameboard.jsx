import React from "react";
import PropTypes from 'prop-types';
import Categories from './Categories';
import Clue from "./Clue";

const Gameboard = (props) => {
  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? "question" : "gameboard"}>
      {props.currentQuestion.question
      ? <Clue
          clueObject={props.currentQuestion}
          selectQuestion={props.selectQuestion}
          selected={true}
        />
        : <Categories
        {...props}
      />}
    </div>
  );
};
Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
}


export default Gameboard;
