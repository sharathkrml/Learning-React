import './App.css';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      {/* <EventBind></EventBind> */}
      {/* <Welcome name="Tony Stark" heroName="Iron Man"/> */}
      <ParentComponent></ParentComponent>
    </div>
  );
}
export default App;
