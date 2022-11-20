import React from 'react'
import { Age  } from './Age'


export class Welcome extends React.Component {
    render(){
        return (
        <div>
            <p>Hello, {this.props.name}</p>  
            <Age age={25} />  
        </div> 
        )
        
    }

}

//default props
Welcome.defaultProps = { name : 'User'}