import { connect } from "react-redux"
import actions from "../utils/redux/actions/index.js"


const TodoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor={props.name}>{props.labelTxt}</label>
            <input
                id={props.name}
                name={props.name}
                value={props.app[props.name]}
                onChange={(e) => props.handleInput(e.target)}
                required />
            <button>{props.buttonTxt}</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (input) => dispatch(actions.handleAppInput(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)