import React from "react";

export class MouseTracker extends React.Component{
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
            <div onMouseMove={this.handlerMouseMove}>{this.props.render(this.state.position)}

            </div>
        )
    }
}