import React, { Component } from 'react'

class Student extends Component{
    //if you neccesarily have to use regular fn instead of arrow, so to get this access, do this
    constructor(props){
        super(props);
        this.state={
            name:"Rohan",
            roll:177,
        }
        this.handleClick=this.handleClick.bind(this);

    }
    handleClick(){
        console.log('button clicked',this);
        //this will be undefined bcoz class is in strict mode in JS,so here this is undefined.Use arrow methods instead which binds this object.

    }
    // handleClick = () =>{
    //     console.log('button clicked',this);
    // }
    render(){
        return  <React.Fragment>
            <h1>Hello {this.state.name}</h1>
            <h1>Hello {this.state.roll}</h1>
            
            <button onClick={this.handleClick}>Click Me</button>
        </React.Fragment>
    }
}
export default Student;