import React, { Component } from 'react';

// import React from 'react';

import './App.css';
// import Feedback from './components/Feedback';

class App extends Component {
   state = {
     good: 0,
     neutral: 0,
     bad: 0,
   }

    // clickButton = (event) => {
    //     console.log(event.target)
    // }
    
    clickButtonGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            }
        });
    }
     clickButtonNeutral = () => {
         this.setState(prevState => ({
             neutral: prevState.neutral + 1,
         }));
    }
     clickButtonBad = () => {
         this.setState(prevState => ({
             bad: prevState.bad + 1,
         }));
    }
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
    console.log("тотал");
  }
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round(this.state.good * 100 / this.countTotalFeedback())
      : 0;
  }
    render() {
        return (
        <div className="Feedback">
            <h2 className="Feedback__title">Please leave feedback</h2>
                <button
                    className="Feedback__button"
                    type="button"
                    onClick={this.clickButtonGood}>
                    Good
                </button>
                <button
                    className="Feedback__button"
                    type="button"
                    onClick={this.clickButtonNeutral}>
                    Neutral
                    </button>
                <button
                    className="Feedback__button"
                    type="button"
                    onClick={this.clickButtonBad}>
                    Bad
                    </button>
                
                <h3 className="Statistics__title">Statistics</h3>
                <ul className="Statistics__list">
                    <li>Good: { this.state.good }</li>
                    <li>Neutral: { this.state.neutral }</li>
                    <li>Bad: { this.state.bad }</li>
                    <li>Total: { this.countTotalFeedback() }</li>
                    <li>Positive feedback: { this.countPositiveFeedbackPercentage() } %</li>
                </ul>
       </div>
        )   
    }
}
export default App;
