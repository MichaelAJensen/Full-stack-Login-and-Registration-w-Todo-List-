import { connect } from "react-redux"

const RegistrationForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>

                <label htmlFor={props.firstName}>First Name:</label>
                <input
                    name={props.firstName}
                    id={props.firstName}
                    type="text"
                    value={props.tog === "app" ? props.app[props.firstName] : props.auth[props.firstName]}
                    onChange={(e) => props.handleChange(e.target)}
                    required
                />

                <label htmlFor={props.lastName}>Last Name:</label>
                <input
                    name={props.lastName}
                    id={props.lastName}
                    type="text"
                    value={props.tog === "app" ? props.app[props.lastName] : props.auth[props.lastName]}
                    onChange={(e) => props.handleChange(e.target)}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    name={props.email}
                    id="email"
                    type="text"
                    value={props.tog === "app" ? props.app.editEmail : props.auth.email}
                    onChange={(e) => props.handleChange(e.target)}
                    required
                />

                {
                    props.tog === "app" && <h4>Please only enter password if you intend to change your password</h4>
                }

                <label htmlFor="password1">Password:</label>
                <input
                    name="password1"
                    id="password1"
                    type="text"
                    value={props.tog === "app" ? props.app.password1 : props.auth.password1}
                    onChange={(e) => props.handleChange(e.target)}
                    required
                />

                <label htmlFor="password2">Please Re-enter Password:</label>
                <input
                    name="password2"
                    id="password2"
                    type="text"
                    value={props.tog === "app" ? props.app.password2 : props.auth.password2}
                    onChange={(e) => props.handleChange(e.target)}
                    required
                />
                <button type="submit">{props.tog === "app" ? "CHANGE" : "REGISTER"}</button>
            </form>
            <div>
                <h3>{props.tog === "app" ? props.app.message : props.auth.message}</h3>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(RegistrationForm)