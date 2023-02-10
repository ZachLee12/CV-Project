import React from "react";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import WorkExperience from '../WorkExperience/WorkExperience'
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
// import ProfilePicture from "../PersonalDetails/ProfilePicture";
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <div className="side-bar">
          <PersonalDetails />
        </div>
        <div className="main-content">
          <Education />
          <WorkExperience />
          <Skills />
        </div>
      </div>
    )
  }
}

export default App;