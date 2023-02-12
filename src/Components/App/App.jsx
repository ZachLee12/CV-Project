import React from "react";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import WorkExperience from '../WorkExperience/WorkExperience'
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
// import ProfilePicture from "../PersonalDetails/ProfilePicture";
import './App.css'
import CustomSection from "../Custom/CustomSection";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayAddCustomSectionButton: true
    }
  }

  onMouseOverComponent = (e) => {
    this.setState({
      displayAddCustomSectionButton: true
    })
  }

  onMouseOutComponent = (e) => {
    this.setState({
      displayAddCustomSectionButton: false
    })
  }

  render() {
    return (
      <div
        onMouseOver={this.onMouseOverComponent}
        onMouseOut={this.onMouseOutComponent}
        id="App">
        <div className="side-bar">
          <PersonalDetails />
        </div>
        <div className="main-content">
          <Education />
          <WorkExperience />
          <Skills />
          <CustomSection
            displayAddCustomSectionButton={this.state.displayAddCustomSectionButton}
          />
        </div>
      </div>
    )
  }
}

export default App;