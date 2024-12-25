import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoAdd from './TodoAdd'
import Todo from './Todo.jsx'
import TodoEdit from "./TodoEdit.jsx"

function TodoWrapper () {
    const [todos, setTodos] = useState([{todo:"Shopping", key:uuidv4(), edit:false}])



    function editTodo(id) {
        // editTodo function where k is key and t is the new updated todo
        const nextTodos = todos.map((todo) => {
            if (todo.key === id) {
                return {...todo, edit: true} 
            } else {
                return {...todo} // ... is spread operator which copies child elements, use commas to replace!
            }
        })
        setTodos(nextTodos)
    }

    function updateTodo(id, t) {
        const newTodos = todos.map((todo_map) => {
            if (todo_map.key === id) {
                return {...todo_map, edit: false, todo: t}
            } else {
                return {...todo_map}
            }
        })
        setTodos(newTodos)
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
            <TodoAdd key="appendTodo" appendTodo={appendTodo}/>
            <div className="todos">
                {todos.map((todo) => {
                    if (todo.edit) {
                        
                        return <TodoEdit todo={todo.todo} id={todo.key} key={todo.key} updateTodo={updateTodo} />
                    } else {
                        return <Todo todo={todo.todo} key={todo.key} id={todo.key} editTodo={editTodo} />
                    }
                })}
            </div>
        </div>
    )
}

export default TodoWrapper