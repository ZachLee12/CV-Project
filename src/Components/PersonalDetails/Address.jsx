import React from "react";
import AddressIcon from '../../assets/images/marker.png'

class Address extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            street: 'Street',
            addressLineOne: 'Address line 1',
            addressLineTwo: 'Address line 2',
            displayStreet: false,
            displayAddressLineOne: false,
            displayAddressLineTwo: false
        }
    }

    onChangeStreet = (e) => {
        this.setState({
            street: e.target.value
        })
    }

    onChangeAddressLineOne = (e) => {
        this.setState({
            addressLineOne: e.target.value
        })
    }

    onChangeAddressLineTwo = (e) => {
        this.setState({
            addressLineTwo: e.target.value
        })
    }

    onMouseOverComponent = (e) => {
        this.setState({
            displayStreet: true,
            displayAddressLineOne: true,
            displayAddressLineTwo: true
        })
    }

    onMouseOutComponent = (e) => {
        this.setState({
            displayStreet: false,
            displayAddressLineOne: false,
            displayAddressLineTwo: false
        })
    }

    render() {
        return (
            <div
                onMouseOver={this.onMouseOverComponent}
                onMouseOut={this.onMouseOutComponent}
                id="Address">
                <form action="" className="address-form">
                    <img id="address-icon" src={AddressIcon} alt="address-icon" />
                    <label htmlFor="street-input">
                        <div className="addressText-wrapper">
                            {this.state.street === ''
                                ? 'Street'
                                : this.state.street}
                        </div>
                    </label>
                    <input
                        autoComplete='off'
                        className={`street-input ${this.state.displayStreet ? '' : 'hidden'}`}
                        onChange={this.onChangeStreet}
                        type="text"
                        id="street-input" />

                    <label htmlFor="address-line-one-input">
                        <div className="addressText-wrapper">
                            {this.state.addressLineOne === ''
                                ? 'Address Line 1'
                                : this.state.addressLineOne}
                        </div>
                    </label>
                    <input
                        autoComplete='off'
                        className={`addressLineOne-input ${this.state.displayAddressLineOne ? '' : 'hidden'}`}
                        onChange={this.onChangeAddressLineOne}
                        type="text"
                        id="address-line-one-input" />

                    <label htmlFor="address-line-two-input">
                        <div className="addressText-wrapper">
                            {this.state.addressLineTwo === ''
                                ? 'Address Line 2'
                                : this.state.addressLineTwo}
                        </div>
                    </label>
                    <input
                        autoComplete='off'
                        className={`address-line-two-input ${this.state.displayAddressLineTwo ? '' : 'hidden'}`}
                        onChange={this.onChangeAddressLineTwo}
                        type="text"
                        id="address-line-two-input" />
                </form>
            </div>
        )
    }
}

export default Address;