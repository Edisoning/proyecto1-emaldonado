import React from 'react';


function TodoItem({todo, siCompleto, borrarItem}) {

  const getStyle =() => {
        return{
          textDecoration: todo.estado ? 'line-through' : 'none',
          margin:'20px',
          border: '1px solid #ffffff',
          backgroundColor: '#CCF7E3'
        }
  }

  return (
    <div style = {getStyle()}>
      <input type = 'checkbox' checked = {todo.estado} onChange = {() => siCompleto(todo.id)}/>
      {todo.task}
      <button className = 'add-btn' onClick = {() => borrarItem(todo.id)}><i class="far fa-trash-alt"></i></button>
    </div>
  )
}
export default TodoItem;