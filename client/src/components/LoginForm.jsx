import { connect } from "react-redux"

const LoginForm = (props) => {
    
    return (
        <div>
            <form onSubmit={props.handleSubmit}>

                <label htmlFor="email">Email:</label>
                <input
                    name="email"
                    id="email"
                    type="text"
                    value={props.auth.email}
                    onChange={(e) => props.handleChange(e.target)}
                />

                <label htmlFor="password">Password:</label>
                <input
                    name="password"
                    id="password"
                    type="text"
                    value={props.auth.password}
                    onChange={(e) => props.handleChange(e.target)}
                />

                <button type="submit">LOGIN</button>
            </form>
            <div>
                <h3>{props.auth.message}</h3>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, null)(LoginForm)