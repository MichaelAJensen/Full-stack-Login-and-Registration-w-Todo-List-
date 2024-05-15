import { connect } from "react-redux"
import TodoForm from "../blockElements/TodoForm.jsx"
import API from "../utils/api/index.js"



const AddTodo = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        API.addTodo(props.app.task, props.app.user)
    }
    return (
        <section>          
            <TodoForm               
                handleSubmit={handleSubmit}
                name="task"
                labelTxt="Add A Task:"
                buttonTxt="ADD"
            />
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps, null)(AddTodo)