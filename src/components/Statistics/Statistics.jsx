import React from 'react';
import Notification from '../Notification/Notification';
// import PropTypes from 'prop-types';

const Statistics = ({ title, good, neutral, bad, total, positivePercentage }) =>
  total > 0 ? (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>
          Good: <span className="Counter__value">{good}</span>
        </li>
        <li>
          Neutral:
          <span className="Counter__value">{neutral}</span>
        </li>
        <li>
          Bad: <span className="Counter__value">{bad}</span>
        </li>
        <li>
          Total:
          <span className="Counter__value">{total}</span>
        </li>
        <li>
          Positive feedback:
          <span className="Counter__value">{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  ) : (
    <Notification message="No feedback given" />
  );

export default Statistics;
