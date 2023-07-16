import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timer | undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 1440)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timeInSeconds % 60)
      .toString()
      .padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  };

  const H1 = styled.h1`
    font-size: 70px;
    text-align: center;
  `;

  const Container = styled.div`
    width: 600px;
    margin: 80px auto 0;
  `;

  const Time = styled.div`
    width: 100%;
    line-height: 2;
    border: 2px double #000;
    border-radius: 10px;
    font-size: 72px;
    font-weight: bold;
    text-align: center;
  `;

  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Button = styled.button`
    width: 200px;
    height: 50px;
    margin: 20px 10px 0;
    background-color: #fff;
    border-radius: 5px;
    font-size: 24px;
  `;

  return (
    <Container>
      <H1>Stopwatch App</H1>
      <Time>{formatTime(time)}</Time>
      <ButtonWrapper>
        {!isRunning
          ? <Button onClick={()=>{setIsRunning(true)}}>Start</Button>
          : <Button onClick={()=>{setIsRunning(false)}}>Stop</Button>
        }
        <Button onClick={handleReset}>Reset</Button>
      </ButtonWrapper>
    </Container>
  );
}
