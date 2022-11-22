import React from "react";

export class ClickTracker extends React.Component{
    state = {
        button: '',
    }
    
    buttonClick = (event) => {
        this.setState({
            button: event.target.innerHTML,
        })

        // console.log(
        //    event.target.name, 
        //     event.button,
        //     event.currentTarget
        // ) 
   
    }

    render(){
        return( 
            <div>
                <h1>You clicked: {this.state.button}</h1>
                <button name="firstButton" onClick={this.buttonClick}>Button 1</button>
                <button name="secondButton" onClick={this.buttonClick}>Button 2</button>
                <button name="thirdButton" onClick={this.buttonClick}>Button 3</button>
            </div>
        )
    }
}