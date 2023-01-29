import React from "react";
import uniqid from "uniqid";

class Description extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: {
                text: '',
                id: uniqid(),
            },
            descriptionList: [],
        }
    }

    onChangeInput = (e) => {
        this.setState({
            description: {
                ...this.state.description,
                text: e.target.value
            }
        })
    }

    onClickAddDescription = (e) => {
        this.setState({
            description: {
                text: '',
                id: uniqid()
            },
            descriptionList: [...this.state.descriptionList, this.state.description]
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
    }

    onClickDelete = (e) => {
        this.setState({
            descriptionList: this.state.descriptionList.filter(desc => desc.id !== e.target.id)
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.descriptionList.map(desc => {
                        return <li key={desc.id}> {desc.text} <button id={desc.id} onClick={this.onClickDelete} >remove</button> </li>
                    })}
                </ul>

                <form action="" onSubmit={this.onSubmitForm}>
                    <label htmlFor="description-input"></label>
                    <input value={this.state.description.text} type="text" id="description-input" onChange={this.onChangeInput} />
                    <button onClick={this.onClickAddDescription} >Add Description</button>
                </form>
            </div>
        )
    }
}

export default Description;