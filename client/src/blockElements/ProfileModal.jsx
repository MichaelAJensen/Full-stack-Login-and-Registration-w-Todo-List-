import { connect } from "react-redux"
import actions from "../utils/redux/actions/index.js"
import API from "../utils/api/index.js"
import RegistrationForm from "../components/RegistrationForm.jsx"


const ProfileModal = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        API.editProfile({
            firstName: props.app.editFirstName,
            lastName: props.app.editLastName,
            email: props.app.editEmail,
            password1: props.app.password1,
            password2: props.app.password2
        }, props.app.user)
    }
    return (
        <div>
            {!props.app.profileModal ?
                <button onClick={props.openProfileModal}>USER PROFILE</button> :
                <dialog open={props.app.profileModal}>
                    <button onClick={props.closeProfileModal}>close</button>
                    {props.app.isProfileEdit
                        ?
                        <RegistrationForm
                            tog="app"
                            firstName="editFirstName"
                            lastName="editLastName"
                            email="editEmail"
                            handleSubmit={handleSubmit}
                            handleChange={props.handleInput}
                            className="reg-modal"
                        />
                        :
                        <>
                            <h3>{props.app.firstName} {props.app.lastName}</h3>
                            <h4>{props.app.email}</h4>
                            <button onClick={() => props.prepareToEditProfile({
                                firstName: props.app.firstName,
                                lastName: props.app.lastName,
                                email: props.app.email
                            })}>Edit Profile</button>
                            <button onClick={() => API.deleteUser(props.app.user)}>Delete User</button>
                        </>
                    }
                </dialog>
            }
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openProfileModal: () => dispatch(actions.openProfileModal()),
        closeProfileModal: () => dispatch(actions.closeProfileModal()),
        prepareToEditProfile: (user) => dispatch(actions.prepareToEditProfile(user)),
        handleInput: (input) => dispatch(actions.handleAppInput(input))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal)

