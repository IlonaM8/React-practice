import React from "react";

export class ClickCounter extends React.Component{
         state = { 
         count: this.props.initialValue ?? 0
        }

    // arrow function to use the this keyword in the event handler
     myFunIncrementCount = () => {
        this.setState((state) => {
            return {
                count: state.count + this.props.incrementBy,
            }
        })
     }

    render(){
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.myFunIncrementCount}>Click here!</button>
            </div>
        )
    }
}

ClickCounter.defaultProps = {
    incrementBy : 1, 
    initialValue : 0

}



   







