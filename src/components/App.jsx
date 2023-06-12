import { Component } from 'react'
import { FeedbackOptions } from 'components/FeedbackOptions'
import { Statistics } from './Statistics'
import { Notification } from './Notification'
import { Section } from './Section'

class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleClick = (option) => {
    this.setState((prevState) =>
      ({ [option]: prevState[option] + 1 }))
    
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }
  
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      return acc + value
    }, 0)
  }

  countPositiveFeedbackPercentage = () => {
    return Math.ceil(this.state.good / this.countTotalFeedback() * 100)
  }

  render() {
      const { good, neutral, bad } = this.state;
   
    return (
      <div className="container">
        <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={ this.handleClick} />
        </Section>
        <Section title="Statistics">
        {Object.values(this.state).some(value => value > 0) ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          /> :
          <Notification message="There is no feedback" />
          }
        </Section>  
        {/* ---------------------II version------------------------- */}
        {/* прибрати деструктуризацію на р.33 і додати цей код замість р.42-53, 
        а також код в Statistics(2 варіант) замість р.4-24 */}
        {/* <Section title="Statistics">
        {Object.values(this.state).some(value => value > 0) ?
          <Statistics
            state={this.state}
            options={Object.keys(this.state)}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          /> :
          <Notification message="There is no feedback" />
          }
          </Section> */}
      </div>
    );
  }
}

export default App
