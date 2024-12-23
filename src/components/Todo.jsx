

function Todo(props) 
{
    return (
        <div className="todo-obj">
            <p className="todo-p"> {props.todo}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Todo