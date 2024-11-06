import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Todo from './todo';
import AddTodo from './addTodo';

const todos = ({onDelete, todos}) => {
  return (<>

        <AddTodo />
      <div className='Container'>
      <div className="row">
        <Todo todos={todos} onDelete={()=>{
            onDelete();
        }} />
      </div>
      </div>

  </>)
}

export default todos
