import {useState} from 'react'

function TodoEdit(props) {
    const [todo, updateTodo] = useState(props.todo)

    function todoChanged(event) {
        updateTodo(event.target.value)
    }

    function buttonClicked() {
        if (todo.trim() === "") {
            // empty string, delete the Todo
            props.deleteTodo(props.id)
        } else {
            props.updateTodo(props.id, todo)
        }

    }
    return (
        <div className="update-form todo-obj">
            <input 
            type="text" 
            className="add-form-input"
            placeholder="Edit your task"
            value={todo}
            onChange={todoChanged}></input>
            <button onClick={buttonClicked}>Update</button>
        </div>
        
    )

}

export default TodoEdit