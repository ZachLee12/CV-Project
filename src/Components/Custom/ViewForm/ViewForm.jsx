import React from 'react'
import './StyleViewForm.css'

function ViewForm(props) {

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form
            ref={props.formRef}
            onSubmit={onSubmit}
            className={`custom-object-view-form ${props.displayViewForm ? '' : 'hidden'}`}
            action="">
            {props.customObject.hasTitle &&
                <label className={`custom-object-view-title view-label`} htmlFor="">
                    Title
                    <input
                        required
                        autoComplete="off"
                        onChange={props.onChangeViewTitle}
                        type="text" />
                </label>}

            {props.customObject.hasInstitution &&
                <label className={`custom-object-view-institution view-label`} htmlFor="">
                    Institution
                    <input
                        required
                        autoComplete="off"
                        onChange={props.onChangeViewInstitution}
                        type="text" />
                </label>}

            {props.customObject.hasCompany &&
                <label className={`custom-object-view-company view-label`} htmlFor="">
                    Company
                    <input
                        required
                        autoComplete="off"
                        onChange={props.onChangeViewCompany}
                        type="text" />
                </label>}

            {props.customObject.hasDuration &&
                <label className={`custom-object-view-duration view-label`} htmlFor="">
                    Duration
                    <input
                        required
                        autoComplete="off"
                        onChange={props.onChangeViewDuration}
                        type="text" />
                </label>}

            <div className="custom-object-view-form-buttons-wrapper">
                <button onClick={props.onClickSaveObjectView} id={props.customObject.id} className='save-object-view-button'>Save</button>
                <button onClick={props.onClickCancelObjectView} id={props.customObject.id} className="cancel-object-view-button" type='button'>Cancel</button>
            </div>
        </form>
    )

}


export default ViewForm