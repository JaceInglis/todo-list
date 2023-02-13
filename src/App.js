import './App.css';
import AddTodo from './components/AddTodo/AddTodo';

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

    </div>
  );
}

export default App;
