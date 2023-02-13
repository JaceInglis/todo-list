import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
        <h2>List Title</h2>
      </header>

    <div className="list-container">
      <ul role="list">
        <li>Example task</li>
      </ul>
    </div>

    <form>
      <h2 className="lable-wrapper">
        <label>What needs to be done?</label>
      </h2>
      
      <input type="text" name="task" />
      <input type="submit" value="Add" />
    </form>

    </div>
  );
}

export default App;
