import './App.css';
import Inline from './components/Inline';
import Stylesheet from './components/Stylesheet';
import './appStyles.css'
import styles from './appStyles.module.css'
function App() {
  return (
    <div className="App">
      {/* Regular Stylesheet  */}
      {/* locally scoped */}
      <h1 className='error'>Errror</h1> 
      {/* Module Stylesheet */}
      <h1 className={styles.success}>Success</h1>
      {/* conditionaly apply style */}
      <Stylesheet primary={true}/>
      <Inline/>
    </div>
  );
}
export default App;
