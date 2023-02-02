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

    onChangeInstitution = (e) => {
        this.setState({
            education: {
                ...this.state.education,
                institution: e.target.value,
            }
        })
    }

    onChangeDuration = (e) => {
        this.setState({
            education: {
                ...this.state.education,
                duration: e.target.value
            }
        })
    }

    onClickSave = (e) => {
        this.setState({
            education: {
                institution: '',
                duration: '',
                id: uniqid()
            },
            educationList: [...this.state.educationList, this.state.education],
            displayEducationForm: false,
        })
    }

    onClickCancel = (e) => {
        this.setState({
            displayEducationForm: !this.state.displayEducationForm
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
    }

    onClickDelete = (e) => {
        this.setState({
            educationList: this.state.educationList.filter(education => education.id !== e.target.id)
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
                    {this.state.educationList.map(education => {
                        return (
                            <li key={education.id}>{education.institution}
                                {education.duration}
                                <button onClick={this.onClickDelete} id={education.id}>x</button>
                                <Description />
                            </li>
                        )
                    })}
                </ul>

                <form onSubmit={this.onSubmitForm} action="" className={`education-form ${this.state.displayEducationForm ? '' : 'hidden'}`}>
                    <label htmlFor="institution-input">Institution</label>
                    <input
                        onChange={this.onChangeInstitution}
                        id='institution-input'
                        type="text" />

                    <label htmlFor="institution-input">Duration</label>
                    <input
                        onChange={this.onChangeDuration}
                        id='institution-input'
                        type="text" />

                    <button onClick={this.onClickSave} id='save-button' >Save</button>
                    <button onClick={this.onClickCancel} id='cancel-button' >Cancel</button>
                </form>
            </div>
        )
    }
}

export default Education;