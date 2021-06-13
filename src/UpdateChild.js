import React, { Component } from 'react'

export default class UpdateChild extends Component {
    constructor(props){
        super(props);
        this.state={
            mroll:this.props.roll, 
            name:'vicky',
        }
        console.log('child constructor called')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Inside getDerivedFromProps')
        if(props.roll===state.mroll)
        {
            return null;
        }
        else{
              return {mroll:props.roll,name:"rohan"};
        }
    }
     shouldComponentUpdate(nextProps,nextState){
        console.log('should component update');
        console.log(nextProps,nextState);
        if(this.state.mroll<110)
        {
            return true;
        }
        else{
            return false;
        }
    }
    componentDidUpdate(prevProps,nextProps,snapshot){
        console.log('console did Update')
    }
    render() {
        //so when you click the button,the props is changed and the changed props is passed into the UpdatedChild class.
        //THe updated child class now has the new value of props but the state was already defined from the earlier value of props
        //as we know state can't be changed directly, so we use getDerivedStateFromProps() method to set the new value of state which is called before component is mounted or new update is mounted
        console.log('Child rendered');
        return (
            <div>
                <h1>Child Roll is {this.state.mroll}</h1>
                Name is {this.state.name}
            </div>
        )
    }
}
