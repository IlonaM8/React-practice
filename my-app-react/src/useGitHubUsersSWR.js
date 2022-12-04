
import useSWR from 'swr'


//here I have my custom hook that takes here of the logic of downloading the users from github server

const fetcher = url => fetch(url).then(response => response.json()) 

//making the custom hook
export function useGitHubUsersSWR(){
    const {data, error, mutate} = useSWR('https://api.github.com/users', fetcher) //the fetcher function is the second parameter of the useSWR hook

    function handlerefreshUsers(){
        mutate()  //mutate function we're getting from the useSWR hook - is going to trigger a new fetch request

    }
    return {
        users: data, 
        error, isLoading: !data  && !error,
        onRefresh: handlerefreshUsers,
    }

}

