import {useState} from 'react'

function TodoAdd(props) {
    const [todo, updateTodo] = useState('')

    function todoChanged(event) {
        updateTodo(event.target.value)
    }

    function buttonClicked() {
        props.appendTodo(todo)

        updateTodo("")
    }
    return (
        <div className="add-form">
            <input 
            type="text" 
            placeholder="Enter a todo"
            value={todo}
            onChange={todoChanged}></input>
            <button onClick={buttonClicked}>Add</button>
        </div>
        
    )

}

export default TodoAdd