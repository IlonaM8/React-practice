
import { useGithubUser } from './useGithubUser';


//this is my component
export function GithubAsync({username}){
    const {data, error, loading } = useGithubUser(username)
    

    

    return(
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            {data &&<h1> This is called with async await and with custom hook: {data.name}</h1>}
    </div>
    )
    

}