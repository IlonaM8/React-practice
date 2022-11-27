import { useState } from "react"


export function HookLogin(){
    //option one
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [remember, setRemember] = useState(false)

    //option two
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    
    function handleInputChange(event){
        const { name,type, value, checked } = event.target
        //we want to keep the prev value and not replace it - call the callback with the current value
        //i'm merging the two objects
        setData((data) => {
            return{
                ...data, 
                [name]: type === 'checkox' ? checked : value
                
            }
            
        })

    }



    return(
        <div>
            <button disabled={!data.username || !data.password}>Login</button>
            <input onChange={handleInputChange} name="username" value={data.username}></input>
            <input onChange={handleInputChange} name="password" value={data.password} type="password"></input>
            <input onChange={handleInputChange} name="remember" type="checkbox" checked={data.remember}></input>
        </div>
    )

}