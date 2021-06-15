import React,{useState} from 'react'
import User from  './User'
import Guest from './Guest';
export const MyContext=React.createContext();
const App=()=>{
    const [state,setState]=useState({
        name:"Rahul",
        roll:188
    });
    const handleClickContext=(e)=>{
        setState({roll:state.roll+1})
    }
    const contextValue={
        data:state,
        handleClick:handleClickContext,
    }
    return (
        <div>
            <MyContext.Provider value={contextValue}>
                <User/>
            </MyContext.Provider>

            {/* We need to make a hierarchy till guest from  app. Current hierarchy is App->User->Guest. Only then Guest will be able to access context else not */}
        </div>
    )
}
export default App;
