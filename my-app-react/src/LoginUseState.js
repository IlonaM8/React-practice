
import React, { useState} from 'react';


export function LoginUseState(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)


 //function for onChange di username
 function handleUsernameChange(event){
    const value = event.target.value
    setUsername(value)
 }
//function for onChange di password
function handlePassChange(event){
    const value = event.target.value
    setPassword(value)
}

//function for onChange di remember
function handleRememberChange(event){
    const value = event.target.value
    setRemember(value)
}

//function on Login
function onLogin(){
    console.log({username, password, remember});

}

    return(
        <div>
            <h3>Here is the Login as a function Component</h3>
            
            <button 
                   type='button' 
                   disabled={!username || !password}
                   onClick={onLogin}>Login
            </button>
            
         <input 
            name='username' 
            value={username} 
            onChange={handleUsernameChange}>
         </input>
         <input 
             name='password' 
             value={password} 
             type="password"
             onChange={handlePassChange}>
         </input>
         <input 
            name='remember' 
            value={remember} 
            type="checkbox"
            onChange={handleRememberChange}>
         </input>
        </div>
    )
}