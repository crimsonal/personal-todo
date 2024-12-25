import {useState} from 'react'

function TodoEdit(props) {
    const [todo, updateTodo] = useState(props.todo)

    function todoChanged(event) {
        updateTodo(event.target.value)
    }

    function buttonClicked() {
        props.updateTodo(props.id, todo)

        
    }
    return (
        <div className="update-form">
            <input 
            type="text" 
            placeholder="Update todo"
            value={todo}
            onChange={todoChanged}></input>
            <button onClick={buttonClicked}>Update</button>
        </div>
        
    )

}

export default TodoEdit