import React from "react";
import uniqid from "uniqid";
import './StyleDescription.css'

class Description extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            description: {
                text: '',
                id: uniqid(),
            },
            descriptionList: [{ text: 'Example Description (you can remove me!)', id: uniqid() }],
            displayDescriptionForm: false,
            displayEmptyFieldErrorMessage: false
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
        if (this.inputRef.current.value.trim() === '') {
            this.setState({
                displayEmptyFieldErrorMessage: true,
            })
        } else {
            this.setState({
                description: {
                    text: '',
                    id: uniqid()
                },
                displayEmptyFieldErrorMessage: false,
                descriptionList: [...this.state.descriptionList, this.state.description]
            })
            this.inputRef.current.value = ''
        }

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
            <div data-testid='Description' id='Description'>
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
                    <span
                        className={`${this.state.displayEmptyFieldErrorMessage ? 'show-error-message' : 'hide-error-message'}`}
                        id="description-this-field-cannot-be-empty">
                        This field cannot be empty.
                    </span>
                    <input
                        ref={this.inputRef}
                        autoComplete='off'
                        type="text"
                        id="description-input"
                        onChange={this.onChangeInput}
                         />

                    <button onClick={this.onClickAddDescription} id="add-description-button" >Add</button>
                </form>
            </div>
        )
    }
}

export default Description;