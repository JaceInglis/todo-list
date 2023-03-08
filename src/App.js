import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

const App = () => {

  return (
    <div className="App">
      <div className='list-wrapper'>
        <header>
          <h1>Todo List</h1>
          <h2>List Title</h2>
        </header>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
