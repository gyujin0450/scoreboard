import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/Header"
import {Player} from "./components/Player"

// 기존 것 삭제하고,
// class component
// 모듈화 : ./components/Header.js 로 옮김
/*const Header = (props) => {
  console.log(props)
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  )
}*/

/*const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {/!* props 로 넘어온 함수를 이용하여 player를 삭제하는 클릭 이벤트를 추가 ????? *!/}
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
      </span>
      <span className="player-name">{props.name}</span>
      <Counter score={props.score}/>
    </div>
  )
}*/

/*class Counter extends React.Component {
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
        {/!* 모든브라우저에서 이벤트가 작동하도록 *!/}
        {/!*<button className="counter-action increment" onClick={this.incrementScore}> +</button>*!/}
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> +</button>
      </div>
    )
  }
}*/

// const App = () => (
//   <div className="scoreboard">
//     {/* {title: 'My Scoreboard', totalPlayers: 11 } */}
//     <Header title="My Scorebord" totalPlayers={11}/>
//
//     {/* Player List */}
//     <Player name="LDK" score={50}/>
//     <Player name="HONG" score={60}/>
//     <Player name="KIM" score={70}/>
//     <Player name="PARK" score={80}/>
//   </div>
// )

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  }

  // 삭제 로직
  // 1) App 에서 삭제 함수를 생성
  // 2) props 로 삭제함수를 전달
  // 3) 삭제 클릭시 해당 props 호출

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length}/>

        {/*Players List*/}
        {this.state.players.map(item => <Player name={item.name}
                                                key={item.id.toString()}
                                                removePlayer={this.handleRemovePlayer}
                                                id={item.id}/>)
        }
      </div>
    )
  }
}

export default App;