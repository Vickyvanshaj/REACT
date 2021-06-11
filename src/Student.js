import React from 'react'
//Function

function Student(props){
    function handleClick(){
        console.log('Button clicked');
    }
    return (
        <div>
            <h1>Hello vanshaj</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
export default Student;