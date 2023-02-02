import React from 'react'
import App from './App'
import ReactToPrint from 'react-to-print'
import './Print.css'

export default class Print extends React.Component {
    constructor() {
        super()
        this.componentRef = React.createRef();
    }
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <button>Print this component</button>}
                    content={() => this.componentRef.current}
                />
                <App
                    ref={this.componentRef}
                />
            </div>
        );
    }
}