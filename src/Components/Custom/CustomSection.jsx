import React, { useEffect } from "react";
import './CustomSection.css'
import CustomObjectView from "./CustomObjectView";
import uniqid from 'uniqid'

//Custom Section = Large Title and thick line
//Custom Object = Bullet points under the title
export default function CustomSection(props) {
    const sampleSectionObject = {
        customSectionTitle: 'Sample Custom Section',
        customSectionId: uniqid(),
        customObject: {
            hasTitle: true,
            hasInstitution: true,
            hasCompany: true,
            hasDuration: true,
            displayViewForm: false,
            id: uniqid()
        },
        displayCustomForm: false,
        displayAddNAMEButton: false,
        displayDescriptionForm: false,
    }

    const initialState = {
        customSectionTitle: '',
        customSectionId: uniqid(),
        customObject: {
            hasTitle: false,
            hasInstitution: false,
            hasCompany: false,
            hasDuration: false,
            displayViewForm: false,
            id: uniqid()
        },
        displayCustomForm: false,
        displayAddNAMEButton: false,
        displayDescriptionForm: true,
        customSectionList: [sampleSectionObject],
        displayEmptyFieldWarning: false,
        displayCheckAtLeastOneWarning: false,
        checkedAtLeastOneCheckbox: false
        // displayAddCustomSectionButton: false,
    }

    const [customSection, setCustomSection] = React.useState(initialState)

    const onChangeCustomSectionTitle = (e) => {
        setCustomSection({
            ...customSection,
            customSectionTitle: e.target.value
        })
    }

    const onChangeTitleCheckbox = (e) => {
        setCustomSection({
            ...customSection,
            customObject: {
                ...customSection.customObject,
                hasTitle: e.target.checked
            },
            checkedAtLeastOneCheckbox: true
        })
    }

    const onChangeInstitutionCheckbox = (e) => {
        setCustomSection({
            ...customSection,
            customObject: {
                ...customSection.customObject,
                hasInstitution: e.target.checked
            },
            checkedAtLeastOneCheckbox: true
        })
    }

    const onChangeCompanyCheckbox = (e) => {
        setCustomSection({
            ...customSection,
            customObject: {
                ...customSection.customObject,
                hasCompany: e.target.checked
            },
            checkedAtLeastOneCheckbox: true
        })
    }

    const onChangeDurationCheckbox = (e) => {
        setCustomSection({
            ...customSection,
            customObject: {
                ...customSection.customObject,
                hasDuration: e.target.checked
            },
            checkedAtLeastOneCheckbox: true
        })
    }

    const onClickCreateCustomSection = (e) => {
        // if (customSection.customSectionTitle === '' || !customSection.checkedAtLeastOneCheckbox) {
        //     if (customSection.customSectionTitle === '') {
        //         setCustomSection({
        //             ...customSection,
        //             displayEmptyFieldWarning: true
        //         })
        //     }

        //     return
        // }
        console.log(e.target.parentElement.children)
        if (true) {
            setCustomSection({
                ...customSection,
                customSectionId: uniqid(),
                customObject: {
                    ...customSection.customObject,
                    hasTitle: false,
                    hasInstitution: false,
                    hasCompany: false,
                    hasDuration: false,
                    displayViewForm: false,
                    id: uniqid()
                },
                customSectionList: [...customSection.customSectionList, customSection],
                displayCustomForm: false,
                displayEmptyFieldWarning: false
            })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onClickShowViewForm = (e) => {
        //this method makes a shallow copy of the targeted customSection object
        //changes to target will also affect the REAL object
        let copyList = [...customSection.customSectionList]
        let targetInformation = null;

        // eslint-disable-next-line array-callback-return
        let target = copyList.find((section, index) => {
            if (section.customObject.id === e.target.id) {
                targetInformation = {
                    section,
                    index
                }
                return section //must return here, otherwise it wont work
            }
        })
        target = Object.assign(target, {
            customObject: {
                ...target.customObject,
                displayViewForm: !target.customObject.displayViewForm
            }
        })
        copyList[targetInformation[1]] = target
        setCustomSection({
            ...customSection,
            customSectionList: [...copyList]
        })
    }

    const onMouseOverSectionTitle = (e) => {
        //this method makes a shallow copy of the targeted customSection object
        //changes to target will also affect the REAL object
        let copyList = [...customSection.customSectionList]
        let targetInformation = null;

        // eslint-disable-next-line array-callback-return
        let target = copyList.find((section, index) => {
            if (section.customObject.id === e.target.id) {
                targetInformation = {
                    section,
                    index
                }
                return section //must return here, otherwise it wont work
            }
        })
        target = Object.assign(target, {
            displayAddNAMEButton: true
        })
        copyList[targetInformation[1]] = target
        setCustomSection({
            ...customSection,
            customSectionList: [...copyList]
        })
    }

    const onMouseOutSectionTitle = (e) => {
        //this method makes a shallow copy of the targeted customSection object
        //changes to target will also affect the REAL object
        let copyList = [...customSection.customSectionList]
        let targetInformation = null;

        // eslint-disable-next-line array-callback-return
        let target = copyList.find((section, index) => {
            if (section.customObject.id === e.target.id) {
                targetInformation = {
                    section,
                    index
                }
                return section //must return here, otherwise it wont work
            }
        })
        target = Object.assign(target, {
            displayAddNAMEButton: false
        })
        copyList[targetInformation[1]] = target
        setCustomSection({
            ...customSection,
            customSectionList: [...copyList]
        })
    }

    const onMouseOverComponent = (e) => {
        setCustomSection({
            ...customSection,
            displayDescriptionForm: true
        })
    }

    const onMouseOutComponent = (e) => {
        setCustomSection({
            ...customSection,
            displayDescriptionForm: false
        })
    }


    const onClickShowCustomForm = (e) => {
        setCustomSection({
            ...customSection,
            displayCustomForm: !customSection.displayCustomForm,
            // displayAddCustomSectionButton: false
        })
    }

    const onClickDelete = (e) => {
        setCustomSection({
            ...customSection,
            customSectionList: customSection.customSectionList.filter(sectionObject => sectionObject.customSectionId !== e.target.id)
        })

        // this.state.workExperienceList.filter(workExperience => workExperience.id !== e.target.id)
    }

    useEffect(() => {
        // console.log(customSection) //this will be called on mounting, and when state changes
        return () => {
            // console.log(customSection)
        }
    })

    return (
        <div
            onMouseOver={onMouseOverComponent}
            onMouseOut={onMouseOutComponent}
            id='CustomSection'>
            <button
                onClick={onClickShowCustomForm}
                className={`add-custom-section-button 
                ${props.displayAddCustomSectionButton ? '' : 'hidden'}
                ${customSection.displayCustomForm ? 'close-custom-section-color' : ''}`
                }>
                {customSection.displayCustomForm ? 'Close Custom Section' : 'Add Custom Section'}
            </button>
            <form onSubmit={onSubmit} className={`custom-section-form ${customSection.displayCustomForm ? '' : 'hidden'}`} action="">
                <p className="create-a-custom-section-title">Create a Custom Section!</p>
                <label className="custom-section-title" htmlFor="custom-section-title-input">
                    <p className="name-your-custom-section" >Name your custom section:</p>
                    <input required autoComplete="off" placeholder="Eg: Hobbies" onChange={onChangeCustomSectionTitle} id='custom-section-title-input' type="text" />
                    <span
                        className={customSection.displayEmptyFieldWarning ? 'fade-in-opacity' : 'fade-out-opacity'}
                        id='this-field-cannot-be-empty'>
                        This field cannot be empty!
                    </span>
                </label>


                <div className="custom-object-customization-wrapper">
                    <p className="what-does-this-section-have-title">What does this section have? (Put a &#x2713;)</p>
                    <label className="custom-object-title-label" htmlFor="custom-object-title-checkbox">
                        <input
                            onChange={onChangeTitleCheckbox}
                            id='custom-object-title-checkbox'
                            type="checkbox"
                            checked={true}
                            readOnly
                        // checked={customSection.customObject.hasTitle}
                        />
                        Title? (must be checked)
                    </label>

                    <label className="custom-object-institution-label" htmlFor="custom-object-institution-checkbox">
                        <input
                            onChange={onChangeInstitutionCheckbox}
                            id='custom-object-institution-checkbox'
                            type="checkbox"
                            checked={customSection.customObject.hasInstitution}
                        />
                        Institution?
                    </label>

                    <label className="custom-object-company-label" htmlFor="custom-object-company-checkbox">
                        <input
                            onChange={onChangeCompanyCheckbox}
                            id='custom-object-company-checkbox'
                            type="checkbox"
                            checked={customSection.customObject.hasCompany}
                        />
                        Company?
                    </label>

                    <label className="custom-object-duration" htmlFor="">
                        <input
                            onChange={onChangeDurationCheckbox}
                            id='custom-object-duration-checkbox'
                            type="checkbox"
                            checked={customSection.customObject.hasDuration}
                        />
                        Duration?
                    </label>
                    <span
                        className={customSection.displayCheckAtLeastOneWarning ? 'fade-in-opacity' : 'fade-out-opacity'}
                        id='check-at-least-one-box'>
                        Check at least one box!
                    </span>
                </div>

                <button
                    type="button"
                    className="create-custom-section-button"
                    onClick={onClickCreateCustomSection}>Create Custom Section</button>
            </form>

            <div className="custom-objects-view-container">
                {customSection.customSectionList.map(sectionObject => { //this is named 'sectionObject' to avoid confusion with customObject in customSection
                    return (
                        <div key={sectionObject.customObject.id} className="custom-section-view">
                            <p
                                id={sectionObject.customObject.id}
                                onMouseOver={onMouseOverSectionTitle}
                                onMouseOut={onMouseOutSectionTitle}
                                className="custom-section-title-view">

                                {/* this is the large section title */}
                                {sectionObject.customSectionTitle}

                                <button
                                    onClick={onClickShowViewForm}
                                    id={sectionObject.customObject.id}
                                    className={`add-custom-NAME-button ${sectionObject.displayAddNAMEButton ? '' : 'hidden'}`}
                                >

                                    Add {sectionObject.customSectionTitle}
                                </button>
                            </p>
                            <div className="delete-section-button-wrapper">
                                <button
                                    onClick={onClickDelete}
                                    id={sectionObject.customSectionId}
                                    className={`delete-section-button`}>
                                    delete section
                                </button>
                            </div>
                            <div className="custom-object-view-container" key={sectionObject.customObject.id}>
                                <CustomObjectView
                                    displayDescriptionForm={customSection.displayDescriptionForm}
                                    displayViewForm={sectionObject.customObject.displayViewForm}
                                    customObject={sectionObject.customObject}
                                    onClickShowViewForm={onClickShowViewForm}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}