/**
 * Create a GithubUser component that fetches the data of the username passed as a prop, 
 * and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}.
 */
import { useGithubUser2 } from "./useGithubUser2"

//here is the function component
export function GithubUser2({username}){
    const { data } = useGithubUser2(username)

  //show a message with data.name if the data is truthy, same with error and loading.
    return(
        <div>
            {data && <h1>Here is the user called with custom hook: {data.name}</h1>}
        </div>
    )
}
