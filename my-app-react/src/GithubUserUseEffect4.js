import React, {useEffect, useState} from "react";

export function GithubUserUseEffect4({username}) {
    // const [user, setUser] = useState()


    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/${username}`)
    //     .then((response) => response.json)
    //     .then((fetchuser) => setUser(fetchuser))
    // }, [username])


        //useState per data
        const [data, setData] = useState(null)
       
      
     //here is the async function
     async function fetchGithubUser(username){
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            setData(json)
    
        }
    
     //useEffect with the call to the fetch function
        useEffect(() =>{
            fetchGithubUser(username)
        }, [username])
    


    return (
        <div>
            <h5>Username: {data}</h5>
        </div>
    )

} 