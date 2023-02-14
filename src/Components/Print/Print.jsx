import React from 'react'
import App from '../App/App.jsx'
import ReactToPrint from 'react-to-print'
import './Print.css'

export default class Print extends React.Component {
    constructor() {
        super()
        this.componentRef = React.createRef();

        this.state = {
            isTwoPageCV: false,
        }
    }

    onClickTwoPageCV = (e) => {
        this.setState({
            isTwoPageCV: !this.state.isTwoPageCV,
        })
    }

    render() {
        return (
            <React.Fragment>
                <header id='header'>
                    <p className='build-your-resume-title'>Build your Resume/CV!</p>
                </header>

                <div className='cv-pages-button-wrapper'>
                    <button className='cv-pages-button' onClick={this.onClickTwoPageCV}>
                        {this.state.isTwoPageCV ? 'Make One-Page CV' : 'Make Two-Pages CV'}
                    </button>
                </div>

                <div id="ReactToPrint-wrapper">
                    <ReactToPrint
                        trigger={() => <button id='React-to-print-button'>Print Your Resume/CV!</button>}
                        content={() => this.componentRef.current}
                    />
                </div>
                <div id="Print">
                    <App
                        isTwoPageCV={this.state.isTwoPageCV}
                        ref={this.componentRef}
                    />
                </div>
            </React.Fragment>
        );
    }
}