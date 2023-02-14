import React from "react";
import './StyleWorkExperience.css'
import Description from "../Description/Description.jsx";
import uniqid from 'uniqid';
import WorkExperienceForm from "./WorkExperienceForm";

class WorkExperience extends React.Component {
    constructor() {
        super();
        this.state = {
            workExperience: {
                title: '',
                company: '',
                duration: '',
                id: uniqid(),
            },
            workExperienceList: [{
                title: `Example Work Experience (Click 'x' to remove me!)`,
                company: 'Company name',
                duration: 'Jan 2018 - Jan 2023',
                id: uniqid(),
            }],
            displayForm: false,
            displayAddButton: false,
            displayDescriptionForm: false,
            displayDescriptionRemoveButton: false,
            displayDeleteButton: false,
            displayFormWhenHover: false,
        }
    }

    onClickAddWorkExperience = (e) => {
        this.setState({
            displayForm: !this.state.displayForm,
            displayFormWhenHover: true,
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
    }

    onChangeInput = (e) => {
        const copyWorkExperience = Object.assign({}, this.state.workExperience)
        if (e.target.id === 'title-input') {
            copyWorkExperience.title = e.target.value
        }
        else if (e.target.id === 'company-input') {
            copyWorkExperience.company = e.target.value
        }
        else if (e.target.id === 'duration-input') {
            copyWorkExperience.duration = e.target.value
        }
        this.setState({
            workExperience: copyWorkExperience
        })
    }

    onClickSave = (e) => {
        if (e.target.parentElement.parentElement.checkValidity()) {
            this.setState({
                workExperience: {
                    ...this.state.workExperience,
                    id: uniqid()
                },
                workExperienceList: [...this.state.workExperienceList, this.state.workExperience],
                displayForm: false,
                displayFormWhenHover: false
            })
        }
    }

    onClickCancel = (e) => {
        this.setState({
            displayForm: !this.state.displayForm,
            displayFormWhenHover: false
        })
    }

    onClickDelete = (e) => {
        this.setState({
            workExperienceList: this.state.workExperienceList.filter(workExperience => workExperience.id !== e.target.id)
        })
    }

    onMouseOverTitle = (e) => {
        if (this.state.displayForm) {
            this.setState({ displayAddButton: false })
        } else {
            this.setState({ displayAddButton: true })
        }
    }

    onMouseOutTitle = (e) => {
        this.setState({ displayAddButton: false })
    }

    onMouseOverComponent = (e) => {
        if (this.state.displayFormWhenHover) {
            this.setState({
                displayForm: true
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
            displayForm: false
        })
    }

    render() {
        return (
            <div
                onMouseOver={this.onMouseOverComponent}
                onMouseOut={this.onMouseOutComponent}
                id='WorkExperience'>
                <p
                    className="work-experience-title"
                    onMouseOver={this.onMouseOverTitle}
                    onMouseOut={this.onMouseOutTitle}>
                    Work Experience
                    <button
                        className={`add-work-experience-button ${this.state.displayAddButton ? '' : 'hidden'}`}
                        onClick={this.onClickAddWorkExperience}>
                        + Add Work Experience
                    </button>
                </p>
                <ul className="work-experience-list">
                    {this.state.workExperienceList.map(workExperience => {
                        return (
                            <li key={workExperience.id} className="work-experience-item">
                                <div className="title">{workExperience.title}</div>
                                <div className="company">{workExperience.company}</div>
                                <div className="duration">{workExperience.duration}</div>
                                <button
                                    className={`delete-button ${this.state.displayDeleteButton ? '' : 'hidden'}`}
                                    id={workExperience.id} onClick={this.onClickDelete}>x</button>
                                <Description
                                    displayDescriptionForm={this.state.displayDescriptionForm}
                                    displayDescriptionRemoveButton={this.state.displayDescriptionRemoveButton}
                                />
                            </li>
                        )
                    })}
                </ul>


                <WorkExperienceForm
                    onChangeInput={this.onChangeInput}
                    onClickCancel={this.onClickCancel}
                    onSubmitForm={this.onSubmitForm}
                    onClickSave={this.onClickSave}
                    workExperience={this.state.workExperience}
                    displayForm={this.state.displayForm}
                />
            </div>
        )
    }

}

export default WorkExperience;