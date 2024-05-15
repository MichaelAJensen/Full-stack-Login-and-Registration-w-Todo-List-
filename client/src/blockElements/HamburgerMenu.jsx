import { connect } from "react-redux";
import Hamburger from "../blockElements/Hamburger";
import HamburgerAside from "../blockElements/HamburgerAside"

const HamburgerMenu = (props) => {
    return (
        <>
            {
                props.app.openHamburger ?
                    <HamburgerAside /> :
                    <Hamburger width="3vw" height="3vw" pattyColor="white" />
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps, null)(HamburgerMenu)
