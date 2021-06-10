import './css/App.css';
import List from './component/list';

function App() {
  const alert1 = (add) =>{ alert(add)};
    return (
      <div>
        <input type="text"/>
        <button onClick={() =>{alert1("gaurav")}}>Add</button>
        <List name="Tasks to do"/>
      </div>
    );
  }

export default App;
