import React, { Component } from 'react'

export default class Student extends Component {
    componentDidMount(){
        console.log('compone mounted')
    }
    render() {
        return (
            <div>
                <h1>student mounted</h1>
            </div>
        )
    }
}
