/* eslint-disable react/jsx-key */
import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import Todo from './components/Todo.jsx'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [todo, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x",
      category: "Trabalho",
      isCompleted:false,
    },
    {
      id: 2,
      text: "ir para academia",
      category: "Pessoal",
      isCompleted:false,
    },
    {
      id: 3,
      text: "estudar react",
      category: "estudos",
      isCompleted:false,
    }
  ])

  return (    
    <div className="app"> 
      <h1>Lista de Tarefas</h1>
      <div className="toda-list">
        {todo.map((todo) =>(
         <Todo todo={todo}/>
        ))}
      </div>
    </div>
 
  )
}

export default App
