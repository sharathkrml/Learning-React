import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome'
function App() {
  return (
    <div className="App">
      <Hello name="Tony Stark" heroName="IronMan"/>  
      <Welcome name="Tony Stark" heroName="IronMan"/>  
    </div>
  );
}
export default App;
