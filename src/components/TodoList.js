import React from 'react'

const TodoList = ({todos, handleEdit, handleDelete}) => {
  return (
    <ul className='allTodos'>
    {
      todos.map((t)=>(
        <li className='singleTodos'>
        <span className='todoText' key={t.id}>{t.todo}</span>
          <button onClick={()=>handleEdit(t.id)}>Edit</button>
          <button onClick={()=>handleDelete(t.id)}>Delete</button>
      </li>
    ))}
  </ul>
  )
}

export default TodoList
