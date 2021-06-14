import React from 'react'
import User from './User'
const App=(props)=>{
    const arr=props.numbers;
    const newarr=arr.map((num)=>{
        return <User key={num} value={num}/>
    });
    //key is not passed as props//will give error in console
    return <React.Fragment>
            <ul>{newarr}</ul>
    </React.Fragment>
}
export default App;
