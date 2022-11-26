import React, { Component } from 'react'

//Reusable logic through Higher Order Components
//A function thattakes a component as an argument and returns a new component.

export function WithMousePosition(component){
    return class extends React.Component{
        state = {
            position: [0, 0]
        } 
    
        handlerMouseMove = (event) =>{
            const x = event.clientX
            const y = event.clientY
    
            this.setState({
                position: [x, y]
            })
    
        }

        render(){
            return(
                <div onMouseMove={this.handlerMouseMove}>
                    <Component {...this.props} position={this.state.position} />
                </div>
                

            )
        }

    }
}





//How to transform this component in a HOC?
// export class MouseTracker extends React.Component{
//     state = {
//         position: [0, 0]
//     } 

//     handlerMouseMove = (event) =>{
//         const x = event.clientX
//         const y = event.clientY

//         this.setState({
//             position: [x, y]
//         })

//     }

//     render(){
//         const [x, y] = this.state.position
//         return(
//             <div style={{height: 300, width: 300, backgroundColor: 'pink'}} onMouseMove={this.handlerMouseMove}>
//                 The current position is {x}, {y}
//             </div>
//         )
//     }
// }