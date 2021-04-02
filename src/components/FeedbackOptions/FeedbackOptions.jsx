import React from 'react';
// import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="Counter">
    <div className="Counter__controls">
      {options.map(option => (
        <button
          name={option}
          type="button"
          key={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default FeedbackOptions;
