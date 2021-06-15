import React,{useState} from 'react'

const App=()=>{
    const [change,setChange]=useState(false)
    const btnStyle={
        color:'blue',
        backgroundColor:'orange'
    }
    const handleClick = ()=>{
        setChange(true)
    }
    if(change===true)
    {
        btnStyle.backgroundColor='red';
    }
    return <React.Fragment>
        <button style={btnStyle} onClick={handleClick}>Change</button>
    </React.Fragment>
}
export default App;