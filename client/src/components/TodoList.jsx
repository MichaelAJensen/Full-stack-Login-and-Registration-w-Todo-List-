import { connect } from "react-redux"
import TodoLi from "./TodoLi.jsx"
import EditTodoLi from "./EditTodoLi.jsx"
import AddTodo from "./AddTodo.jsx"

const TodoList = (props) => {

    return (
        <main>
            <AddTodo />
            <ol>
                {
                    props.app.todos.map(todo => props.app.isEdit && todo._id === props.app.editId ? <EditTodoLi key={todo._id} todo={todo} /> : <TodoLi key={todo._id} todo={todo} />)
                }
            </ol>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app

    }
}

export default connect(mapStateToProps, null)(TodoList)