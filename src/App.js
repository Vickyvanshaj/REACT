import React, { useState } from 'react'
import User from './User';
import Guest from './Guest';

const App=(props)=>{
    const isRegistered=props.consumer;
    if(isRegistered){
      
      return <User/>
    }
    return <Guest/> 
    
}
export default App; 