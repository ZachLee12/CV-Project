import React from "react";

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
                    <label onClick={this.onClickStreet} htmlFor="street-input">{this.state.street === '' ? 'Street' : this.state.street}</label>
                    <input
                        className={`street-input ${this.state.displayStreet ? '' : 'hidden'}`}
                        onChange={this.onChangeStreet}
                        type="text"
                        id="street-input" />

                    <label onClick={this.onClickZip} htmlFor="zip-input">{this.state.zip === '' ? 'Zip' : this.state.zip}</label>
                    <input
                        className={`zip-input ${this.state.displayZip ? '' : 'hidden'}`}
                        onChange={this.onChangeZip}
                        type="text"
                        id="zip-input" />

                    <label onClick={this.onClickCity} htmlFor="city-input">{this.state.city === '' ? 'City' : this.state.city}</label>
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