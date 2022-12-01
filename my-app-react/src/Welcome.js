import React from 'react'
 import { useParams, Link } from 'react-router-dom'
import { Age } from './Age'


//the same component written as a function component:

export function Welcome(props){
    const { name = 'World' } = useParams() 
    return(
        <div>
            <h1>Hello, {name}</h1>
            <p>From react Router exercise</p>
            {props.name === 'John' && props.age < 65 && props.age > 18 ? <p>Your age is: {props.age}</p> :  null}
            {props.name && <h4>Hello, {props.name}!</h4>}
            {<Age age={26}/>}

        </div>
    )
}






// export class Welcome extends React.Component {
//     render(){
//         return (
//         <div className='welcome'>
//             {this.props.name === 'John' && this.props.age < 65 && this.props.age > 18 ? <p>Your age is: {this.props.age}</p> :  null}
            
            
//             <p>Hello, {this.props.name}</p>    
//             <Age age={16} />
           
//         </div> 
//         )
        
//     }

// }

//default Props
//Welcome.defaultProps = { name: "User"}