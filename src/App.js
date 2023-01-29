import React from "react";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import WorkExperience from './Components/WorkExperience/WorkExperience'
import Skills from "./Components/Skills/Skills";

class App extends React.Component {
  render() {
    return (
      <div>
        <PersonalDetails />
        <WorkExperience />
        <Skills />
      </div>
    )
  }
}

export default App;