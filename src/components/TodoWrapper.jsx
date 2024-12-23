import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoAdd from './TodoAdd'
import Todo from './Todo.jsx'

function TodoWrapper () {
    const [todos, setTodos] = useState([{todo:"Shopping", key:uuidv4()}])
    
    function appendTodo(t) {
        console.log("todo appended!")
        let newTodo = {
            todo: t,
            key: uuidv4()
        }
        setTodos([...todos, newTodo])
        
    }

    return (
        <div class="todo-frame">
            <h1>Todos</h1>
            <TodoAdd appendTodo={appendTodo}/>
            <div className="todos">
                {todos.map((todo, index) => (
                    <Todo 
                    todo={todo.todo}
                    key={todo.key}
                    />
                ))}
            </div>

        </div>

    )
}

export default TodoWrapper