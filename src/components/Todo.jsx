

function Todo(props) 
{

    function edit() {
        props.editTodo(props.id)
    }

    function deleteTodo() {
        props.deleteTodo(props.id)
    }
    return (
        <div className="todo-obj">
            <p className="todo-p"> {props.todo}</p>
            <button onClick={edit}>Edit</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default Todo