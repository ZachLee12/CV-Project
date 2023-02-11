import React, { useEffect } from "react";
import './CustomSection.css'
import CustomObjectView from "./CustomObjectView";
import uniqid from 'uniqid'

//Custom Section = Large Title and thick line
//Custom Object = Bullet points under the title
export default function CustomSection(props) {
    const initialState = {
        customSectionTitle: '',
        customSectionId: uniqid(),
        customObject: {
            hasTitle: false,
            hasInstitution: false,
            hasCompany: false,
            hasDuration: false,
            id: uniqid()
        },
        customObjectList: []
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
            customObjectList: [...customSection.customObjectList, customSection.customObject]
        })
    }

    useEffect(() => {
        console.log(customSection) //this will be called on mounting, and when state changes
        return () => {
            // console.log(customSection)
        }
    })

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>Custom Section customization
            <form onSubmit={onSubmit} className="custom-section-form" action="">
                <label className="custom-section-title" htmlFor="custom-section-title-input">
                    Custom Section Title:
                    <input onChange={onChangeCustomSectionTitle} id='custom-section-title-input' type="text" />
                </label>


                <div className="custom-object-customization-wrapper">
                    Custom Object customization
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

                <button onClick={onClickAddCustomSection}>Create Custom Section</button>
            </form>

            <ul className="custom-objects-list">
                {customSection.customObjectList.map(object => { //this is named 'object' to avoid confusion with customObject in customSection
                    return (
                        <div key={object.id} className="custom-section-view">
                            <p className="custom-section-title-view">{customSection.customSectionTitle}</p>
                            <li key={object.id}>
                                <CustomObjectView
                                    customObject={object}
                                />
                            </li>
                        </div>
                    )
                })}
            </ul>

        </div>
    )
}