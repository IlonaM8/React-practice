import { useState } from 'react';

//making my custom hook
export function useGithubUser(){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    async function fetchGithubUser(username){
            setLoading(true)
            setError(null)

            try{
                const response = await fetch(`https://api.github.com/users/${username}`)
                const json = await response.json()

                if(response.status !== 200){
                    setError(new Error())
                }
                setData(json)
            }catch(error){
               setError(error)
               setData(null)
            }finally {
                setLoading(false)
            }
    }

    //I remove the useeffect so that the data is not loading automatically
    // useEffect(() =>{
    //  fetchGithubUser(username)
    //  }, [username])


     return { data, error, loading, onFetchUser: fetchGithubUser }
            

}