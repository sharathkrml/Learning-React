import "./App.css";
import "./appStyles.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
function App() {
  return (
    <div className="App">
      <ClickCounter name="Sharath" />
      <HoverCounter />
    </div>
  );
}
export default App;
