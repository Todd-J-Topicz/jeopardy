import React from "react";
import PropTypes from 'prop-types';
import Category from './Category';

const Categories = (props) => {
  return (
    <div id="categories" data-testid="categoryList">
      {props.categories.map((el, ind) => (
          <Category
            key = {ind}
            clues = {el.clues}
            title = {el.title}
            selectQuestion = {props.selectQuestion}
            currentQuestion = {props.currentQuestion}
            answeredQuestions = {props.answeredQuestions}
          />
      ))}
    </div>
  );
};

Categories.propTypes ={
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
}

export default Categories;
