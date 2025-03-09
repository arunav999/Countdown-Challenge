import { useState, useRef } from "react";

import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [state, setState] = useState({
    timerStarted: false,
    timerExpired: false,
  });

  function handleStart() {
    timer.current = setTimeout(() => {
      setState({
        timerExpired: true,
      });
      dialog.current.open();
    }, targetTime * 1000);

    setState({
      timerStarted: true,
    });
  }

  function handleStop() {
    clearTimeout(timer.current);
    setState({
      timerStarted: false,
      timerExpired: false,
    });
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result={"lost"} />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={state.timerStarted ? handleStop : handleStart}>
            {state.timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={state.timerStarted ? "active" : undefined}>
          {state.timerStarted ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
