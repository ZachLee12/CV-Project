import React from "react";
import { getByTestId, getByText, render, screen } from '@testing-library/react'
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

describe('Test onChange on Inputs', () => {
    test('Name input', () => {
        render(<PersonalDetails />)
        const nameInput = screen.getByLabelText('Your Name', { selector: 'input' })
        const nameTextWrapper = screen.getByTestId('nameText-wrapper')
        userEvent.type(nameInput, 'Zach')

        expect(nameTextWrapper.textContent).toBe('Zach')
    })

    test('Email input', () => {
        render(<PersonalDetails />)
        const emailInput = screen.getByLabelText('example@example.com', { selector: 'input' })
        const emailTextWrapper = screen.getByTestId('emailText-wrapper')
        userEvent.type(emailInput, 'testing@testEmail.com')

        expect(emailTextWrapper.textContent).toBe('testing@testEmail.com')
    })

    test('Phone input', () => {
        render(<PersonalDetails />)
        const phoneInput = screen.getByLabelText('+123 456 789', { selector: 'input' })
        const phoneTextWrapper = screen.getByTestId('phoneText-wrapper')
        userEvent.type(phoneInput, '+1234')

        expect(phoneTextWrapper.textContent).toBe('+1234')
    })

    test('LinkedIn input', () => {
        render(<PersonalDetails />)
        const linkedInInput = screen.getByLabelText('linkedIn URL', { selector: 'input' })
        const linkedInTextWrapper = screen.getByTestId('linkedInText-wrapper')
        userEvent.type(linkedInInput, 'some URL')

        expect(linkedInTextWrapper.textContent).toBe('some URL')
    })
})

describe('Reset Background Color Button', () => {
    test('Background Color resets when button is clicked', () => {
        render(<PersonalDetails />)
        const PersonalDescription = screen.getByTestId('PersonalDetails')
        const resetButton = screen.getByText('Reset')
        userEvent.click(resetButton)
        expect(PersonalDescription).toHaveStyle(`
            backgroundColor: this.#DEFAULT_BACKGROUND_COLOR,
        `)
    })
})

