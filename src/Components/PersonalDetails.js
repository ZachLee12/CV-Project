import './StylePersonalDetails.css'
import React from 'react';

class PersonalDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: 'Your First Name',
            lastName: 'Your Last Name',
            displayFirstName: false,
            displayLastName: false,
        }
    }

    onChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
        // setTimeout(() => console.log(this.state), 0)
    }

    onChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
        // setTimeout(() => console.log(this.state), 0)
    }

    onSubmitForm = (e) => {
        e.preventDefault();
    }

    onClickFirstName = (e) => {
        this.setState({
            displayFirstName: !this.state.displayFirstName
        })
    }

    onClickLastName = (e) => {
        this.setState({
            displayLastName: !this.state.displayLastName
        })
    }

    render() {
        return (
            <div className='Personal-Details'>
                <form className="personal-details-form" action="" onSubmit={this.onSubmitForm}>
                    <label htmlFor="first-name-input" onClick={this.onClickFirstName}>
                        {this.state.firstName === ''
                            ? 'Your First Name'
                            : this.state.firstName}
                    </label>
                    <input
                        className={`first-name-input ${this.state.displayFirstName ? '' : 'hidden'}`}
                        type="text"
                        id="first-name-input"
                        onChange={this.onChangeFirstName}
                    />

                    <label htmlFor="last-name-input" onClick={this.onClickLastName}>
                        {this.state.lastName === ''
                            ? 'Your Last Name'
                            : this.state.lastName}
                    </label>
                    <input
                        className={`last-name-input ${this.state.displayLastName ? '' : 'hidden'}`}
                        onChange={this.onChangeLastName}
                        type="text"
                        id="last-name-input"
                    />

                    <div className='buttons-container'>
                        <button className="save-button">Save</button>
                        <button className="cancel-button">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PersonalDetails;