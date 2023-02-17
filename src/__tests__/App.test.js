import React from "react";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/user-event'
import App from "../Components/App/App";

test('All main components are rendered', () => {

    render(<App />)
    const PersonalDetails = screen.getByTestId('PersonalDetails')
    const Descriptions = screen.getAllByTestId('Description')
    const Education = screen.getByTestId('Education')
    const Skills = screen.getByTestId('Skills')
    const WorkExperience = screen.getByTestId('WorkExperience')
    const WorkExperienceForm = screen.getByTestId('WorkExperienceForm')
    const CustomSection = screen.getByTestId('CustomSection')
    const CustomObjectView = screen.getByTestId('CustomObjectView')

    expect(PersonalDetails).toBeInTheDocument()
    expect(Education).toBeInTheDocument()
    expect(Skills).toBeInTheDocument()
    expect(WorkExperience).toBeInTheDocument()
    expect(WorkExperienceForm).toBeInTheDocument()
    expect(CustomSection).toBeInTheDocument()
    expect(CustomObjectView).toBeInTheDocument()

    //when initial render, only Education, WorkExperience and Skills have the 'Description' Component
    expect(Descriptions.length).toEqual(3)
})