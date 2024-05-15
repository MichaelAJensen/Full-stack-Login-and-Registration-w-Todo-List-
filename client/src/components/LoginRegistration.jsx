import { connect } from "react-redux"
import actions from "../utils/redux/actions"
import RegLoginModal from "./RegLoginModal.jsx"

const LoginRegistration = (props) => {
    return (
        props.auth.isLogin ?
            <RegLoginModal /> :
            <button onClick={props.openLogin}>LOGIN</button>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        openLogin: () => dispatch(actions.openLogin()),
        closeLogin: () => dispatch(actions.closeLogin())
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginRegistration)

