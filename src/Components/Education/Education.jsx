import React from "react";
import uniqid from 'uniqid'
import './StyleEducation.css'
import Description from "../Description";

class Education extends React.Component {
    constructor() {
        super();

        this.state = {
            education: {
                institution: '',
                duration: '',
                id: uniqid()
            },
            educationList: [],
            displayEducationForm: false
        }
    }

    onClickAddEducation = (e) => {
        this.setState({
            displayEducationForm: !this.state.displayEducationForm
        })
    }

    render() {
        return (
            <div>
                <p
                    className="education-title"
                >
                    Education
                    <button
                        id='add-education-button'
                        onClick={this.onClickAddEducation}
                    >
                        Add Education
                    </button>
                </p>
                <ul className="education-list">
                    {this.state.educationList.map(skill => {
                        return (
                            <li>{skill.title}
                                <Description />
                            </li>
                        )
                    })}
                </ul>

                <form action="" className={`education-form ${this.state.displayEducationForm? '' : 'hidden'}`}>
                    <label htmlFor="institution-input">Institution</label>
                    <input id='institution-input' type="text" />

                    <label htmlFor="institution-input">Duration</label>
                    <input id='institution-input' type="text" />

                    <button id='save-button' >Save</button>
                    <button id='cancel-button' >Cancel</button>
                </form>


            </div>
        )
    }
}

export default Education;