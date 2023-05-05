import React, { useState } from "react";
import Counter from "./components/counter/Counter";
import Counter_old from "./components/Counter_old";
import "./App.css";
import InputForm from "./components/InputForm";
import ItemList from "./components/itemList/ItemList";

function App() {
  const [isDisplay, setIsDisplay] = useState(true);
  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
  };
  return (
    <div className="App">
      <h2>#2 useEffect</h2>
      {/* <button onClick={() => handleDisplay()}>
        {isDisplay ? "コンポーネント非表示" : "コンポーネント表示"}
      </button> */}
      {/* {isDisplay && <Counter />} */}
      {/* <Counter_old /> */}
      {/* <InputForm /> */}
      <ItemList />
    </div>
  );
}

export default App;
