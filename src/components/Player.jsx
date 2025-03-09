import { useState } from "react";

export default function Player() {
  const [state, setState] = useState({
    playerName: "",
    submitted: false,
  });

  function handleNameChange(event) {
    setState({
      submitted: false,
      playerName: event.target.value,
    });
  }

  function handleClick() {
    setState((prev) => ({
      ...prev,
      submitted: true,
    }));
  }

  return (
    <section id="player">
      <h2>Welcome {state.submitted ? state.playerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleNameChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
