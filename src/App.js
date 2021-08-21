import "./App.css";
import "./appStyles.css";
import ClickCounter2 from "./components/ClickCounter2";
import Counterprop from "./components/Counterprop";
import HoverCounter2 from "./components/HoverCounter2";
// import User from "./components/User";
function App() {
  return (
    <div className="App">
      {/* <ClickCounter2 /> */}
      {/* <HoverCounter2 /> */}
      {/* <User name="Sharath ✊" /> */}
      {/* <User name={() => "Sharath ✊"} /> */}
      {/* <User name={(isLoggedIn) => (isLoggedIn ? "Sharath ✊" : "Guest 😨")} /> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Sharath ✊" : "Guest 😨")} /> */}
      <Counterprop
        render={(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      />
      <Counterprop
        render={(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}
export default App;
