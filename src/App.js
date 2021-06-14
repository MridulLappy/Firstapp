import './css/App.css';
import List from './component/list';

function App() {
  const alert1 = () =>{
     //const textToAdd = document.getElementById("inputText").val();
      alert("textToAdd")
    };
    return (
      <div>
        <input htmlFor="dasd" id="inputText" type="text"/>
        <button onClick={() =>{alert1()}}>Add</button>
        <List name="Tasks to do"/>
      </div>
    );
  }

export default App;
