import React from "react";

export class MyForm extends React.Component{
    //initialize the state with username property with an empty string
    state = { 
        username: '',
        password: ''
    }

    //event handeler for input
    handleInputChange = (event) => {
        const value = event.target.value  //receves an event, we can get the target (the html dom node) - we can access the value of the target.
        this.setState({
            username: value
        })
    }

    //event handler for password
    handlePasswordChange = (event) =>{
        const value = event.target.value
        this.setState({
            password: value
        })
    }


    render(){
        return(
            <div>
                <h1>My Form</h1>
                <input
                    name="username"
                    value={this.state.username} //associate the value of the state with the value in the input
                    onChange={this.handleInputChange} //is called everytime the user type in the input
                />
                <input
                 name="password"
                 type="password"
                 value={this.state.password}
                 onChange={this.handlePasswordChange}
                 />
            </div>
        )
    }
}