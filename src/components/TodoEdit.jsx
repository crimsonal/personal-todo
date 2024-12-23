import {useState} from 'react'

function TodoEdit(props) {
    const [todo, updateTodo] = useState('')

    function todoChanged(event) {
        updateTodo(event.target.value)
    }

    function buttonClicked() {
        props.editTodo(todo)

        
    }
    return (
        <div className="update-form">
            <input 
            type="text" 
            placeholder="update todo"
            onChange={todoChanged}></input>
            <button onClick={buttonClicked}>Update</button>
        </div>
        
    )

}

export default TodoEdit