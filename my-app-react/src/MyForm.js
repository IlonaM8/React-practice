import React from "react";

export class MyForm extends React.Component{
    //initialize the state with username property with an empty string
    state = { 
        username: '',
        password: '',
        remember: false
    }

    //event handeler for input
    handleInputChange = (event) => {
        const value = event.target.value  //receves an event, we can get the target (the html dom node) - we can access the value of the target.
        const name = event.target.name //extract the name from the target
        //extract also tyepe and checked
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            // [name]: value, //update username or password depending on the event

            [name]: type === 'checkbox' ? checked : value, //if the type is checkbox - use checked to update state - else use value to update state!
        })
    }

    //event handler for password - use only one event handler
    // handlePasswordChange = (event) =>{
    //     const value = event.target.value
    //     this.setState({
    //         password: value
    //     })
    // }


    //event handler for checkbox
    // handleCheckboxChange = (event) =>{
    //     const name = event.target.name
    //     const checked = event.target.checked

    //     this.setState( {
    //         [name]: checked
            
    //     })

    // }

    handleResetState = () => {
        this.setState({
            username: '', 
            password: '', 
            remember: false,
        })

    }

    handlePrefillForm = () =>{
        //date returned form a server
        this.setState({
            username: 'Billy',
            password: 'hello',
            remember: true,
        })
    }


    componentDidUpdate(){
        console.log(this.state) //print my current state in the console
    }

 
    render(){
        return(
            <div>
                <h1>My Form</h1>

                <div>
                    <button onClick={this.handleResetState}>Reset</button>
                    <button onClick={this.handlePrefillForm}>PrefillForm</button>
                </div>

                <div>
                        <input
                            name="username"
                            value={this.state.username} //associate the value of the state with the value in the input
                            onChange={this.handleInputChange} //is called everytime the user type in the input
                        />
                        <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange} //use only one event handler
                        />

                        <input 
                        name="remember"  // input checkbox
                        type="checkbox"
                        //checked prop expect true or false
                        checked={this.state.remember}
                        onChange={this.handleInputChange}/> 
                </div>
                
            </div>
        )
    }
}