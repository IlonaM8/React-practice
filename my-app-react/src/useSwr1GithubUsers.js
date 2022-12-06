import useSWR from 'swr'

//custom hook with swr
const fetcher = url => fetch(url).then(response => response.json())

export function useSwr1GithubUsers({username}) {

    
    const { data, error, mutate } = useSWR( username !== null ? `https://api.github.com/users/${username}`: null, fetcher)

    function handleRefresh(){
        mutate()
    }
  return {
    data, 
    error,
    onRefresh: handleRefresh
  }
}






// //here is the custom hook with use effect
//  function useGithubUser2(username){
//      //useState for data
//      const [data, setData] = useState(null)
 
//   //here is the async function
//   async function fetchGithubUser(username){
//          const response = await fetch(`https://api.github.com/users/${username}`)
//          const json = await response.json()
//          setData(json)
//  }
 
//   //useEffect with the call to the fetch function
//      useEffect(() => {
//          fetchGithubUser(username)
//      }, [username])

//      return { data }
// }