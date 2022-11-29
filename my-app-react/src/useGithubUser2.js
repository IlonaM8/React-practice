
import {useEffect, useState} from 'react';


//here is the custom hook
export function useGithubUser2(username){
     //useState for data
     const [data, setData] = useState(null)
 
  //here is the async function
  async function fetchGithubUser(username){
         const response = await fetch(`https://api.github.com/users/${username}`)
         const json = await response.json()
         setData(json)
 }
 
  //useEffect with the call to the fetch function
     useEffect(() => {
         fetchGithubUser(username)
     }, [username])

     return { data }
}