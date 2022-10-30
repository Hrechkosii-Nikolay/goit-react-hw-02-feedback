import React, { Component } from 'react';

import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

import { SectionWrap } from './Section/section.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // test1: 0,
    // test2: 0,
    // test3: 0,
  };

  onBtnClick = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prev, next) => {
      return prev + next;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    return (
      <SectionWrap>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onBtnClick}
          />
        </Section>
        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              options={this.state}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              total={this.countTotalFeedback()}
            />
          )}
        </Section>
      </SectionWrap>
    );
  }
}

export default App;
