import React from "react";
import './StyleWorkExperience.css'
import Description from "../Description";
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
                description: '',
                descriptionList: []
            },
            workExperienceList: [],
            displayForm: false,
            displayAddButton: false
        }
    }

    onClickAddWorkExperience = (e) => {
        this.setState({
            displayForm: !this.state.displayForm
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
        this.setState({
            workExperience: {
                //clear all inputs and make a new id
                title: '',
                company: '',
                duration: '',
                id: uniqid()
            },
            workExperienceList: [...this.state.workExperienceList, this.state.workExperience],
            displayForm: !this.state.displayForm
        })
    }

    onClickCancel = (e) => {
        this.setState({
            displayForm: !this.state.displayForm
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

    render() {
        return (
            <div>
                <p
                    className="work-experience-title"
                    onMouseOver={this.onMouseOverTitle}
                    onMouseOut={this.onMouseOutTitle}
                >
                    Work Experience
                    <button
                        className={`add-button ${this.state.displayAddButton ? '' : 'hidden'}`}
                        onClick={this.onClickAddWorkExperience}
                        
                    >
                        Add Work Experience
                    </button>
                </p>
                <ul className="work-experience-container">
                    {this.state.workExperienceList.map(workExperience => {
                        return (
                            <li key={workExperience.id} className="work-experience">
                                <div className="title">{workExperience.title}</div>
                                <div className="company">{workExperience.company}</div>
                                <div className="duration">{workExperience.duration}</div>
                                <button id={workExperience.id} onClick={this.onClickDelete}>x</button>
                                <Description />
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