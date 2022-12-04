import {useParams} from 'react-router-dom'
import { useGithubUser } from './useGithubUser';


//this is my component
export function GithubAsync(){
    const {username} = useParams()
    const {data, error, loading, onFetchUser } = useGithubUser(username)
    

    function handleGetUserData(){
        onFetchUser()
    }

    return(
        <div>
            <button onClick={handleGetUserData}>Load user data 1</button>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            {data &&<h1> This is called with async await and with custom hook: {data.name}</h1>}
    </div>
    )
    

}