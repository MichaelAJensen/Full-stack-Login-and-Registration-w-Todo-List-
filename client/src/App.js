import React from "react"
import { connect } from "react-redux"
import { Route, Routes } from "react-router-dom"
import API from "./utils/api/index.js"
import ProtectedPage from "./pages/ProtectedPage.jsx"
import LandingPage from "./pages/LandingPage.jsx"
import PrivateRoute from "./authComponents/PrivateRoute.jsx"
import PublicRoute from "./authComponents/PublicRoute.jsx"
import Nav from "./components/Nav.jsx"
import actions from "./utils/redux/actions/index.js"
import "./App.css"
import { useEffect } from "react"

const App = (props) => {
    useEffect(() => {
        window.addEventListener("resize", props.resizeWindow)
        if (sessionStorage.getItem("token")) {
            let token = sessionStorage.getItem("token")
            API.refresh(token)
        }
    }, [])

    return (
        <>
            <Nav />
            <Routes>
                {/* <Route path="/" element={<PublicRoute />} > */}
                <Route path="/" element={<LandingPage />} />
                {/* </Route> */}
                <Route path="/todos" element={<PrivateRoute />} >
                    <Route path="" element={<ProtectedPage />} />
                </Route >
            </Routes >
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resizeWindow: () => dispatch(actions.resizeWindow())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
