import logo from './logo.svg'
import './App.css'
import ToDoCard from './components/ToDoCard'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CreateToDo from './components/CreateToDo'

function App() {
  const [status, setStatus] = useState('')
  const [toDos, setToDos] = useState([])

  function loadToDos() {
    return axios.get('/api/todo').then((response) => setToDos(response.data))
  }

  useEffect(() => {
    loadToDos()
  }, [status])

  return (
    <div className="App">
      <CreateToDo />

      {toDos.map((toDo) => (
        <ToDoCard description={toDo.description} status={toDo.status} />
      ))}
    </div>
  )
}

export default App
