import React from "react";
import AddressIcon from '../../assets/images/marker.png'

class Address extends React.Component {
    #DEFAULT_ADDRESS ='Your Address \n Example Street \n Example Town/City'

    constructor(props) {
        super(props)

        this.state = {
            street: 'Street',
            addressLineOne: 'Address line 1',
            addressLineTwo: 'Address line 2',
            displayStreet: false,
            displayAddressLineOne: false,
            displayAddressLineTwo: false,
            address: this.#DEFAULT_ADDRESS,
            displayAddressForm: false
        }

        this.addressInputRef = React.createRef()
    }

    // this is aided by CSS:
    /**
     * 
     * .address-test-display{
           white-space: pre-line;
       } 
     */
    // React renders exactly what is typed in the textarea
    onChangeTextArea = (e) => {
        this.setState({
            address: e.target.value
        })
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
            displayAddressForm: true
        })
    }

    onMouseOutComponent = (e) => {
        this.setState({
            displayAddressForm: false
        })
    }

    render() {
        return (
            <div
                onMouseOver={this.onMouseOverComponent}
                onMouseOut={this.onMouseOutComponent}
                data-testid="Address"
                id="Address">

                <div className="address-display-wrapper">
                    <img id="address-icon" src={AddressIcon} alt="address-icon" />
                    <div className="address-display">
                        {this.state.address === '' ? this.#DEFAULT_ADDRESS : this.state.address}
                    </div>
                </div>
                <form action="" data-testid='address-form' className={`address-form ${this.state.displayAddressForm ? '' : 'hidden'}`}>
                    <textarea
                        ref={this.addressInputRef}
                        onChange={this.onChangeTextArea}
                        name="address-test"
                        cols="30"
                        rows="10"
                        placeholder="Your Address will display exactly how you format it here!">


                    </textarea>
                </form>

                {/* <form action="" data-testid='address-form' className="address-form">
                    <div className="address-first-line-wrapper">
                        <img id="address-icon" src={AddressIcon} alt="address-icon" />
                        <label htmlFor="street-input">
                            <div className="addressText-wrapper">
                                {this.state.street === ''
                                    ? 'Street'
                                    : this.state.street}
                            </div>
                        </label>
                    </div>
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
                </form> */}
            </div>
        )
    }
}

export default Address;