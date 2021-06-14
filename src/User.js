import React from 'react'
const User=(props)=>{
    const logout=()=>{
        const setLog=props.setLogfn;
        setLog(false);
    }
    return <React.Fragment>
        <h1>Welcome Vanshaj</h1>
        <button onClick={logout}>Logout</button>
    </React.Fragment>
}
export default User;