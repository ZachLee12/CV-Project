import React from "react";

class WorkExperienceForm extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    render() {
        const { formRef, onSubmitForm, onChangeInput, onClickSave, onClickCancel, displayForm } = this.props

        return (
            <form ref={formRef} data-testid='WorkExperienceForm' className={`work-experience-form ${displayForm ? '' : 'hidden'}`} action="" onSubmit={onSubmitForm}>
                <label htmlFor="title-input">Title</label>
                <input autoComplete='off' onChange={onChangeInput} type="text" id="title-input" required />

                <label htmlFor="company-input">Company</label>
                <input autoComplete='off' onChange={onChangeInput} type="text" id="company-input" required />

                <label htmlFor="duration-input">Duration</label>
                <input autoComplete='off' onChange={onChangeInput} type="text" id="duration-input" required />

                <div className="work-experience-buttons-wrapper">
                    <button className="save-button" onClick={onClickSave}>Save</button>
                    <button type='button' className="cancel-button" onClick={onClickCancel}>Cancel</button>
                </div>
            </form>
        )
    }
}

export default WorkExperienceForm;