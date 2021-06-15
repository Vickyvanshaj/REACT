import React from 'react'
import "./App.css";
import User from './User';
const App=()=>{
    return <React.Fragment>
        <h1 className='txt'>Hello App</h1>
        <User/>
        //classname in external css should be unique throughout all css files
    </React.Fragment>
}
export default App;