import { connect } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PublicRoute = (props) => {
    return (
        !props.auth.isAuth ?
            <Outlet /> :
            <Navigate  to="/todos" />          
            
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, null)(PublicRoute)