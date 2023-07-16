import React, { useState, useRef } from 'react';
import styled from 'styled-components';

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  const startStopTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current!);
    } else {
      const startTime = Date.now() - time * 1000;
      timerRef.current = window.setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        setTime(elapsed);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(timerRef.current!);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const Container = styled.div`
    width: 600px;
    margin: 80px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const H1 = styled.h1`
    font-size: 70px;
    text-align: center;
  `;

  const Desc = styled.p`
  font-size: 24px;
  text-align: center;
`;

  const Time = styled.button`
    width: 100%;
    line-height: 2;
    border: 2px double #000;
    border-radius: 10px;
    color: #000;
    font-size: 72px;
    font-weight: bold;
    text-align: center;
    transition: ".3s";
  `;

  const Button = styled.button`
    width: 200px;
    height: 50px;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 5px;
    font-size: 24px;
  `;

  const active = {
    backgroundColor: "#fff",
    transition: ".3s",
  };

  const stop = {
    backgroundColor: "#dbdbdbc7",
    transition: ".3s",
  };

  return (
    <Container>
      <H1>StopWatch</H1>
      <Desc>click to Start or Stop </Desc>
      <Time style={isRunning ? active : stop} onClick={startStopTimer}>{formatTime(time)}</Time>
      <Button onClick={handleReset}>Reset</Button>
    </Container>
  );
}
