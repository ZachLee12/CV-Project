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
        }
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
        customSectionList: [sampleSectionObject],
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
            }
        })
    }

    const onChangeInstitutionCheckbox = (e) => {
        setCustomSection({
            ...customSection,
            customObject: {
                ...customSection.customObject,
                hasInstitution: e.target.checked
            }
        })
    }

    const onChangeCompanyCheckbox = (e) => {
        setCustomSection({
            ...customSection,
            customObject: {
                ...customSection.customObject,
                hasCompany: e.target.checked
            }
        })
    }

    const onChangeDurationCheckbox = (e) => {
        setCustomSection({
            ...customSection,
            customObject: {
                ...customSection.customObject,
                hasDuration: e.target.checked
            }
        })
    }

    const onClickAddCustomSection = (e) => {
        setCustomSection({
            ...customSection,
            customSectionId: uniqid(),
            customObject: {
                ...customSection.customObject,
                id: uniqid()
            },
            customSectionList: [...customSection.customSectionList, customSection]
        })
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

    const onMouseOverComponent = (e) => {

    }

    useEffect(() => {
        // console.log(customSection) //this will be called on mounting, and when state changes
        return () => {
            // console.log(customSection)
        }
    })

    return (
        <div id='CustomSection'>
            Custom Section customization
            <form onSubmit={onSubmit} className="custom-section-form" action="">
                <label className="custom-section-title" htmlFor="custom-section-title-input">
                    <p className="name-your-custom-section" >Name your custom section:</p>
                    <input placeholder="Eg: Hobbies" onChange={onChangeCustomSectionTitle} id='custom-section-title-input' type="text" />
                </label>


                <div className="custom-object-customization-wrapper">
                    <p className="what-does-this-section-have-title">What does this section have? (Put a &#x2713;)</p>
                    <label className="custom-object-title-label" htmlFor="custom-object-title-checkbox">
                        <input onChange={onChangeTitleCheckbox} id='custom-object-title-checkbox' type="checkbox" />
                        Title?
                    </label>

                    <label className="custom-object-institution-label" htmlFor="custom-object-institution-checkbox">
                        <input onChange={onChangeInstitutionCheckbox} id='custom-object-institution-checkbox' type="checkbox" />
                        Institution?
                    </label>

                    <label className="custom-object-company-label" htmlFor="custom-object-company-checkbox">
                        <input onChange={onChangeCompanyCheckbox} id='custom-object-company-checkbox' type="checkbox" />
                        Company?
                    </label>

                    <label className="custom-object-duration" htmlFor="">
                        <input onChange={onChangeDurationCheckbox} id='custom-object-duration-checkbox' type="checkbox" />
                        Duration?
                    </label>
                </div>

                <button
                    className="create-custom-section-button"
                    onClick={onClickAddCustomSection}>Create Custom Section</button>
            </form>

            <div className="custom-objects-view-container">
                {customSection.customSectionList.map(sectionObject => { //this is named 'object' to avoid confusion with customObject in customSection
                    return (
                        <div key={sectionObject.customObject.id} className="custom-section-view">
                            <p className="custom-section-title-view">{sectionObject.customSectionTitle}
                                <button onClick={onClickShowViewForm} id={sectionObject.customObject.id} >Add {sectionObject.customSectionTitle}</button>
                            </p>
                            <div key={sectionObject.customObject.id}>
                                <CustomObjectView
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