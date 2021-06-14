import React, { useState } from 'react'
import useCustomCounter from './Custom';

function  App() {
    const data=useCustomCounter();
    return (
        <React.Fragment>
            <h1>Count UP: {data.count}</h1>
            <button type="button" onClick={data.handleIncrement}></button>
        </React.Fragment>
    )
}
export default App;