import React, { useEffect } from "react";
import Description from '../Description/Description'
import './CustomObjectView.css'
import uniqid from 'uniqid'

export default function CustomObjectView(props) {
    const { customObject, displayViewForm } = props //destructure

    const formRef = React.useRef(null)

    const initialState = {
        view: {
            title: '',
            institution: '',
            company: '',
            duration: '',
            id: uniqid()
        },
        viewList: [],
        displayDescriptionRemoveButton: false,
        displayDeleteViewButton: false,
        displayCustomObjectViewForm: true,
    }

    const [customObjectView, setCustomObjectView] = React.useState(initialState)

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onMouseOverComponent = (e) => {
        setCustomObjectView({
            ...customObjectView,
            displayDescriptionRemoveButton: true,
            displayDeleteViewButton: true,
        })
    }

    const onMouseOutComponent = (e) => {
        setCustomObjectView({
            ...customObjectView,
            displayDescriptionRemoveButton: false,
            displayDeleteViewButton: false,
        })
    }

    const onChangeViewTitle = (e) => {
        setCustomObjectView({
            ...customObjectView,
            view: {
                ...customObjectView.view,
                title: e.target.value
            }
        })
    }

    const onChangeViewInstitution = (e) => {
        setCustomObjectView({
            ...customObjectView,
            view: {
                ...customObjectView.view,
                institution: e.target.value
            }
        })
    }

    const onChangeViewCompany = (e) => {
        setCustomObjectView({
            ...customObjectView,
            view: {
                ...customObjectView.view,
                company: e.target.value
            }
        })
    }

    const onChangeViewDuration = (e) => {
        setCustomObjectView({
            ...customObjectView,
            view: {
                ...customObjectView.view,
                duration: e.target.value
            }
        })
    }

    const onClickSaveObjectView = (e) => {
        if (formRef.current.checkValidity()) {
            setCustomObjectView({
                ...customObjectView,
                view: {
                    ...customObjectView.view,
                    id: uniqid()
                },
                viewList: [...customObjectView.viewList, customObjectView.view],
            })
            props.onClickShowViewForm(e);
        }
        
    }

    const onClickCancelObjectView = (e) => {
        props.onClickShowViewForm(e);
    }

    const onClickDeleteObjectView = (e) => {
        setCustomObjectView({
            ...customObjectView,
            viewList: customObjectView.viewList.filter(view => view.id !== e.target.id)
        })
    }

    useEffect(() => {
        // console.log(customObjectView)
    })

    return (
        <div data-testid='CustomObjectView' id='CustomObjectView'>
            <ul className="custom-object-view-list">
                {
                    customObjectView.viewList.map(view => {
                        return (
                            <li
                                onMouseOver={onMouseOverComponent}
                                onMouseOut={onMouseOutComponent}
                                key={view.id} className='custom-object-view-item'>
                                <button
                                    onMouseOver={onMouseOverComponent}
                                    onMouseOut={onMouseOutComponent}
                                    id={view.id} onClick={onClickDeleteObjectView} className={`delete-custom-object-view-button ${customObjectView.displayDeleteViewButton ? '' : 'hidden'}`}>x</button>
                                <div className={`view-title ${view.title !== '' ? '' : 'hidden'}`}>
                                    {view.title}
                                </div>

                                <div className={`view-institution ${view.institution !== '' ? '' : 'hidden'}`}>
                                    {view.institution}
                                </div>

                                <div className={`view-company ${view.company !== '' ? '' : 'hidden'}`}>
                                    {view.company}
                                </div>

                                <div className={`view-duration ${view.duration !== '' ? '' : 'hidden'}`}>
                                    {view.duration}
                                </div>

                                <Description
                                    displayDescriptionForm={props.displayDescriptionForm}
                                    displayDescriptionRemoveButton={customObjectView.displayDescriptionRemoveButton}
                                />
                            </li>
                        )
                    })

                }
            </ul>

            <form
                ref={formRef}
                onSubmit={onSubmit}
                className={`custom-object-view-form ${displayViewForm ? '' : 'hidden'}`}
                action="">
                <label className={`custom-object-view-title ${customObject.hasTitle ? 'display-flex' : 'hidden'}`} htmlFor="">
                    Title
                    <input
                        required
                        autoComplete="off"
                        onChange={onChangeViewTitle}
                        name='title-input'
                        type="text" />
                </label>

                <label className={`custom-object-view-institution ${customObject.hasInstitution ? 'display-flex' : 'hidden'}`} htmlFor="">
                    Institution
                    <input autoComplete="off" onChange={onChangeViewInstitution} type="text" />
                </label>

                <label className={`custom-object-view-company ${customObject.hasCompany ? 'display-flex' : 'hidden'}`} htmlFor="">
                    Company
                    <input autoComplete="off" onChange={onChangeViewCompany} type="text" />
                </label>

                <label className={`custom-object-view-duration ${customObject.hasDuration ? 'display-flex' : 'hidden'}`} htmlFor="">
                    Duration
                    <input autoComplete="off" onChange={onChangeViewDuration} type="text" />
                </label>
                <div className="custom-object-view-form-buttons-wrapper">
                    <button onClick={onClickSaveObjectView} id={customObject.id} className='save-object-view-button' >Save</button>
                    <button onClick={onClickCancelObjectView} id={customObject.id} className="cancel-object-view-button">Cancel</button>
                </div>
            </form>
        </div>
    )

}