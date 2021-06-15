import React from 'react'
import "./App.css";
import User from './User';
const App=()=>{
    let style=false;
    return <React.Fragment>
        <h1 className='txtb'>Hello App</h1>
        <User color={style?"txtb":"txtg"}/>
    </React.Fragment>
}
export default App;