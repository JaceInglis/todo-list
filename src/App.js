import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';

const App = () => {
  const [tasks, setTasks] = useState([]);

  let nextId = 0;

  const addTask = (task) => {
    setTasks([...tasks, { id: nextId++, task: task }]);
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
