import React,{useState} from 'react';
import User from './User';
import Guest from './Guest';
const App=()=>{
    const [isLoggedIn,setLog]=useState(true);
    return <React.Fragment>
    {(isLoggedIn==true)?<User setLogfn={setLog}/>:<Guest setLogfn={setLog}/>}
    </React.Fragment>
   
}
export default App;