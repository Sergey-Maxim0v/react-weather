import Widget from "./components/Widget";
import { WIDGET_SIZE } from "./components/Widget/types";
import Powered from "./components/Powered";
import { useState } from "react";

function App() {
  const [size, setSize] = useState<WIDGET_SIZE>(WIDGET_SIZE.medium);

  const sizeArr = [WIDGET_SIZE.small, WIDGET_SIZE.medium, WIDGET_SIZE.large];

  return (
    <div className="app">
      <div className="buttons">
        {sizeArr.map((el) => (
          <button
            key={el}
            onClick={() => setSize(el)}
            className={`${el === size ? "_active" : ""} button`}
          >
            {el.slice(1).toUpperCase()}
          </button>
        ))}
      </div>

      <Widget size={size} />

      <div className="powered__row">
        <Powered className="powered" />
      </div>
    </div>
  );
}

export default App;
