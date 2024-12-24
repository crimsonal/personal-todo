import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoAdd from './TodoAdd'
import Todo from './Todo.jsx'
import TodoEdit from "./TodoEdit.jsx"

function TodoWrapper () {
    const [todos, setTodos] = useState([{todo:"Shopping", key:uuidv4(), edit:false}])



    function editTodo(id, t) {
        // editTodo function where k is key and t is the new updated todo
        const nextTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.editing = true
            } else {
                return todo
            }
        })
        setTodos(nextTodos)
    }

    function appendTodo(t) {
        let newTodo = {
            todo: t,
            key: uuidv4(),
            edit: false
        }
        setTodos([...todos, newTodo])
        
    }

    return (
        <div class="todo-frame">
            <h1>Todos</h1>
            <TodoAdd appendTodo={appendTodo}/>
            <div className="todos">
                {todos.map((todo) => (
                    !todo.edit ? 
                    <Todo 
                    todo={todo.todo}
                    key={todo.key}
                    id={todo.key}
                    editTodo={editTodo}
                    /> : <TodoEdit todo={todo.edit} id={todo.key} key={todo.key} />
                ))}
            </div>

        </div>

    )
}

export default TodoWrapper