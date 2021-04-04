import React from 'react';
import PropTypes from 'prop-types';

import Container from './components/Container';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.number,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

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

    return positiveFeedback ? Math.round(positiveFeedback) : 0;
  }

  render() {
    const totalFeedback = this.countTotalFeedback();
    const feedbackPercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={feedbackPercentage}
          ></Statistics>
        </Section>
      </Container>
    );
  }
}

export default App;
