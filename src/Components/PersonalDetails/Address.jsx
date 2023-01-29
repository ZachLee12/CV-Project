import React from "react";

class Address extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            street: '',
            zip: '',
            city: ''
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.street}</p>
                {this.state.zip} {this.state.city}
            </div>
        )
    }
}

export default Address;