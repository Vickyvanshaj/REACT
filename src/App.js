import React from 'react'
import User from './User';
const App=(props)=>{
    console.log(props)
    const prime=props.primeMember;
    return <React.Fragment>
        <h1>Welcome User</h1>
        {prime && <User/>}
    </React.Fragment>
}
export default App;