import React from 'react'

const App=()=>{
    const textc={
        color:'blue'
    }
    const texts={
        fontSize:'80px'
    }
    return <React.Fragment>
        <h1 style={{...textc,...texts}}>hello app</h1>
        {/* <h1 style={{ ...textc, ...{ fontSize: "200px" } }}>Hello App</h1> */}
    </React.Fragment>
}
export default App;