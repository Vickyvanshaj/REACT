import React, { Component } from 'react'

class Student extends Component{     
    constructor(props){
        super(props);
        this.state={
            name:"Rohan",
            roll:this.props.roll,
        };

    }
    
    handleClick = () =>{
        this.setState({name:"Vicky",roll:"177"});
        console.log('button clicked',this);
    }
    //set State using function
    // handleClick = () =>{
    //     this.setState(function (state,props) {
                // console.log(state)
    //     })
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