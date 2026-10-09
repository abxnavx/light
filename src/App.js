
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <h1>Change Background Color</h1>

      <button onClick={() => setColor("red")}>
        Red
      </button>

      <button onClick={() => setColor("blue")}>
        Blue
      </button>

      <button onClick={() => setColor("green")}>
        Green
      </button>

      <button onClick={() => setColor("white")}>
        Reset
      </button>
    </div>
  );
}

export default App;
