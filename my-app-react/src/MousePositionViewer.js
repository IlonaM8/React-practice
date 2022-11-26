import React from "react";
import { WithMousePosition } from "./WithMousePosition";

//this component doesn't know how is the position calculated but knows that is going to receve the position as a prop.
// problematic: it doesn't work!!!
export class MousePositionViewer extends React.Component{
    render(){

        const [x, y] = this.props.position
        return(
            <div style={{height: 300, width: 300, backgroundColor: 'pink'}} onMouseMove={this.handlerMouseMove}>
                 The current position is: {x}, {y}
            </div>
        )
    }
}

//create a new component 
export default WithMousePosition(MousePositionViewer)