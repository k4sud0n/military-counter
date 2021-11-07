import React from 'react';

import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (!completed) {
    return (
      <>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-5xl">
            <span>{days}</span>
          </span>
          일
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-5xl countdown">
            <span style={{ '--value': hours }}></span>
          </span>
          시간
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-5xl countdown">
            <span style={{ '--value': minutes }}></span>
          </span>
          분
        </div>
        <p className="text-base flex flex-wrap content-center text-neutral-content font-extralight">
          그리고
        </p>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-5xl countdown">
            <span style={{ '--value': seconds }}></span>
          </span>
          초
        </div>
      </>
    );
  }
};

function Counter() {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <Countdown date="2023-08-07T00:00:00" renderer={renderer} />
    </div>
  );
}

export default Counter;
