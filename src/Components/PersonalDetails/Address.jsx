import React from "react";
import AddressIcon from '../../assets/images/marker.png'

class Address extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            street: 'Street',
            zip: 'Zip',
            city: 'City',
            displayStreet: false,
            displayZip: false,
            displayCity: false
        }
    }

    onChangeStreet = (e) => {
        this.setState({
            street: e.target.value
        })
    }

    onChangeZip = (e) => {
        this.setState({
            zip: e.target.value
        })
    }

    onChangeCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    onClickCity = (e) => {
        this.setState({
            displayCity: !this.state.displayCity
        })
    }

    onClickStreet = (e) => {
        this.setState({
            displayStreet: !this.state.displayStreet
        })
    }

    onClickZip = (e) => {
        this.setState({
            displayZip: !this.state.displayZip
        })
    }

    render() {
        return (
            <div>
                <form action="" className="address-form">
                    <img id="address-icon" src={AddressIcon} alt="address-icon" />
                    <label onClick={this.onClickStreet} htmlFor="street-input">
                        <div className="addressText-wrapper">
                            {this.state.street === ''
                                ? 'Street'
                                : this.state.street}
                        </div>
                    </label>
                    <input
                        className={`street-input ${this.state.displayStreet ? '' : 'hidden'}`}
                        onChange={this.onChangeStreet}
                        type="text"
                        id="street-input" />

                    <label onClick={this.onClickZip} htmlFor="zip-input">
                        <div className="addressText-wrapper">
                            {this.state.zip === ''
                                ? 'Zip'
                                : this.state.zip}
                        </div>
                    </label>
                    <input
                        className={`zip-input ${this.state.displayZip ? '' : 'hidden'}`}
                        onChange={this.onChangeZip}
                        type="text"
                        id="zip-input" />

                    <label onClick={this.onClickCity} htmlFor="city-input">
                        <div className="addressText-wrapper">
                            {this.state.city === ''
                                ? 'City'
                                : this.state.city}
                        </div>
                    </label>
                    <input
                        className={`city-input ${this.state.displayCity ? '' : 'hidden'}`}
                        onChange={this.onChangeCity}
                        type="text"
                        id="city-input" />
                </form>
            </div>
        )
    }
}

export default Address;