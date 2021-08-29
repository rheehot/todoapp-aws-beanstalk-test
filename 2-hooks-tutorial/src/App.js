import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <Counter />
      <button onClick={() => setVisible(!visible)}>
        {!visible ? "보이기" : "숨기기"}
      </button>

      <br />
      <br />

      {visible && <Info />}

      <br />
      <br />

      <Average />
    </div>
  );
}

export default App;
