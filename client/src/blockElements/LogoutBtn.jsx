//Will bring in API for actual logout
import API from "../utils/api/index.js"

const LogoutBtn = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        API.logout()
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">LOGOUT</button>
        </form>
    )
}

export default LogoutBtn