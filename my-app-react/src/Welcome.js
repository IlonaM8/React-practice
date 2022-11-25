import React from 'react'
import { Age } from './Age'
import './index.css'



export class Welcome extends React.Component {
    render(){
        return (
        <div className='welcome'>
            {this.props.name === 'John' && this.props.age < 65 && this.props.age > 18 ? <p>Your age is: {this.props.age}</p> :  null}
            
            
            <p>Hello, {this.props.name}</p>    
            <Age age={16} />
           
        </div> 
        )
        
    }

}

//default Props

Welcome.defaultProps = { name: "User"}