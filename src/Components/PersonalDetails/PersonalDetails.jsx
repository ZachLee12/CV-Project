import './StylePersonalDetails.css'
import Address from './Address';
import React from 'react';
import ProfilePicture from './pencil.png'

class PersonalDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: 'Your First Name',
            lastName: 'Your Last Name',
            phoneNumber: '+123 456 789',
            displayFirstNameInput: false,
            displayLastNameInput: false,
            displayPhoneNumberInput: false
        }
    }

    onChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    onChangePhoneNumber = (e) => {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
    }

    onClickFirstName = (e) => {
        this.setState({
            displayFirstNameInput: !this.state.displayFirstNameInput
        })
    }

    onClickLastName = (e) => {
        this.setState({
            displayLastNameInput: !this.state.displayLastNameInput
        })
    }

    onClickPhoneNumber = (e) => {
        this.setState({
            displayPhoneNumberInput: !this.state.displayPhoneNumberInput
        })
    }

    render() {
        return (
            <div id='PersonalDetails'>
                <img className="profile-picture" src={ProfilePicture} alt="" />

                <form className="personal-details-form" action="" onSubmit={this.onSubmitForm}>
                    <label className='first-name' htmlFor="first-name-input" onClick={this.onClickFirstName}>
                        {this.state.firstName === ''
                            ? 'Your First Name'
                            : this.state.firstName}
                    </label>
                    <input
                        className={`first-name-input ${this.state.displayFirstNameInput ? '' : 'hidden'}`}
                        type="text"
                        id="first-name-input"
                        onChange={this.onChangeFirstName}
                    />

                    <label className='last-name' htmlFor="last-name-input" onClick={this.onClickLastName}>
                        {this.state.lastName === ''
                            ? 'Your Last Name'
                            : this.state.lastName}
                    </label>
                    <input
                        className={`last-name-input ${this.state.displayLastNameInput ? '' : 'hidden'}`}
                        onChange={this.onChangeLastName}
                        type="text"
                        id="last-name-input"
                    />

                    <label className='phone-number' htmlFor="phone-number-input" onClick={this.onClickPhoneNumber}>{this.state.phoneNumber === '' ? '+123 456 789' : this.state.phoneNumber}</label>
                    <input
                        onChange={this.onChangePhoneNumber}
                        className={`phone-number-input ${this.state.displayPhoneNumberInput ? '' : 'hidden'}`}
                        type="text"
                        id="phone-number-input" />

                </form>

                <div id="Address" >
                    <Address />
                </div>
            </div>
        )
    }
}

export default PersonalDetails;