import React, { useState,useEffect } from 'react'
function  App() {
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(10);
    function handleIncrement() {
        setCount(count+1);
    }
    const handleDecrement =()=>{
        setCount1(count1-1);
    }
    //use effect is called when component is mounted,updated or unmounted
    useEffect(() => {
        
       console.log('useEffect called')
    },[count]);
   //now useeffect will only run if count state is invloved
    console.log('render')
    return (

        <React.Fragment>
            <h1>Cout Up:{count} </h1>
            <button type="button" onClick={handleIncrement}>Increment </button>

            <h1>Cout Down:{count1} </h1>
            <button type="button" onClick={handleDecrement}>Decrement </button>
        </React.Fragment>
    )
}
export default App;