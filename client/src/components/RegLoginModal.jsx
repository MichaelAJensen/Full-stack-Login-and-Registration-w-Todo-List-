import { connect } from "react-redux"
import actions from "../utils/redux/actions/index.js"
import RegistrationForm from "./RegistrationForm.jsx"
import LoginForm from "./LoginForm.jsx"
import API from "../utils/api/index.js"


const RegLoginModal = (props) => {
    const submitReg = (e) => {
        e.preventDefault()
        let user = {}
        user.firstName = props.auth.firstName
        user.lastName = props.auth.lastName
        user.email = props.auth.email
        user.password1 = props.auth.password1
        user.password2 = props.auth.password2
        API.register(user)

    }
    const submitLog = (e) => {
        e.preventDefault()
        // console.log(props.auth.email, props.auth.password)
        API.login(props.auth.email, props.auth.password)
    }
    return (
        <dialog open={props.auth.isLogin}>
            <button onClick={props.closeLogin}>Close</button>
            {
                props.auth.loginForm ?
                    <LoginForm
                        handleSubmit={submitLog}
                        handleChange={props.handleInput}
                    /> :
                    <RegistrationForm
                        tog="auth"
                        firstName="firstName"
                        lastName="lastName"
                        email="email"
                        handleSubmit={submitReg}
                        handleChange={props.handleInput}
                        className="reg-modal"
                    />
            }
            <button onClick={props.toggleForm}>{props.auth.loginForm ? "REGISTER" : "LOGIN"}</button>

        </dialog>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        closeLogin: () => dispatch(actions.closeLogin()),
        toggleForm: () => dispatch(actions.toggleForm()),
        handleInput: (input) => dispatch(actions.handleAuthInput(input))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegLoginModal)