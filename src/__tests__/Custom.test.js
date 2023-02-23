import React from "react";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/user-event'
import userEvent from "@testing-library/user-event";
import CustomSection from "../Components/Custom/CustomSection/CustomSection";
import CustomObjectView from "../Components/Custom/CustomObjectView/CustomObjectView";
import ViewForm from "../Components/Custom/ViewForm/ViewForm";
// import ViewForm from "../Components/Custom/ViewForm/ViewForm";

const mockCustomObject = jest.fn()
jest.mock('../Components/Custom/CustomObjectView/CustomObjectView', () => (props) => {
    mockCustomObject(props)

    return (
        <>
            Custom Object View Mock
        </>
    )
})

const mockViewForm = jest.fn()
jest.mock('../Components/Custom/ViewForm/ViewForm', () => (props) => {
    mockViewForm(props)

    return <mock-viewForm />
})

describe('Test Custom Section Form', () => {
    it(`renders one CustomObjectView initially when it itself is rendered`, () => {
        render(<CustomSection />)


        expect(mockCustomObject).toBeCalledTimes(1)

    })
})

describe('Test Custom Section Object', () => {
    //unmock CustomObjectView only for this test
    it.only('should call ViewForm with the correct props', () => {
        jest.unmock('../Components/Custom/CustomObjectView/CustomObjectView')

        render(<CustomObjectView displayViewForm={true} />)

        screen.debug()

        expect(<ViewForm />).toBeInTheDocument();
    })

})
