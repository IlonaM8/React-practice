import React , { createRef } from "react";
//import ref from react


export class UncontrolledForm extends React.Component{

    //create Ref as a property of my class
    _formRef = createRef() //createRef function is an object with a current attribute

        handleFormSubmit = (event) =>{
            event.preventDefault() 

            //access every input on the form - elements object to access to input in the form
            const username = event.target.elements.username.value
            const password = event.target.elements.password.value
            const remember = event.target.elements.remember.checked


            //console.log within an object
            console.log({
                username, 
                password,
                remember
            })
        }
    // event hadler for prefill - access the values in the input and change them
        handleFormPrefill = () =>{
            this._formRef.current.elements.username.value = 'Sean'
            this._formRef.current.elements.password.value = 'hello'
            this._formRef.current.elements.remember.checked = true

        }


 
     //after creating the ref - attach it to the form by passing it to a special prop called ref
     // a reference to the dom node that is being rendered by react to represent on the html page - is saved in the current key of the form ref object
     //we can use it to access the elements directly - es with prefill
    render(){
        return(
            <div>
                <h3>Uncontrolled Form</h3>
                
                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                    <input name="username" defaultValue="Jin" />
                    <input name="password"  type="password"/>
                    <input name="remember" type="checkbox" />
                
                    <button type="submit">Login</button> 
                    <button type="reset">reset</button>
                    <button type="button" onClick={this.handleFormPrefill}>Prefill</button>
                </form>
            </div>
        )
    }
}


/* Uncontrolled forms:
1. I do not need to keep track of the state
2. I can use the values contained within the html inputs directly
3. you don't render everytime the content of the input changes..

*/