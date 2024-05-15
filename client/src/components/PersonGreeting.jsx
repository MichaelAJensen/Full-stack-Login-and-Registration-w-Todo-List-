import { connect } from "react-redux"
// import Nav from "./Nav.jsx"
const PersonGreeting = (props) => {
   
    return (
        <header>
            {/* <Nav /> */}
            <h1 className="hello">Hello {props.app.firstName} {props.app.lastName}!</h1>
            <h3>Let's get started!</h3>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(PersonGreeting)