import { connect } from "react-redux"
import TodoForm from "../blockElements/TodoForm.jsx"
import API from "../utils/api/index.js"

const EditTodoLi = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        API.editTodo(props.app.editTask, props.todo._id)
    }
    return (
        <li>
            <TodoForm
                handleSubmit={handleSubmit}
                name="editTask"
                labelTxt="Edit this task:"
                buttonTxt="CHANGE"
            />
        </li>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps, null)(EditTodoLi)