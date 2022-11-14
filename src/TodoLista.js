import React from 'react';
import TodoItem from './TodoItem.js'

function TodoLista({todos, siCompleto,borrarItem}) {
  return (
    <div>
    {
        todos.map((todo, index) => (
          <TodoItem key={`todo-${index}`} todo = {todo} siCompleto={siCompleto} borrarItem={borrarItem} />
        ))
    }
    </div>
  )
}
export default TodoLista;