import React, { Component } from 'react'
import Student from "./Student";
export default class App extends Component {
  constructor(props){
    super(props);
    console.log('App inside constructor');
    console.log(props);
    this.state={
      roll:"101",
    };
  }
  static getDerivedStateFromProps(props,state)
  {
    console.log('getdeived');
    console.log(props,state);
    return null;
  }
  componentDidMount(){
    //get data from server and set the states
    console.log('component did mount');
  }
  render() {
    console.log('render')
    return (
      <div>
       <Student name="vivi"/>
       <Student name="rohan"/>
      </div>
    )
  }
}
