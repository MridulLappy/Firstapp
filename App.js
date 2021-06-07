import './css/App.css';

function App() {
const alert1 = () =>{ alert("add")};
  return (
    <div>
      <input type="text"/>
      <button onClick={() =>{alert1("gaurav")}}>Add</button>
      <ul>
        <li>1.</li>
        <li>2.</li>
        <li>3.</li>
      </ul>
    </div>
  );
}

export default App;
