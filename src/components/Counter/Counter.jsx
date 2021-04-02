import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Counter.module.css';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const positiveFeedback =
      ((this.countTotalFeedback() - (this.state.neutral + this.state.bad)) *
        100) /
      this.countTotalFeedback();

    return Math.round(positiveFeedback) ? positiveFeedback : 0;
  }

  render() {
    return (
      <div className="Counter">
        <h1>Please leave feedback</h1>

        <div className="Counter__controls">
          <button name="good" type="button" onClick={this.handleIncrement}>
            Good
          </button>

          <button name="neutral" type="button" onClick={this.handleIncrement}>
            Neutral
          </button>

          <button name="bad" type="button" onClick={this.handleIncrement}>
            Bad
          </button>
        </div>

        <h2>Statistics</h2>
        <ul>
          <li>
            Good: <span className="Counter__value">{this.state.good}</span>
          </li>
          <li>
            Neutral:
            <span className="Counter__value">{this.state.neutral}</span>
          </li>
          <li>
            Bad: <span className="Counter__value">{this.state.bad}</span>
          </li>
          <li>
            Total:
            <span className="Counter__value">{this.countTotalFeedback()}</span>
          </li>
          <li>
            Positive feedback:
            <span className="Counter__value">
              {this.countPositiveFeedbackPercentage()}
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Counter;
