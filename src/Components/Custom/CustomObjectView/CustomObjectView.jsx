import React from "react";
import Description from '../../Description/Description'
import './StyleCustomObjectView.css'
import uniqid from 'uniqid'
import ViewForm from "../ViewForm/ViewForm";

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


            <ViewForm
                customObject={customObject}
                displayViewForm={displayViewForm}
                formRef={formRef}
                onChangeViewTitle={onChangeViewTitle}
                onChangeViewCompany={onChangeViewCompany}
                onChangeViewInstitution={onChangeViewInstitution}
                onChangeViewDuration={onChangeViewDuration}
                onClickCancelObjectView={onClickCancelObjectView}
                onClickSaveObjectView={onClickSaveObjectView}
            />

        </div>
    )

}