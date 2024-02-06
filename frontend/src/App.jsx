import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  async function fn(){
    await fetch("http://localhost:3000/todo")
    .then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    })
  }

useEffect(()=>{
  fn()
},[])

  return (//one for creating  and one for rendering
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}> </Todos>
    </div>
  )
}

export default App
