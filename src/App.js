import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
        <p>Todays Items</p>
      </header>

    <div className="list-container">
      <ul>
        <li>Finish todo list</li>
      </ul>
    </div>

    <form>
      <h2 className="lable-wrapper">
        <label>What needs to be done?</label>
      </h2>
      
    </form>

    </div>
  );
}

export default App;
