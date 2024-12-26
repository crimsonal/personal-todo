import {useState} from 'react'

function TodoAdd(props) {
    const [todo, updateTodo] = useState('')

    function todoChanged(event) {
        updateTodo(event.target.value)
    }

    function buttonClicked() {
        if (todo.trim() !== "") {
            props.appendTodo(todo)
            
        }
        updateTodo("")
    }
    return (
        <div className="add-form">
            <input 
            className="add-form-input"
            type="text" 
            placeholder="Add your task"
            value={todo}
            onChange={todoChanged}></input>
            <button onClick={buttonClicked}>Add</button>
        </div>
        
    )

}

export default TodoAdd