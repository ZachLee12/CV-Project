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
                        className="address-textarea"
                        cols="30"
                        rows="10"
                        placeholder="Your Address will display exactly how you format it here!">
                    </textarea>
                </form>

              
            </div>
        )
    }
}

export default Address;