import React, { useState } from 'react'

function App(){
    const [name,setName]=useState("Rahul");
    const [roll,setRoll]=useState(101);
    //you cant use setName here..it will go in the infinte loop. rather use inside an event handler

    const handleClick = () =>{
        setName("Vanshaj");
        setRoll('188');
    }
    return <React.Fragment>
        <h1> Hello {name}</h1>
        <p>Your roll is {roll}</p>
        <button onClick={handleClick}>Change</button>
    </React.Fragment>
}
export default App;