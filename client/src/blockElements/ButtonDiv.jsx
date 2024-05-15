import { connect } from "react-redux"
import actions from "../utils/redux/actions/index.js"
import API from "../utils/api/index.js"

const ButtonDiv = (props) => {
    return (
        <div>
            <button onClick={() => API.deleteTodo(props.todo._id)}>X</button>
            <button onClick={() => props.prepareToEdit(props.todo)}>✒️</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        prepareToEdit: (todo) => dispatch(actions.prepareToEdit(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDiv)