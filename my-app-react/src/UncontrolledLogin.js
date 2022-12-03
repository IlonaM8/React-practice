import React , { createRef } from "react";

export class UncontrolledLogin extends React.Component{

    _formRef = createRef()

 handleFormSubmit =(event) =>{
    event.preventDefault()

            const username = event.target.elements.username.value
            const password = event.target.elements.password.value
            const remember = event.target.elements.remember.checked

    console.log({
        username, 
        password,
        remember
    })
 } 

 handleFormPrefill = () =>{
    this._formRef.current.elements.username.value = 'Sean'
    this._formRef.current.elements.password.value = 'hello'
    this._formRef.current.elements.remember.checked = true

}




    render(){
        return(
            <div>
                <h2>Here is the Uncontrolled Form for exercise forms-05</h2>
                <form ref={this._formRef}  onSubmit={this.handleFormSubmit}>
                    <input name="username" defaultValue="User" autoFocus/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox" />

                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                    <button type="button" onClick={this.handleFormPrefill}>Prefill</button>


                </form>
            </div>
        )
    }
}