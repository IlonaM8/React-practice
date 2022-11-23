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


     onLogin = () =>{
        console.log(this.state) 
    }

    render(){
        return(
            <div>
                <h3>Here is the Login</h3>
                <div>
                    <button type="button" disabled={this.state.disabled} onClick={this.onLogin}>Login</button>
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