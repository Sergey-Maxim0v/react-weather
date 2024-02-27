import Widget from "./components/Widget";
import { WIDGET_SIZE } from "./components/Widget/types";
import Powered from "./components/Powered";

function App() {
  return (
    <div className="app">
      <Widget size={WIDGET_SIZE.small} />
      {/*<Widget size={WIDGET_SIZE.medium} />*/}
      {/*<Widget size={WIDGET_SIZE.large} />*/}

      <div className="powered__row">
        <Powered className="powered" />
      </div>
    </div>
  );
}

export default App;
