import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';

let nextId = 0;

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: nextId += 1, task: task }]);
  }

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
    <AddTodo addTask={addTask}/>
    </div>
  );
}

export default App;
