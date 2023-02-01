import React from "react";
import uniqid from "uniqid";
import Description from "../Description";
import './StyleSkills.css'

class Skills extends React.Component {
    constructor() {
        super()

        this.state = {
            skill: {
                title: '',
                id: uniqid()
            },
            skillList: [],
            displaySkillsForm: false,
            displayAddSkillButton: false
        }
    }

    onChangeTitle = (e) => {
        this.setState({
            skill: {
                ...this.state.skill,
                title: e.target.value
            }
        })
    }

    onClickSave = (e) => {
        this.setState({
            skill: {
                ...this.state.skill,
                title: '',
                id: uniqid()
            },
            skillList: [...this.state.skillList, this.state.skill],
            displaySkillsForm: false
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
    }

    onClickDelete = (e) => {
        this.setState({
            skillList: this.state.skillList.filter(skill => skill.id !== e.target.id)
        })
    }

    onClickAddSkill = (e) => {
        this.setState({
            displaySkillsForm: !this.state.displaySkillsForm
        })
    }

    onClickCancel = (e) => {
        this.setState({
            displaySkillsForm: false
        })
    }

    onMouseOverSkillsTitle = (e) => {
        if (this.state.displaySkillsForm) {
            this.setState({ displayAddSkillButton: false })
        } else {
            this.setState({ displayAddSkillButton: true })
        }
    }

    onMouseOutSkillsTitle = (e) => {
        this.setState({ displayAddSkillButton: false })
    }

    render() {
        return (
            <div>
                <p className="skills-title"
                    onMouseOver={this.onMouseOverSkillsTitle}
                    onMouseOut={this.onMouseOutSkillsTitle}
                >
                    Skills
                    <button
                        className={`add-skill-button ${this.state.displayAddSkillButton ? '' : 'hidden'}`}
                        onClick={this.onClickAddSkill} >
                        Add Skill
                    </button>
                </p>

                <ul className="skill-list">
                    {this.state.skillList.map(skill => {
                        return (<li key={skill.id}>{skill.title} <button onClick={this.onClickDelete} id={skill.id} >x</button> <Description /></li>)
                    })}
                </ul>

                <form
                    action=""
                    onSubmit={this.onSubmitForm}
                    className={`skills-form ${this.state.displaySkillsForm ? '' : 'hidden'}`}
                >
                    <label htmlFor="title-input">Title</label>
                    <input
                        onChange={this.onChangeTitle}
                        value={this.state.skill.title}
                        type="text"
                        name="title-input"
                        d="title-input"
                    />
                    <button onClick={this.onClickSave}>Save</button>
                    <button onClick={this.onClickCancel} >Cancel</button>
                </form>
            </div>
        )
    }

}

export default Skills