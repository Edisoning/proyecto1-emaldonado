import './App.css'; 
import {useState} from 'react'; 
import data from './data.json';
import TodoLista from './TodoLista.js'; 
import TodoForm from './TodoForm.js';

function App() {
  const li = document.querySelectorAll('.li');
  const bloque = document.querySelectorAll('.bloque');  
  // Recorriendo todos los LI
  li.forEach( ( cadaLi , i )=>{
    // Asignando un CLICK a CADA LI
    li[i].addEventListener('click',()=>{
        // Recorrer TODOS los .li
        li.forEach( ( cadaLi , i )=>{
            // Quitando la clase activo de cada li
            li[i].classList.remove('activo')
            // Quitando la clase activo de cada bloque
            bloque[i].classList.remove('activo')
        })

        // En el li que hemos click le añadimos la clase activo
        li[i].classList.add('activo')
        // En el bloque con la misma posición le añadimos la clase activo
        bloque[i].classList.add('activo')
      });
  });

  //-->>>> ACA LA BASE DE LISTA TAREAS
  const [todos, setTodos] = useState(data);

  //->>> si completo tarea y queda tachada -> true
  const siCompleto = (id) => {
    setTodos(todos.map((todo)=> {
      return todo.id === Number(id) ? {...todo, estado: !todo.estado}  : {...todo};
    }))
  }
  //->>> Borrar Tarea
  const borrarItem = (id) => {
    setTodos([...todos].filter(todo => todo.id !== id))
  }
  //->>> suma item Muestra Todo
  const addTodo = (newTodo) => {
    console.log(' addTodo en App.js -> nuevo : ', newTodo)
    let nuevoItem ={id : +new Date(), task: newTodo, siCompleto:false};
    setTodos([...todos,nuevoItem])
  }
 
  return (
    <div className="App">     
      <TodoForm addTodo = {addTodo} />
      <TodoLista todos = {todos} siCompleto={siCompleto} borrarItem={borrarItem}/>    
    </div>      
  ); 
}

export default App;
