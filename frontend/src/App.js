import './App.css'
import React, {useEffect, useState} from 'react'
import CreateToDo from './components/CreateToDo'
import ToDoCard from "./components/ToDoCard";
import axios from "axios";


function App() {
    const [status, setStatus] = useState('')
    const [toDos, setToDos] = useState([])
    const [isClicked, setIsClicked] = useState(false)

    function loadToDos() {
        return axios.get('/api/todo').then((response) => setToDos(response.data))
    }

    useEffect(() => {
        loadToDos().then(() => setIsClicked(false))
    }, [])

    return (
        <div className="App">
            <CreateToDo/>

            {toDos.map((toDo) => (
                <ToDoCard description={toDo.description} status={toDo.status}/>
            ))}
        </div>
    )
}

export default App
