import Widget from "./components/Widget";
import { WIDGET_SIZE } from "./components/Widget/types";
import Powered from "./components/Powered";
import { useState } from "react";

function App() {
  const [size, setSize] = useState<WIDGET_SIZE>(WIDGET_SIZE.medium);

  return (
    <div className="app">
      <div className="buttons">
        <button onClick={() => setSize(WIDGET_SIZE.small)} className="button">
          Small
        </button>
        <button onClick={() => setSize(WIDGET_SIZE.medium)} className="button">
          Medium
        </button>
        <button onClick={() => setSize(WIDGET_SIZE.large)} className="button">
          Large
        </button>
      </div>

      <Widget size={WIDGET_SIZE.small} />
      <Widget size={size} />
      <Widget size={WIDGET_SIZE.large} />

      <div className="powered__row">
        <Powered className="powered" />
      </div>
    </div>
  );
}

export default App;
