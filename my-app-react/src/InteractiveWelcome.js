import React from "react";
import { Welcome } from "./Welcome";


export class InteractiveWelcome extends React.Component{
    state = { 
        username: ''
    }

    //event handeler
    handleInputChange= (event) => {
        const value = event.target.value  
        this.setState({
            username: value
        })
    }
    render(){
        return(
            <div>
                <h1>Welcome: {this.state.username}</h1>
               
                <input
                    name="username"
                    value={this.state.username} 
                    onChange={this.handleInputChange} 
                />
                 <Welcome name={this.state.username}/>
               
            </div>
        )
    }
}