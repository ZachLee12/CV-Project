import React from 'react'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Education from '../Components/Education/Education'

const mockChildComponent = jest.fn();
jest.mock('../Components/Description/Description', () => (props) => {
    mockChildComponent(props);
    return <mock-ChildComponent />
})

describe('Test if upon hovering the component', () => {
    it('at the title, it shows Add button', () => {
        render(<Education />)
        const educationTitle = screen.getByText('Education')
        const button = screen.getByText('+ Add Education')
        userEvent.hover(educationTitle)

        expect(button.classList.contains('hidden')).toBe(false)
    })

    it('shows the delete button', () => {
        render(<Education />)
        const educationComponent = screen.getByTestId('Education')
        const deleteButton = screen.getByText('x')
        userEvent.hover(educationComponent)

        expect(deleteButton.classList.contains('hidden')).toBe(false);
    })

    it('passes props correctly to Description child component when hovered', () => {
        render(<Education />)
        const educationComponent = screen.getByTestId('Education')
        userEvent.hover(educationComponent)

        expect(mockChildComponent).toHaveBeenCalledWith(
            expect.objectContaining({
                displayDescriptionForm: true,
                displayDescriptionRemoveButton: true,
            })
        )
    })
})
