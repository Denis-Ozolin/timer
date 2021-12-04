import { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import { Scoreboard } from 'components/Scoreboard/Scoreboard';
import { TimerControl } from 'components/TimerControl/TimerControl';
import { TimerBoard } from './Timer.styled';

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1000)
      }, 1000)
    }
    else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const startTimer = () => {
    setTimerOn(true);
  }

  const stopTimer = () => {
    setTimerOn(false);
    setTime(0);
  }

  const resetTimer = () => {
    setTime(0);
  }

  const pauseTimer = (e) => {
    if (e.currentTarget === e.target) {
      setTimerOn(false);
    }
  }

  const trottledPause = throttle(pauseTimer, 300);

  return (
    <TimerBoard onClick={trottledPause}>
      <Scoreboard time={time}/>
      <TimerControl start={startTimer} stop={stopTimer} reset={resetTimer}/>
    </TimerBoard>
  )
}

// $ npm i lodash.throttle