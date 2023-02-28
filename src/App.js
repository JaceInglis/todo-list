import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

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
      <TodoList tasks={tasks}/>
    </div>
    <TodoForm addTask={addTask}/>
    </div>
  );
}

export default App;
