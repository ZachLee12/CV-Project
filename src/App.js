import React from "react";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import WorkExperience from './Components/WorkExperience/WorkExperience'


class App extends React.Component {
  render() {
    return (
      <div>
        <PersonalDetails />
        <WorkExperience />
      </div>
    )
  }
}

export default App;