import React,{useState} from 'react'

const Misba=()=>{
    const [gunShots,setShots]=useState(0)
    const handleOver=(e)=>{
        setShots(gunShots+1)
    }
    return (
        <div>
            <h1 onMouseOver={handleOver}>Misba gunshots : {gunShots}</h1>
        </div>
    )
}
export default Misba;