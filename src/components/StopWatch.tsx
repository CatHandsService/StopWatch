import React, { useState, useEffect, useCallback } from 'react';
// import '../index'


const active = {
  backgroundColor: "#fff",
};

const stop = {
  backgroundColor: "#dbdbdbc7",
  opacity: .5,
};

///////////////////////////////////////////////////////////////////////////////////////
//
//
//
///////////////////////////////////////////////////////////////////////////////////////
export const StopWatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 0.01);
      }, 10);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleStart = useCallback(() => {
    setIsRunning(true);
  }, []);

  const handleStop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const handleReset = useCallback(() => {
    setTime(0);
    setIsRunning(false);
  }, []);

  const padTime = (targetTime: number, digits: number) => {
    return targetTime.toString().padStart(digits, '0');
  };

  const formatTime = (): string => {
    const hours = padTime(Math.floor(time / 3600), 2);
    const minutes = padTime(Math.floor((time % 3600) / 60), 2);
    const seconds = padTime(Math.floor(time % 60), 2);
    const milliseconds = padTime(Math.floor((time % 1) * 100), 2);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className='container'>
      <h1 className='h1'>StopWatch</h1>
      <p className='desc'>click to Start or Stop </p>
      <button
        className='timer'
        style={isRunning ? active : stop}
        onClick={isRunning? handleStop: handleStart}
      >
        {formatTime()}
      </button>
      <button
        className='reset'
        onClick={handleReset}
      >
        Reset
      </button>
      <div className='description'>
        Technology used：<br/>
        　React + TypeScript<br/>
        　CSS
      </div>
    </div>
  );
}
