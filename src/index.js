import ReactDOM from 'react-dom'
import React from 'react'
import Student from './Student'
import App from './App'

ReactDOM.render(<App/>,document.getElementById('root'));
ReactDOM.render(<Student/>,document.getElementById('stu'));
ReactDOM.unmountComponentAtNode(document.getElementById('root'));