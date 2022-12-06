
import useSWR from 'swr'



const fetcher = url  => fetch(url).then(response => response.json())

//the custom hook with swr
export function useGithubUserss(){
  const {data, error} = useSWR(`https://api.github.com/users`, fetcher)

  return {
    users: data, 
    error, 
    isLoading : !data && !error

  }
}
