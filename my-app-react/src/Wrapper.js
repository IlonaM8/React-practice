import React from "react";

export class Wrapper extends React.Component{

    /** START: this is everything we're going to share with counter 1 and counter 2 components */
    state = {
        count: 0
    };

    incCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

     /** END: this is everything we're going to share with counter 1 and counter 2 components */

    render(){
        return(
            <div>
                <p>This counter is also made with Render props</p>
               {this.props.render(this.state.count, this.incCount)}
            </div>
        )
    }
}

//another way to export
//export default Wrapper;