import React from "react";
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/user-event'
import PersonalDetails from "../Components/PersonalDetails/PersonalDetails";
import userEvent from "@testing-library/user-event";

describe('Rendering of Child Components', () => {
    test('Renders ProfilePicture', () => {
        render(<PersonalDetails />)
        const ProfilePicture = screen.getByTestId('ProfilePicture')
        expect(ProfilePicture).toBeInTheDocument();
    })

    test('Renders Address', () => {
        render(<PersonalDetails />)
        const Address = screen.getByTestId('Address')
        expect(Address).toBeInTheDocument();
    })
})

describe(`MouseOver/Hovering Components show hidden fields`, () => {
    //since ProfilePicture do not have forms, we test for the presence of 'div.file-input-wrapper' element
    test('Shows ProfilePicture hidden elements', () => {
        render(<PersonalDetails />)
        const fileInputWrapperDiv = screen.getByTestId('file-input-wrapper')
        const ProfilePicture = screen.getByTestId('ProfilePicture')
        userEvent.hover(ProfilePicture)

        expect(fileInputWrapperDiv.classList.contains('hidden')).toBe(false)
    })

    test('Shows Personal Details form', () => {
        render(<PersonalDetails />)
        const personalDetailsForm = screen.getByTestId('personal-details-form')
        userEvent.hover(personalDetailsForm)
        expect(personalDetailsForm.classList.contains('hidden')).toBe(false)
    })

    test('Shows Address form', () => {
        render(<PersonalDetails />)
        const addressForm = screen.getByTestId('address-form')
        userEvent.hover(addressForm)
        expect(addressForm.classList.contains('hidden')).toBe(false)
    })

    test('Shows ColorPicker Widget', () => {
        render(<PersonalDetails />)
        const colorPickerWidget = screen.getByTestId('background-color-input-wrapper')
        userEvent.hover(colorPickerWidget)
        expect(colorPickerWidget.classList.contains('hidden')).toBe(false)
    })
})
