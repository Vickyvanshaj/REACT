import React, { Component } from 'react'

// //state outside the constructer
// class Student extends Component{
//     state={
//         name:"Vicky",
//         age:24,
//         branch:this.props.branch,
//     }
//     //props cant be modified but if you add props to state like above,you can modify it
//     render()
//     {
//         return <React.Fragment>
//             <h1>Hello {this.state.name}</h1>
//             <p>Your age is {this.state.age}</p>
//             <p>Your roll number is {this.props.roll}</p>
//             <p>Your Branch is {this.state.branch}</p>
//         </React.Fragment>
//     }
// }


//state inside the constructor
class Student extends Component{
   constructor(props){
       super(props);
       this.state={
        name:"Vicky",
        age:24,
        branch:this.props.branch,
    };
   }
   render()
    {
        return <React.Fragment>
            <h1>Hello {this.state.name}</h1>
            <p>Your age is {this.state.age}</p>
            <p>Your roll number is {this.props.roll}</p>
            <p>Your Branch is {this.state.branch}</p>
        </React.Fragment>
    }
}
export default Student;
