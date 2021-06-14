import React,{useState} from 'react'

const App=()=>{
    const [users,setUsers]=useState([
        {id:101,name:"Rahul",password:"2223qqa"},
        {id:102,name:"Vicky",password:"qw211"},
        {id:103,name:"Ram",password:"dsw221"},
    ]);
    const [isLoggedIn,setLogged]=useState(true);
    
    return <React.Fragment>
        <ul>{users.map((elem)=>{
            return <li>{elem.id}-{elem.name}-{elem.password}</li>
        })}</ul>
    </React.Fragment>
}
export default App;