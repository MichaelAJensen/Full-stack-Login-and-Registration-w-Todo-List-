import ProfileModal from "./ProfileModal.jsx";
import LogoutBtn from "./LogoutBtn.jsx";
import { connect } from "react-redux";
import actions from "../utils/redux/actions/index.js";

const HamburgerAside = (props) => {
    return (
        <aside>
            <button
                onClick={props.closeHamburger}>Close</button>
            <ProfileModal />
            <LogoutBtn />
        </aside>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        closeHamburger: () => dispatch(actions.closeHamburger())
    }
}

export default connect(null, mapDispatchToProps)(HamburgerAside)