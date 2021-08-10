import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import JSXHello from './components/Hello';
//import MyComponent from './components/Greet'
function App() {
  return (
    <div className="App">
      {/*<Welcome/>*/}
      <JSXHello name='Tony Stark' heroName='Iron Man'>
        <p>this is a paragraph only to Tony Stark</p>
      </JSXHello>
      <JSXHello name='Steve Rogers' heroName='Captain america'>
      <button>Action</button></JSXHello>
      <JSXHello name='Bruce Banner' heroName='Hulk'/>
      </div>
  );
}
export default App;
