import React from "react";
import uniqid from "uniqid";
import './StyleDescription.css'

class Description extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: {
                text: '',
                id: uniqid(),
            },
            descriptionList: [{ text: 'test', id: uniqid() }],
            displayDescriptionForm: false
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
        if(e.target.parentElement.checkValidity())
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
        const { displayDescriptionForm, displayDescriptionRemoveButton } = this.props
        return (
            <div>
                <ul className='description-list'>
                    {this.state.descriptionList.map(desc => {
                        return <li key={desc.id} className='description-list-item'>
                            {desc.text}
                            <button
                                className={`remove-button ${displayDescriptionRemoveButton ? '' : 'hidden'}`}
                                id={desc.id}
                                onClick={this.onClickDelete} >
                                remove
                            </button>
                        </li>
                    })}
                </ul>

                <form action=""
                    onSubmit={this.onSubmitForm}
                    className={`description-form ${displayDescriptionForm ? '' : 'hidden'}`}>
                    <label htmlFor="description-input">Add Description (optional)</label>
                    <input value={this.state.description.text} type="text" id="description-input" onChange={this.onChangeInput} required />
                    <button onClick={this.onClickAddDescription} id="add-description-button" >Add</button>
                </form>
            </div>
        )
    }
}

export default Description;