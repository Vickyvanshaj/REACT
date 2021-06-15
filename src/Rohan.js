import React,{useState} from 'react'

const Rohan=()=>{
    const [gunShots,setShots]=useState(0)
    const handleOver=(e)=>{
        setShots(gunShots+1)
    }
    return (
        <div>
            <h1 onMouseOver={handleOver}>Rohan gunshots : {gunShots}</h1>
        </div>
    )
}
export default Rohan;