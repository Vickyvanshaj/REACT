import React, { Component } from "react";

const Student = props =>{
    return <React.Fragment>
        <h1>Hello Everyone</h1>
    <p>{props.children}</p>
    </React.Fragment>
}

//class based
// class Student extends Component
// {
//     render()
//     {
//         return <React.Fragment>
//         <h1>Hello Everyone</h1>
//     <p>{this.props.children}</p>
//     </React.Fragment>
//     }
// }
export default Student;