
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((response) => response.json())


//making my custom hook with SWRConfig
export function useGithubUser(username){
  const { data, error, loading, mutate } =  useSWR('https://api.github.com/users/${username}', fetcher)

  function fetchGitHubUser(){
    mutate()

  }
  


    return { data, error, loading, onFetchUser: fetchGitHubUser}
            

}