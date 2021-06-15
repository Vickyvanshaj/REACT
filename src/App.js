import React from 'react'
import style from "./App.module.css"
import User from './User';
const App=()=>{
   
    return <React.Fragment>
        <h1 className={style.txt}>Hello App</h1>
        <User />
    </React.Fragment>
}
export default App;