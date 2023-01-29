import React from "react";
import PersonalDetails from "./Components/PersonalDetails";
import WorkExperience from './Components/WorkExperience'


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