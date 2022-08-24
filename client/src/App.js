import './App.css';
import React, { Fragment } from 'react';

// components

import { InputTodo, ListTodos } from './components';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
