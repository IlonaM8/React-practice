import { useEffect, useState } from 'react';
 

export function GithubUser({username}){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        fetch(`https://api.github.com/users/${username}`)
        .then((response) => {

            if(response.status !== 200){
                setError(new Error("User not found"))
            }
            return response.json()
        })
        .then((json) => {
            // console.log(json)
            // setLoading(false)
            setData(json)
        })
        .catch(error => {
            setError(error)

        })
        .finally(() =>{
            setLoading(false)

        })

    }, [username])

    return(
        <div>
            <h2>Here is the github user you asked for:</h2>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            {data &&<h1>{data.name}</h1>}
    </div>
    )
    

}