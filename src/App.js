import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import {WoJsxHello,JSXHello} from './components/Hello';
//import MyComponent from './components/Greet'
function App() {
  return (
    <div className="App">
      {/*<Welcome/>*/}
      <WoJsxHello/> 
      <JSXHello/>
      </div>
  );
}
export default App;
