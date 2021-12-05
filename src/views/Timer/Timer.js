import { useState, useEffect } from 'react';
import { Scoreboard } from 'components/Scoreboard/Scoreboard';
import { TimerControl } from 'components/TimerControl/TimerControl';
import { TimerBoard } from './Timer.styled';

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [clickOn, setClickOn] = useState(false);
  const [firstClickTime, setFirstClickTime] = useState(0);
  const [twoClickTime, setTwoClickTime] = useState(0);

  useEffect(() => {
    let intervalId = null;

    if (timerOn) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1000)
      }, 1000)
    }
    else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timerOn]);

  const startTimer = () => {
    setTimerOn(true);
  }

  const stopTimer = () => {
    setTimerOn(false);
    setTime(0);
  }

  const resetTimer = () => {
    setTimerOn(true);
    setTime(0);
  }

  const waitTimer = (event) => {
    if (event.currentTarget === event.target) {
      if (clickOn === false && timerOn === true) {
        setFirstClickTime(Date.now);
        setClickOn(true);
      }

      if (clickOn === true && timerOn === true) {
        setTwoClickTime(Date.now);
        setClickOn(false);

        if ((firstClickTime - twoClickTime) <= 300) {
          setTimerOn(false);
        } 
      }
    }
    return;
  }

  return (
    <TimerBoard onClick={waitTimer}>
      <Scoreboard time={time}/>
      <TimerControl start={startTimer} stop={stopTimer} reset={resetTimer}/>
    </TimerBoard>
  )
}