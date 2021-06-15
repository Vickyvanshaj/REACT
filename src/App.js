import React,{useState} from 'react'

const App=()=>{
    const [values,setState]=useState({
        name:"vansh",
        password:"122"
    });
  
    const handleChange=(e)=>{
       setState({
           ...values,
           [e.target.name]:e.target.value,
           
       });
    }
   
    return (
        <div>
            <form>
                <label>
                    Name: <input type="text" value={values.name} name="name" onChange={handleChange}/>
                </label>
                <br/>
                <br/>
                <label>
                    Password:<input type="text" value={values.password} name="password" onChange={handleChange} />
                </label>
            </form>
        </div>  
    )
}
export default App;