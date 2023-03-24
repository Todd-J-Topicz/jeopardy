import React from "react";
import PropTypes from 'prop-types';

const Scoreboard = (props) => {
  return (
    <div id="scoreboard" data-testid="scoreboard">
      ${props.score}
    </div>
  );
};

Scoreboard.propTypes = {
  score: PropTypes.number
}

export default Scoreboard;
