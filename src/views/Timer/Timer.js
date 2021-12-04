import { useState, useMemo, useCallback, useEffect } from 'react';
import { Observable, Subject } from 'rxjs';
import {
  map,
  buffer,
  debounceTime,
  filter,
  takeUntil,
} from 'rxjs/operators';
import { Scoreboard } from 'components/Scoreboard/Scoreboard';
import { TimerControls } from 'components/TimerControls/TimerControls';
import { TimerBoard } from './Timer.styled';

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerState, setTimerState] = useState('stop');

  const stop$ = useMemo(() => new Subject(), []);
  const click$ = useMemo(() => new Subject(), []);

  const startTimer = () => {
    setTimerState('start');
  };

  const stopTimer = useCallback(() => {
    setTimerState('stop');
    setTime(0);
  }, []);

  const resetTimer = useCallback(() => {
    setTimerState('reset');
    setTime(0);
  }, []);

  const waitTimer = useCallback(() => {
    click$.next();
    setTimerState('wait');
    click$.next();
  }, [click$]);

  useEffect(() => {
    const doubleClick$ = click$.pipe(
      buffer(click$.pipe(debounceTime(300))),
      map((list) => list.length),
      filter((value) => value >= 2),
    );

    const timer$ = new Observable((observer) => {
      const intervalId = setInterval(() => {
        observer.next(setTime(prevTime => prevTime + 1000));
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    });

    const subscribtion$ = timer$
      .pipe(takeUntil(doubleClick$))
      .pipe(takeUntil(stop$))
      .subscribe({
        next: () => {
          if (timerState === 'reset') {
            setTime(0);
            // console.log('start');
          }
        },
      });

    return (() => {
      subscribtion$.unsubscribe();
    });
  }, [click$, stop$, time, timerState]);

  return (
    <TimerBoard onClick={waitTimer}>
      <Scoreboard time={time}/>
      <TimerControls start={startTimer} stop={stopTimer} reset={resetTimer}/>
    </TimerBoard>
  )
}

// import React, { Component } from "react";
// import { render } from "react-dom";
// import "./style.css";
// import { useEffect, useState } from "react";
// import { interval, Subject } from "rxjs";
// import { takeUntil } from "rxjs/operators";
 
// type Status = "run" | "stop" | "wait";
 
// export default function App() {
//   const [sec, setSec] = useState(0);
//   const [status, setStatus] = useState<Status>("stop");
 
//   useEffect(() => {
//     const unsubscribe$ = new Subject();
//     interval(1000)
//       .pipe(takeUntil(unsubscribe$))
//       .subscribe(() => {
//         if (status === "run") {
//           setSec(val => val + 1000);
//         }
//       });
//     return () => {
//       unsubscribe$.next();
//       unsubscribe$.complete();
//     };
//   }, [status]);
 
//   const start = React.useCallback(() => {
//     setStatus("run");
//   }, []);
 
//   const stop = React.useCallback(() => {
//     setStatus("stop");
//     setSec(0);
//   }, []);
 
//   const reset = React.useCallback(() => {
//     setSec(0);
//   }, []);
 
//   const wait = React.useCallback(() => {
//     setStatus("wait");
//   }, []);
 
//   return (
//     <div>
//       <span> {new Date(sec).toISOString().slice(11, 19)}</span>
//       <button className="start-button" onClick={start}>
//         Start
//       </button>
//       <button className="stop-button" onClick={stop}>
//         Stop
//       </button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={wait}>Wait</button>
//     </div>
//   );
// }