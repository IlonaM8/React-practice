import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useGitHubUsersSWR } from './useGitHubUsersSWR'

//here is my hook - you find it also in useGitHubUsersSWR
// import useSWR from 'swr'

// const fetcher = url => fetch(url).then(response => response.json()) 

// //making the custom hook
// export function useGitHubUsersSWR(){
//     const {data, error} = useSWR('https://api.github.com/users', fetcher) //the fetcher function is the second parameter of the useSWR hook

//     return {
//         users: data, 
//         error, isLoading: !data  && !error
//     }

// }


//here I have the component that consumes the custom hook useGitHubUsersSWR without knowing the login behind it
export default function GitHubUsersSWR() {
    //use here the hook
   const { users, error, isLoading, onRefresh} = useGitHubUsersSWR() 

    return (
    <div>
        <h3>GitHubUsersSWR </h3>
        <button onClick={onRefresh}>onRefresh</button>
        {isLoading && <h3>Loading.. </h3>}
        {error && <h3>There is an error</h3>}
        {users && (<ul>
             {users.map((user) => (
                <li key={user.login}><Link to={`/githubusers/${user.login}`}>{user.login}</Link>
                </li>
             ))}
            </ul>
            )}

            <Outlet />
        
    </div>
  )
}










// export default function GitHubUsersSWR() {
//     const {data, error} = useSWR('https://api.github.com/users', fetcher) //the fetcher function is the second parameter of the useSWR hook
//   return (
//     <div>
//         <h3>GitHubUsersSWR </h3>
//         {!data && !error && <h3>Loading.. </h3>}
//         {error && <h3>There is an error</h3>}
//         {data && !error && (<ul>
//              {data.map(user => (
//                 <li key={user.login}>{user.login}</li>
//              ))}
//             </ul>)}
        
//     </div>
//   )
// }

/*
the fetcher function takes an URL - is going to call fetch on the URL 
- as soon as the server response is going to call the callback of the promise with then() function
the then functtion is going to receve the response and is going to return the json from the response -
which is an asyncronous function: at the certain point is going to contain the data.
 */
