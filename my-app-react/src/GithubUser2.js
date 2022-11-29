/**
 * Create a GithubUser component that fetches the data of the username passed as a prop, 
 * and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}.
 */
import { useGithubUser2 } from "./useGithubUser2"

//here is the function component
export function GithubUser2({username}){
    const { data, loading, error, onFetchUser } = useGithubUser2(username)

    //eventhandler: click the button show data
    function handleGetUserData(){
        //calling the onfetchuser function with the username
        onFetchUser(username)

    }

  //show a message with data.name if the data is truthy, same with error and loading.
    return(
        <div>
            <button onClick={handleGetUserData}>Load user data 2</button>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            {data && <h1>Here is the user called with custom hook: {data.name}</h1>}
        </div>
    )
}
