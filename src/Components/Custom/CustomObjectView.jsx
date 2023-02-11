import React, { useEffect } from "react";

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
        console.log(customObjectView)
    })

    return (
        <div>
            <form action="">
                <label htmlFor="">

                </label>
            </form>
        </div>
    )

}