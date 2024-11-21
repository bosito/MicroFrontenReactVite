import { useState } from "react";
import "./App.css";

interface IApp {
  counterContainer?: number;
}
function App({ counterContainer }: IApp) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Counter container: {counterContainer}</p>
    </>
  );
}

export default App;
