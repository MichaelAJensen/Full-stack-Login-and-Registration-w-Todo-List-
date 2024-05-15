import { connect } from "react-redux"
import HamburgerMenu from "../blockElements/HamburgerMenu.jsx"
import ProfileModal from "../blockElements/ProfileModal.jsx"
import LogoutBtn from "../blockElements/LogoutBtn.jsx"
import LoginRegistration from "./LoginRegistration.jsx"

const Nav = (props) => {
    return (
        <nav style={{ width: "100%" }}>
            {
                !props.auth.isAuth ?
                   <LoginRegistration /> :
                    props.app.window < 600 ?
                        <HamburgerMenu /> :
                        <div>
                            <ProfileModal />
                            <LogoutBtn />
                        </div>
            }
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(Nav)