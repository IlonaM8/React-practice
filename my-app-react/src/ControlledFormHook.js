
import { useForm } from "./useForm" 


export function ControlledFormHook(){
   // call here the custom hook useForm
 const { data, inputChange} = useForm()




    return(
        <div>
            <button disabled={!data.username || !data.password}>Login</button>
            <input onChange={inputChange} name="username" value={data.username}></input>
            <input onChange={inputChange} name="password" value={data.password} type="password"></input>
            <input onChange={inputChange} name="remember" type="checkbox" checked={data.remember}></input>
        </div>
    )

}