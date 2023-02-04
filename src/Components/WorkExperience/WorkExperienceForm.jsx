import React from "react";

class WorkExperienceForm extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    render() {
        const { onSubmitForm, onChangeInput, onClickSave, onClickCancel, workExperience, displayForm } = this.props

        return (
            <form className={`work-experience-form ${displayForm ? '' : 'hidden'}`} action="" onSubmit={onSubmitForm}>
                <label htmlFor="title-input">Title</label>
                <input onChange={onChangeInput} value={workExperience.title} type="text" id="title-input" />

                <label htmlFor="company-input">Company</label>
                <input onChange={onChangeInput} value={workExperience.company} type="text" id="company-input" />

                <label htmlFor="duration-input">Duration</label>
                <input onChange={onChangeInput} value={workExperience.duration} type="text" id="duration-input" />

                <div className="buttons-wrapper">
                    <button className="save-button" onClick={onClickSave}>Save</button>
                    <button className="cancel-button" onClick={onClickCancel}>Cancel</button>
                </div>
            </form>
        )
    }
}

export default WorkExperienceForm;