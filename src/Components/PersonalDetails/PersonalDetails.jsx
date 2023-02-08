import './StylePersonalDetails.css'
import Address from './Address';
import React from 'react';
import PlaceholderPicture from '../../assets/images/pencil.png'
import PhoneIcon from '../../assets/images/phone-call.png'
import EmailIcon from '../../assets/images/envelope.png'
import LinkedInIcon from '../../assets/images/linkedin.png'
import ProfilePicture from './ProfilePicture';

class PersonalDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            phoneNumber: '',
            email: '',
            linkedIn: '',
            displayNameInput: false,
            displayPhoneNumberInput: false,
            displayEmailInput: false,
            displayLinkedIn: false
        }
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }


    onChangePhoneNumber = (e) => {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onChangeLinkedIn = (e) => {
        this.setState({
            linkedIn: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
    }

    onClickName = (e) => {
        this.setState({
            displayNameInput: !this.state.displayNameInput
        })
    }


    onClickPhoneNumber = (e) => {
        this.setState({
            displayPhoneNumberInput: !this.state.displayPhoneNumberInput
        })
    }

    onClickEmail = (e) => {
        this.setState({
            displayEmailInput: !this.state.displayEmailInput
        })
    }

    onClickLinkedIn = (e) => {
        this.setState({
            displayLinkedIn: !this.state.displayLinkedIn
        })
    }

    render() {
        return (
            <div id='PersonalDetails'>
                {/* <img className="profile-picture" src={PlaceholderPicture} alt="" /> */}
                <ProfilePicture />

                <form className="personal-details-form" action="" onSubmit={this.onSubmitForm}>
                    <label className='name' htmlFor="name-input" onClick={this.onClickName}>
                        <div className="nameText-wrapper">
                            {this.state.name === ''
                                ? 'Your Name'
                                : this.state.name}
                        </div>
                    </label>
                    <input
                        className={`name-input ${this.state.displayNameInput ? '' : 'hidden'}`}
                        type="text"
                        id="name-input"
                        onChange={this.onChangeName}
                    />

                    <label className='phone-number details' htmlFor="phone-number-input" onClick={this.onClickPhoneNumber}>
                        <img id='phone-icon' src={PhoneIcon} alt="phone-icon" />
                        <div className="innerText-wrapper wrapper">
                            {this.state.phoneNumber === ''
                                ? '+123 456 789'
                                : this.state.phoneNumber}
                        </div>
                    </label>
                    <input
                        onChange={this.onChangePhoneNumber}
                        className={`phone-number-input ${this.state.displayPhoneNumberInput ? '' : 'hidden'}`}
                        type="text"
                        id="phone-number-input" />

                    <label className='email details' htmlFor="email-input" onClick={this.onClickEmail}>
                        <img id='email-icon' src={EmailIcon} alt="email-icon" />
                        <div className="innerText-wrapper wrapper">
                            {this.state.email === ''
                                ? 'example@example.com'
                                : this.state.email}
                        </div>
                    </label>
                    <input
                        onChange={this.onChangeEmail}
                        className={`email-input ${this.state.displayEmailInput ? '' : 'hidden'}`}
                        type="text"
                        id="email-input" />

                    <label className='linkedIn details' htmlFor="linkedIn-input" onClick={this.onClickLinkedIn}>
                        <img id='linkedIn-icon' src={LinkedInIcon} alt="linkedIn-icon" />
                        <div className="innerText-wrapper wrapper">
                            {this.state.linkedIn === ''
                                ? 'linkedIn URL'
                                : this.state.linkedIn}
                        </div>
                    </label>
                    <input
                        onChange={this.onChangeLinkedIn}
                        className={`linkedIn-input ${this.state.displayLinkedIn ? '' : 'hidden'}`}
                        type="text"
                        id="linkedIn-input" />

                </form>

                <div id="Address" >
                    <Address />
                </div>
            </div>
        )
    }
}

export default PersonalDetails;