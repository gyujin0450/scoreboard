import React from 'react'

export const Counter = (props) => {
  state = {
    score: 0
  }

  incrementScore = () => {
    console.log(this);
    this.setState(prevState => ({score: prevState.score + 1}));
  }

  decrementScore = () => {
    console.log(this);
    this.setState(prevState => ({score: prevState.score - 1}));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> -</button>
        <span className="counter-score">{this.state.score}</span>
        {/* 모든브라우저에서 이벤트가 작동하도록 */}
        {/*<button className="counter-action increment" onClick={this.incrementScore}> +</button>*/}
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> +</button>
      </div>
    )
  }
}