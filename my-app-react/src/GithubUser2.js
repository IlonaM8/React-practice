/**
 * Create a GithubUser component that fetches the data of the username passed as a prop, 
 * and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}.
 */

import React, {useEffect, useState} from 'react';


//here is the function component
export function GithubUser2({username}){
     //useState per data, error e loading
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

  
 //here is the async function
 async function fetchGithubUser(username){
        setLoading(true)
        setError(null)

    try{
        const response = await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()
        setData(json)
    }catch(error){
        setError(error)
        setData(null)
    } finally{
        setLoading(false)
    }
    
}

 //useEffect with the call to the fetch function
    useEffect(() =>{
        fetchGithubUser(username)
    }, [username])



  //show a message with data.name if the data is truthy, same with error and loading.
    return(
        <div>
            {loading && <h1>Loading...</h1>} 
            {error && <h1>There has been an error.</h1>}
            {data && <h1>Here is the user: {data.name}</h1>}
        </div>
    )
}
