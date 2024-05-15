
import { connect } from "react-redux"
import actions from "../utils/redux/actions/index.js"
//will take in props.width, props.height && props.pattyColor, pattyColor optional
const Hamburger = (props) => {
    const pattyStyle = {
        width: "100%",
        display: "block",
        backgroundColor: props.pattyColor || "white",
        height: "3px",
        color: "white",
        //height: props.height/4
    }
    const bunStyle = {
        width: props.width,
        height: props.height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white"
    }
    return (
        <div style={bunStyle} onClick={props.openHamburger} className="ham-button">
            <span style={pattyStyle} className="ham-button"></span>
            <span style={pattyStyle} className="ham-button"></span>
            <span style={pattyStyle} className="ham-button"></span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        openHamburger: () => dispatch(actions.openHamburger())
    }
}


export default connect(null, mapDispatchToProps)(Hamburger)