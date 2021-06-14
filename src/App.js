import React,{useState} from 'react';
import User from './User';
import Guest from './Guest';
const App=()=>{
    const [isLoggedIn,setLog]=useState(true);
    if(isLoggedIn)
    return <User setLogfn={setLog}/>
    else
    return <Guest setLogfn={setLog}/>
   
}
export default App;