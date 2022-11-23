import React from "react";

export class Login extends React.Component{
    state = {
        username: '',
        password: '', 
        remember: false,
        disabled: true
    }

    handleInputChange = (event) =>{
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked
        this.setState( {
            // [name]: value
            [name]: type === "checkbox" ? checked : value, 
            disabled: false
        })

    }

    //can use only an event handler 
    // handleCheckboxChange = (event) =>{
    //     const checked = event.target.checked
    //     const name = event.target.name

    //     this.setState({
    //         [name]: checked
    //     })
    // }


    //this is not working 
    onLogin = (username, password, remember) =>{
       console.log({
        username,
        password, 
        remember }
        )

    }


    //TO DO: When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state.
   // not working
    handleButtonClick = ()=>{
        this.props.onLogin(this.state.username, this.state.password, this.state.remember)
    }

   


    render(){
        return(
            <div>
                <h3>Here is the Login</h3>
                <div>
                    <button type="button" disabled={this.state.disabled} onClick={this.handleButtonClick}>Login</button>
                </div>
                <input 
                    name="username" 
                    value={this.state.username} 
                    onChange={this.handleInputChange} />
                <input 
                    name="password" 
                    type="password"  
                    value={this.state.password} 
                    onChange={this.handleInputChange}/>
                <input 
                    name="remember" 
                    type="checkbox" 
                    checked={this.state.remember}
                    onChange={this.handleInputChange}/> 
            </div>
        )
    }
}