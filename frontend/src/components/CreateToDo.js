import axios from 'axios'
import {useState} from 'react'

function CreateToDo({onCreate}) {


    const [newToDoDescription, setNewToDoDescription] = useState('')


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
            }}
        >
            <label>
                <input
                    value={newToDoDescription}
                    onChange={(event) => setNewToDoDescription(event.target.value)}
                />
            </label>
            <button onClick={() => {
                PostMappingNewToDo(newToDoDescription)
                setNewToDoDescription("")
            }}>Add new ToDo
            </button>
        </form>


    )

    function PostMappingNewToDo() {
        return axios
            .post('api/todo/', {
                description: newToDoDescription,
                status: 'OPEN',
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

export default CreateToDo
