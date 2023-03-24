import React from "react";
import PropTypes from 'prop-types';

const Clue = (props) => {
  if (props.selected){
    return(
      <div
        data-testid="clue"
        onClick={() => props.selectQuestion(props.clueObject)}
      >
        {props.clueObject.question}
      </div>
    );
  } else if (!props.answered){
    return (
      <div
        className={'clueValue'}
        data-testid="value"
        onClick={() => props.selectQuestion(props.clueObject)}
        >
          ${props.clueObject.value}
        </div>
    );
  }
  else {
    return (
      <div
        className={'clueValue'}
        data-testid="value"
      >
      </div>
    )
  }
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object,
}

export default Clue;
