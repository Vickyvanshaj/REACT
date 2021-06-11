import React from "react";
import Student from './Student';
//creating component


const App=()=>{
    return <React.Fragment>
      <Student name="vicky"/>
      <Student name="rohan"/>
      <Student name="yash" />
    </React.Fragment>
}
export default App;