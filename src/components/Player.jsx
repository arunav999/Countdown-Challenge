import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [state, setState] = useState({
    playerName: null,
  });

  function handleClick() {
    setState({
      playerName: playerName.current.value,
    });
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {state.playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
