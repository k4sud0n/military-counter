import React from 'react';

import Counter from './components/Counter';

function App() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="text-3xl text-center justify-center items-center align-middle font-extralight">
          2023년 8월 7일이 올까요?
        </h1>
        <div className="justify-center items-center my-7">
          <Counter />
        </div>
        <p className="text-base text-center justify-center items-center align-middle font-extralight">
          남았습니다.
        </p>
      </div>
    </div>
  );
}

export default App;
