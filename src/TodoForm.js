import React, { useState } from 'react'

function TodoForm({addTodo}) {
  const [userInput, setUserInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

    
  const cambiaInput = (e) => { //evento cuando cambia el input text
    console.log('CLICK EN EL INPUT text')
    setUserInput(e.currentTarget.value);
  }

  const cambiaCkb = (e) => { /// evento cuando cambia el chkbox
    console.log('CLICK EN EL INPUT CKBox')
    setIsSubscribed(current => !current);
    console.log('valor e --> ',e.currentTarget.value)
    //addNoChk(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userInput.trim() !== ''){
      console.log('CLICK EN EL INPUT text 1')
      addTodo(userInput); //va a App.js funcion addTodo
      setUserInput('');
    }
  }
  return (
    <div style = {{margin: 10}}>
      <form onSubmit={handleSubmit}>
        Nueva Tarea <input type ="text" value = {userInput} onChange = {cambiaInput}/>
        <input type="checkbox" value={isSubscribed} onChange = {cambiaCkb}/>Mostrar Faltantes
      </form>      
    </div>
  )
}
export default TodoForm;