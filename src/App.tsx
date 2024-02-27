import Widget from "./components/widget";
import { WIDGET_SIZE } from "./components/widget/types";

function App() {
  return (
    <div className="app">
      <Widget size={WIDGET_SIZE.small} />
      <Widget size={WIDGET_SIZE.medium} />
      <Widget size={WIDGET_SIZE.large} />
    </div>
  );
}

export default App;
