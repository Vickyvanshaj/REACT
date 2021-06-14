import React from 'react'

const App=(props)=>{
    // const arr=[10,20,30,40];
    // return <React.Fragment>
    //     <ul>
    //      {arr.map((num)=>{
    //         return <li>{num*4}</li>
    //      })}
    //     </ul>
    // </React.Fragment>
    const arr=props.numbers;
    const newarr=arr.map(num=>{
        return <li>{num*2}</li>
    });
    console.log(newarr); //an array of object
    return <React.Fragment>
        <ul>
            {newarr}
        </ul>
    </React.Fragment>
}
export default App