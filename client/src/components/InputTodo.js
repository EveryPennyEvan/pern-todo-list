import React, { Fragment, useState } from 'react';

export const InputTodo = () => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch('http://localhost:5000/todos', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      window.location = '/';
    } catch (err) {
      console.log(err.message);
    }
  }

  return <Fragment>
    <h1 className='text-center mt-5'>PERN Todo List</h1>
    <form className='d-flex mt-5' onSubmit={onSubmitForm}>
      <input
        type='text'
        className='form-control'
        value={description}
        onChange={e => setDescription(e.target.value)}>
      </input>
      <button className='btn btn-success'>Add</button>
    </form>
  </Fragment >
};