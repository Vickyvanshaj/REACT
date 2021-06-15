import React,{useState} from 'react'

const App=()=>{
    const [value,setValue]=useState("Vanshaj")
  let handleChange=(e)=>{
        console.log(e.target.value)
        setValue(e.target.value.toUpperCase())

        
    }
    return (
        <div>
            <form>
                <h2>Controlled by react</h2>
                <input type="text" value={value} onChange={handleChange}/> 
                {/*if you use value="vanshaj" here,then this becomes readonly.ou can use defaultValue or you can also use onChange method */}
            </form>
        </div>
    )
}
export default App;