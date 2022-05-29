import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Counter App </h1>
      <p className="text">{counter}</p>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Up</button>
        <button onClick={() => setCounter(counter - 1)}>Down</button>
      </div>
    </div>
  );
}
