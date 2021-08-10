import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import JSXHello from './components/Hello';
//import MyComponent from './components/Greet'
function App() {
  return (
    <div className="App">
      <Welcome name='Tony Stark' heroName="Ironman" ></Welcome>  
    </div>
  );
}
export default App;
