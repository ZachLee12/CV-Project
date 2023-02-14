import React from "react";
import uniqid from 'uniqid'
import './StyleEducation.css'
import Description from "../Description/Description.jsx";

class Education extends React.Component {

    constructor() {
        super();

        this.institutionRef = React.createRef()
        this.state = {
            education: {
                institution: '',
                duration: '',
                id: uniqid()
            },
            educationList: [{
                institution: `Example Education (Click 'x' to delete me!)`,
                duration: 'Jan 2012 - Feb 2022',
                id: uniqid(),
            }],
            displayEducationForm: false,
            displayAddButton: false,
            displayDescriptionForm: false,
            displayDeleteButton: false,
            displayDescriptionRemoveButton: false,
            displayEducationFormWhenHover: false
        }
    }

    onClickAddEducation = (e) => {
        this.setState({
            displayEducationForm: !this.state.displayEducationForm,
            displayEducationFormWhenHover: true
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
        if (e.target.parentElement.parentElement.checkValidity()) //form element
        {
            this.setState({
                education: {
                    ...this.state.education,
                    id: uniqid()
                },
                educationList: [...this.state.educationList, this.state.education],
                displayEducationForm: false,
                displayEducationFormWhenHover: false
            })

            setTimeout(() => { console.log(this.state) }, 0)
        }

    }

    onClickCancel = (e) => {
        this.setState({
            displayEducationForm: !this.state.displayEducationForm,
            displayEducationFormWhenHover: false
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

    onMouseOverTitle = (e) => {
        if (this.state.displayEducationForm) {
            this.setState({ displayAddButton: false })
        } else {
            this.setState({ displayAddButton: true })
        }
    }

    onMouseOutTitle = (e) => {
        this.setState({ displayAddButton: false })
    }

    onMouseOverComponent = (e) => {
        if (this.state.displayEducationFormWhenHover) {
            this.setState({
                displayEducationForm: true
            })
        }

        this.setState({
            displayDescriptionForm: true,
            displayDeleteButton: true,
            displayDescriptionRemoveButton: true
        })
    }

    onMouseOutComponent = (e) => {
        this.setState({
            displayDescriptionForm: false,
            displayDeleteButton: false,
            displayDescriptionRemoveButton: false,
            displayEducationForm: false
        })
    }

    render() {
        return (
            <div id='Education' onMouseOver={this.onMouseOverComponent} onMouseOut={this.onMouseOutComponent}>
                <p
                    className="education-title"
                    onMouseOver={this.onMouseOverTitle}
                    onMouseOut={this.onMouseOutTitle}
                >
                    Education
                    <button
                        id='add-education-button'
                        onClick={this.onClickAddEducation}
                        className={this.state.displayAddButton ? '' : 'hidden'}>
                        + Add Education
                    </button>
                </p>
                <ul className="education-list">
                    {this.state.educationList.map(education => {
                        return (
                            <li
                                key={education.id}
                                className="education-list-item">
                                <div className="education-institution">{education.institution}</div>
                                <div className="education-duration">{education.duration}</div>
                                <div className="edit-features-wrapper">
                                    <button onClick={this.onClickDelete} id={education.id} className={`delete-button ${this.state.displayDeleteButton ? '' : 'hidden'}`} >x</button>
                                    <Description
                                        displayDescriptionRemoveButton={this.state.displayDescriptionRemoveButton}
                                        displayDescriptionForm={this.state.displayDescriptionForm} />
                                </div>
                            </li>
                        )
                    })}
                </ul>

                <form
                    onSubmit={this.onSubmitForm}
                    action=""
                    className={`education-form ${this.state.displayEducationForm ? '' : 'hidden'}`}>
                    <label htmlFor="institution-input">Institution</label>
                    <input
                        ref={this.institutionRef}
                        autoComplete='off'
                        required
                        onChange={this.onChangeInstitution}
                        id='institution-input'
                        type="text" />

                    <label htmlFor="duration-input">Duration</label>
                    <input
                        autoComplete='off'
                        required
                        placeholder="Eg: Jan 2020 - August 2023"
                        onChange={this.onChangeDuration}
                        id='duration-input'
                        type="text" />

                    <div className="education-buttons-wrapper">
                        <button onClick={this.onClickSave} id='save-button' >Save</button>
                        <button type='button' onClick={this.onClickCancel} id='cancel-button' >Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Education;