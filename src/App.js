import React,{useState} from 'react'

const App=()=>{
    const [users,setUsers]=useState([
        {id:101,name:"Rahul",password:"2223qqa"},
        {id:102,name:"Vicky",password:"qw211"},
        {id:103,name:"Ram",password:"dsw221"},
    ]);
    const [isLoggedIn,setLogged]=useState(true);
    
    return <React.Fragment>
        {users.map((elem)=>{
            return <h1 key={elem.id}>{elem.id}-{elem.name}-{elem.password}</h1>
        })}
    </React.Fragment>
}
export default App;