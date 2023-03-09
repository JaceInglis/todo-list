import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

const App = () => {

  return (
    <div className="App">
      <div className='list-wrapper'>
        <h1 className='title'>Todo List</h1>
        <div className='todos'>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
