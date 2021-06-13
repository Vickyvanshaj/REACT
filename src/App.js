import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount(){
    console.log('app mounted');
  }
  componentWillUnmount(){
    console.log('App umounted')
  }
  render() {
    return (
      <div>
        <h1>App component</h1>
      </div>
    )
  }
}
