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
      displayAddCustomSectionButton: false,
      displayPageBreakMessage: false,
    }
  }

  onMouseOverComponent = (e) => {
    this.setState({
      displayAddCustomSectionButton: true,
      displayPageBreakMessage: true,
    })
  }

  onMouseOutComponent = (e) => {
    this.setState({
      displayAddCustomSectionButton: false,
      displayPageBreakMessage: false,
    })
  }

  render() {
    return (
      <div
        onMouseOver={this.onMouseOverComponent}
        onMouseOut={this.onMouseOutComponent}
        className={`${this.props.isTwoPageCV ? 'two-page-height' : 'one-page-height'}`}
        id="App">
        <div
          className={`${this.state.displayPageBreakMessage ? '' : 'hidden'}`}
          id='page-break-indicator'>
          -----------------------------------------PAGE BREAK HERE, please click <span id='make-two-pages-cv-title'>'Make Two-Pages CV'</span> above ------------------------------------
        </div>
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