// here is the component that uses swr hook
import { useSwr1GithubUsers } from './useSwr1GithubUsers';


//this is my component that consumes a custom hook made with swr
export default function Swr1GithubUsers(username) {
    const { data, error, loading, onRefresh} = useSwr1GithubUsers(username);
  return (
    <div>

            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            {data &&<h1> This is called with SWR library: {data.name}</h1>}
            <button onClick={onRefresh}>Refresh data</button>
    </div>
  )
}













// import { useGithubUser } from './useGithubUser';


// //this is my component
// export function GithubAsync({username}){
//     const {data, error, loading } = useGithubUser(username)
    

    

//     return(
//         <div>
//             {loading && <h1>Loading...</h1>}
//             {error && <h1>There has been an error</h1>}
//             {data &&<h1> This is called with async await and with custom hook: {data.name}</h1>}
//     </div>
//     )
    

// }
