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
                    <p className='build-your-resume-title'>Resume/CV Builder</p>
                </header>

                <div className="buttons-wrapper">
                    <button
                        className={`cv-pages-button ${this.state.isTwoPageCV ? 'one-page-button-color' : ''}`}
                        onClick={this.onClickTwoPageCV}>
                        {this.state.isTwoPageCV ? 'Make One-Page CV' : 'Make Two-Pages CV'}
                    </button>
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