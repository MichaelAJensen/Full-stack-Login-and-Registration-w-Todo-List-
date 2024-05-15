import PersonGreeting from "../components/PersonGreeting.jsx";
import TodoList from "../components/TodoList.jsx";
import API from "../utils/api/index.js";
import { connect } from "react-redux"
import { useEffect } from "react";

const ProtectedPage = (props) => {
    useEffect(() => {
        API.getUser(props.app.user)
     
    }, [])
    return (
        <>
        <div className="wrapper">
            <PersonGreeting />
            <TodoList />

            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}


export default connect(mapStateToProps, null)(ProtectedPage)