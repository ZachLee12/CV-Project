import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Education from '../Components/Education/Education'
import WorkExperience from '../Components/WorkExperience/WorkExperience'
import Skills from '../Components/Skills/Skills'

const mockDescription = jest.fn();
jest.mock('../Components/Description/Description', () => (props) => {
    mockDescription(props);
    return <mock-Description />
})

describe('Education Component', () => {
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

            expect(mockDescription).toHaveBeenCalledWith(
                expect.objectContaining({
                    displayDescriptionForm: true,
                    displayDescriptionRemoveButton: true,
                })
            )
        })
    })

})

describe('Work Experience Component', () => {
    describe('Test if upon hovering the component', () => {
        it('at the title, it shows Add button', () => {
            render(<WorkExperience />)
            const workExperienceTitle = screen.getByText('Work Experience')
            const button = screen.getByText('+ Add Work Experience')
            userEvent.hover(workExperienceTitle)

            expect(button.classList.contains('hidden')).toBe(false)
        })

        it('shows the delete button', () => {
            render(<WorkExperience />)
            const workExperienceComponent = screen.getByTestId('WorkExperience')
            const deleteButton = screen.getByText('x')
            userEvent.hover(workExperienceComponent)

            expect(deleteButton.classList.contains('hidden')).toBe(false);
        })

        it('passes props correctly to Description child component when hovered', () => {
            render(<WorkExperience />)
            const workExperienceComponent = screen.getByTestId('WorkExperience')
            userEvent.hover(workExperienceComponent)

            expect(mockDescription).toHaveBeenCalledWith(
                expect.objectContaining({
                    displayDescriptionForm: true,
                    displayDescriptionRemoveButton: true,
                })
            )
        })
    })
})

describe('Skills Component', () => {
    describe('Test if upon hovering the component', () => {
        it('at the title, it shows Add button', () => {
            render(<Skills />)
            const skillsTitle = screen.getByText('Skills')
            const button = screen.getByText('+ Add Skill')
            userEvent.hover(skillsTitle)

            expect(button.classList.contains('hidden')).toBe(false)
        })

        it('shows the delete button', () => {
            render(<Skills />)
            const skillsComponent = screen.getByTestId('Skills')
            const deleteButton = screen.getByText('x')
            userEvent.hover(skillsComponent)

            expect(deleteButton.classList.contains('hidden')).toBe(false);
        })

        it('passes props correctly to Description child component when hovered', () => {
            render(<Skills />)
            const skillsComponent = screen.getByTestId('Skills')
            userEvent.hover(skillsComponent)

            expect(mockDescription).toHaveBeenCalledWith(
                expect.objectContaining({
                    displayDescriptionForm: true,
                    displayDescriptionRemoveButton: true,
                })
            )
        })
    })
})