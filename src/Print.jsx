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
                <App
                    ref={this.componentRef}
                />

                <div id="ReactToPrint-wrapper">
                    <ReactToPrint
                        trigger={() => <button id='React-to-print-button'>Print Your CV!</button>}
                        content={() => this.componentRef.current}
                    />
                </div>
            </div>
        );
    }
}