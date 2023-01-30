import React from "react";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import WorkExperience from './Components/WorkExperience/WorkExperience'
import Skills from "./Components/Skills/Skills";
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <PersonalDetails />
        <WorkExperience />
        <Skills />
      </div>
    )
  }
}

export default App;