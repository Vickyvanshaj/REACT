import React from 'react'
import { MyContext } from './App'
const Guest=()=>{
    return (
        <div>
            <h2>Guest Component</h2>
           <MyContext.Consumer>
               {
                   (data)=>{
                     return <React.Fragment>  <h4>{data.data.roll}</h4>
                       <button onClick={data.handleClick}>Change</button>
                       </React.Fragment>
                   }
               }
           </MyContext.Consumer>
        </div>
    )
}
export default Guest;