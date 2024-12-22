import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoAdd from './TodoAdd'
import Todo from './Todo.jsx'

function TodoWrapper () {
    const [todos, addTodo] = useState([{todo:"Shopping", key:uuidv4()}])
    
    function appendTodo(t) {
        let newTodo = {
            todo: t
        }
        addTodo(...todos, newTodo)
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