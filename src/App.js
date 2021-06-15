import React,{useState} from 'react'

const App=()=>{
    const [value,setValue]=useState("hello there how are you ?");
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
  return (
      <div>
          <form>
              <textarea value={value} onChange={handleChange}>

              </textarea>
          </form>
      </div>
  )
}
export default App;