import React from "react";
import PropTypes from 'prop-types';
import Clue from './Clue'

const Category = (props) => {
  return (
    <div className="category" data-testid="category">
      {' '}
      <div className={'categoryTitle'} data-testid='categoryTitle'>
        {props.title.toUpperCase()}
      </div>
      {props.clues.map((el, ind) => ind < 5
      ? (<Clue
          clueObject = {el}
          key = {el.id}
          selectQuestion = {props.selectQuestion}
          selected = {props.currentQuestion.id === el.id ? true : false}
          answered = {props.answeredQuestions.includes(el.id)}
        />)
        : null
      )}
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
