import React, { Component } from 'react'

class Student extends Component{     
   
    state={
        id:"12",
        name:"Rahul",
    };
    handleClick = (id,name,e) =>{
        console.log(id,name,e);
    }
   handleClickArg = (e)=>{
       return this.handleClick(this.state.id)
   }
    render(){
        return  <React.Fragment>
            <h1>Hello {this.state.name}</h1>
            <h1>Hello {this.props.roll}</h1>
            
            <button onClick={this.handleClick.bind(this,this.state.id,this.state.name)}>Delete</button>
            <button onClick={(e)=>this.handleClick(this.state.id,this.state.name,e)}>Delete </button>
            {/* <button onClick={this.handleClickArg}>Delete</button> */}

        </React.Fragment>
    }
}
export default Student;