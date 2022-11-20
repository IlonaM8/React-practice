import React from 'react'
import { Age } from './Age'


export class Welcome extends React.Component {
    render(){
     
      
        return (
        <div>
            <p>Hello, {this.props.name}</p> 
             {this.props.age 
                   ? <p>Your age is: {this.props.age}</p> 
                   : <p></p>}
        <Age age={22} />
        </div> 
        )
        
    }

}

//default Props
Welcome.defaultProps = { name : "User"}

