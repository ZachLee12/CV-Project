import React, { useEffect } from "react";
import Description from '../Description/Description'
import './CustomObjectView.css'
import uniqid from 'uniqid'

export default function CustomObjectView(props) {
    const { customObject } = props //destructure

    const initialState = {
        view: {
            title: '',
            institution: '',
            company: '',
            duration: '',
            id: uniqid()
        },
        viewList: [],
        displayDescriptionForm: true,
        displayDescriptionRemoveButton: true
    }

    const [customObjectView, setCustomObjectView] = React.useState(initialState)

    const onSubmit = (e) => {
        e.preventDefault()
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

    const onClickAddObjectView = (e) => {
        setCustomObjectView({
            ...customObjectView,
            view: {
                ...customObjectView.view,
                id: uniqid()
            },
            viewList: [...customObjectView.viewList, customObjectView.view]
        })
    }

    useEffect(() => {
        // console.log(customObjectView)
    })

    return (
        <div>
            <ul className="custom-object-view-list">
                {
                    customObjectView.viewList.map(view => {
                        return (
                            <li key={view.id}>
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
                                    displayDescriptionForm={customObjectView.displayDescriptionForm}
                                    displayDescriptionRemoveButton={customObjectView.displayDescriptionRemoveButton}
                                />
                            </li>
                        )
                    })

                }
            </ul>

            <form onSubmit={onSubmit} className="custom-object-view-form" action="">
                <label className={`custom-object-view-title ${customObject.hasTitle ? '' : 'hidden'}`} htmlFor="">
                    Custom Object View Title
                    <input onChange={onChangeViewTitle} type="text" />
                </label>

                <label className={`custom-object-view-institution ${customObject.hasInstitution ? '' : 'hidden'}`} htmlFor="">
                    Custom Object View Institution
                    <input onChange={onChangeViewInstitution} type="text" />
                </label>

                <label className={`custom-object-view-company ${customObject.hasCompany ? '' : 'hidden'}`} htmlFor="">
                    Custom Object View Company
                    <input onChange={onChangeViewCompany} type="text" />
                </label>

                <label className={`custom-object-view-duration ${customObject.hasDuration ? '' : 'hidden'}`} htmlFor="">
                    Custom Object View Duration
                    <input onChange={onChangeViewDuration} type="text" />
                </label>
                <div className="custom-object-view-form-buttons-wrapper">
                    <button onClick={onClickAddObjectView}>Add</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
    )

}