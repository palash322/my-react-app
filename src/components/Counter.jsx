import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Counter Example</h2>

      <h3>{count}</h3>

      <div className="counter-buttons">
        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrease
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;