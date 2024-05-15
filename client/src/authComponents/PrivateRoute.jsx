import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import API from "../utils/api/index.js"


const PrivateRoute = (props) => {

    const [loading, setLoading] = useState(true)

  

    useEffect(() => {
        const load = () => {
            if (props.auth.isAuth) {
                setTimeout(() => setLoading(false), 2000)
            }
        }
        load()
    }, [props.auth.isAuth])

    return (
        loading ?
            <div className="spinner"></div> :
            props.auth.isAuth ?
                <Outlet /> :
                <Navigate to="/" />

    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, null)(PrivateRoute)
