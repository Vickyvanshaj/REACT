import React,{Component} from "react";
import pt from "prop-types";
//function based
// const Student = (props) =>{
//     return <React.Fragment>
//         <h1>Hello {props.name}</h1>
//         <h2>Your roll: {props.roll}</h2>
//     </React.Fragment>
// }
//class based
class Student extends Component{
    render()
    {
        return <React.Fragment>
            <h1>Hello {this.props.name}</h1>
        <h2>Your roll: {this.props.roll}</h2>
        <h2>Your age: {this.props.age}</h2>
        </React.Fragment>
    }
}
Student.propTypes={
    name:pt.string,
    roll:pt.number.isRequired,

}
Student.defaultProps={
    age:24
}
export default Student;
