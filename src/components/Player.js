import React from 'react'
import {Counter} from "./components/Counter"

export const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {/* props 로 넘어온 함수를 이용하여 player를 삭제하는 클릭 이벤트를 추가 ????? */}
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
      </span>
      <span className="player-name">{props.name}</span>
      <Counter score={props.score}/>
    </div>
  )
}