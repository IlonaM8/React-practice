import { useGithubUserss } from "./useGithubUserss"


//this is my function component - the logic is in useGithubUserss
export default function GithubUserss() { 

    //my component is calling the hook
    const { users, error, isLoading } = useGithubUserss()

  return (
    <div>
        <h4>GithubUsers with SWR </h4>
        {isLoading && <h4>Loading.. </h4>}
        {error && <h4>It's an error, we will fix it soon</h4>}
        {users && <ul>
            {users.map(user =>(
                <li key={user.login}>{user.login}</li>
            ))}</ul>}

    </div>
  )
}
