import React from "react";
import uniqid from "uniqid";
import Description from "../Description";

class Skills extends React.Component {
    constructor() {
        super()

        this.state = {
            skill: {
                title: '',
                id: uniqid()
            },
            skillList: []
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
            skillList: [...this.state.skillList, this.state.skill]
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

    render() {
        return (
            <div>
                <p>Skills</p>
                <ul className="skills-container">
                    {this.state.skillList.map(skill => {
                        return (<li key={skill.id}>{skill.title} <button onClick={this.onClickDelete} id={skill.id} >x</button> <Description /></li>)
                    })}
                </ul>
                <form action="" className="skills-form" onSubmit={this.onSubmitForm}>
                    <label htmlFor="title-input">Title</label>
                    <input onChange={this.onChangeTitle} value={this.state.skill.title} type="text" name="title-input" id="title-input" />
                    <button onClick={this.onClickSave}>Save</button>
                    <button>Cancel</button>
                </form>
            </div>
        )
    }

}

export default Skills