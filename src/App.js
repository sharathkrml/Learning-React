import './App.css';
import './appStyles.css'
import ParentComp from './components/ParentComp';
import PureParentComp from './components/PureParentComp';
function App() {
  return (
    <div className="App">
      {/* <ParentComp/> */}
      <PureParentComp/>
    </div>
  );
}
export default App;
