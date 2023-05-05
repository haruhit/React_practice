import React, { useState } from "react";

// useStateの初期値の計算に時間のかかる処理
function initializeCounter() {
  for (let i = 0; i < 20000; i++) {
    console.log(i);
  }
  return 0;
}
console.log("あ");

const Counter = () => {
  // const [count, setCount] = useState(initializeCounter();)だと再レンダリングの度に計算する
  const [count, setCount] = useState(() => {
    // const initialValue = initializeCounter();
    // return initialValue;
    return initializeCounter();
  });
  console.log("い");

  return (
    <button
      onClick={() => {
        setCount((prev) => prev + 1);
        // setCount((prevjanakutemonandemoii) => prevjanakutemonandemoii + 1);
      }}
    >
      {count}
    </button>
  );
};

export default Counter;
