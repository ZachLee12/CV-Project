import React, { useEffect } from "react";
import Description from '../Description/Description'
import './CustomObjectView.css'

export default function CustomObjectView(props) {
    const { customObject } = props //destructure

    const initialState = {
        hasTitle: customObject.hasTitle,
        hasInstitution: customObject.hasInstitution,
        hasCompany: customObject.hasCompany,
        hasDuration: customObject.hasDuration
    }

    const [customObjectView, setCustomObjectView] = React.useState(initialState)


    useEffect(() => {
        // console.log(customObjectView)
    })

    return (
        <div>
            <form className="custom-object-view-form" action="">
                <label className={`custom-object-view-title ${customObject.hasTitle ? '' : 'hidden'}`} htmlFor="">
                    Custom Object View Title
                    <input type="text" />
                </label>

                <label className={`custom-object-view-institution ${customObject.hasInstitution ? '' : 'hidden'}`} htmlFor="">
                    Custom Object View Institution
                    <input type="text" />
                </label>

                <label className={`custom-object-view-company ${customObject.hasCompany ? '' : 'hidden'}`} htmlFor="">
                    Custom Object View Company
                    <input type="text" />
                </label>

                <label className={`custom-object-view-institution ${customObject.hasDuration ? '' : 'hidden'}`} htmlFor="">
                    Custom Object View Institution
                    <input type="text" />
                </label>

            </form>
        </div>
    )

}