import React from 'react'

const Guest=(props)=>{
    const login=()=>{
       const setLog=props.setLogfn;
        setLog(true);
    }
    return <React.Fragment>
        <h1>Welcome Guest</h1>
        <button onClick={login}>Login</button>
        <button>Signup</button>
    </React.Fragment>
}
export default Guest;