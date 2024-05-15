import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux"


const LandingPage = (props) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (props.isAuth) {
            navigate("/todos")
        }
    }, [props.isAuth])

    return <h1>Landing Page</h1>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, null)(LandingPage)