import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

let root;

if (import.meta.env.MODE === "development") {
  root = createRoot(document.getElementById("root")!);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  interface IRoot {
    counterContainer: number;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Root = (props: IRoot) => {
    return <App {...props} />;
  };

  root = Root;
}

export default root;
