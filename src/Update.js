import React, { Component } from 'react'
import UpdateChild from './UpdateChild';
export default class Update extends Component {
    constructor(props){
        super(props);
        this.state={
            roll:101,
        };
        console.log('parent constructor called');
    }
    clickHandle =() =>{
        console.log('button clicked');
        this.setState({roll:this.state.roll+2});
    }
    render() {
        console.log('parent rendered')
        return (
            <div>
                <UpdateChild roll={this.state.roll}/>
                <button onClick={this.clickHandle}>Change</button>
            </div>
        )
    }
}
