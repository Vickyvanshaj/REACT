import React from 'react'
import { MyContext } from './App'
import {Consumer} from './Context.js'
const Guest=()=>{
    return (
        <div>
            <h2>Guest Component</h2>
           <Consumer>
               {
                   (data)=>{
                     return <React.Fragment>  <h4>{data.data.roll}</h4>
                       <button onClick={data.handleClick}>Change</button>
                       </React.Fragment>
                   }
               }
           </Consumer>
        </div>
    )
}
export default Guest;