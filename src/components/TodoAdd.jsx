import {useState} from 'react'

function TodoAdd(props) {
    const [todo, updateTodo] = useState('')

    function todoChanged(event) {
        updateTodo(event.target.value)
        console.log('a')
    }
    return (
        <div className="add-form">
            <input 
            type="text" 
            placeholder="Enter todo"
            onchange={todoChanged}></input>
            <button>Add</button>
        </div>
        
    )

}

export default TodoAdd