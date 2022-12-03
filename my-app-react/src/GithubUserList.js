/**
 * Create a GithubUserList component that maintains an array of usernames, 
 * showing a GithubUser component for each username entered. 
 * The usernames should be added to the array using an input field and a button.
 */

import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom'
import { GithubUser2 } from './GithubUser2';



export function GithubUserList(){
    //usestate of input
    const [username, setUsername] = useState('')

    //use state with an empty array
    const [users, setUsers] = useState([])

     //useState per data, error e loading
     const [data, setData] = useState(null)
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState(null)


   

    //here is the input field
    const handleUsername = (event) => {
        const value = event.target.value
        setUsername(value)

        //here is the async function
        // async function fetchGithubUser(username){
        //         setLoading(true)
        //         setError(null)

        //     try{
        //         const response = await fetch(`https://api.github.com/users/${username}`)
        //         const json = await response.json()
        //         setData(json)
        //     }catch(error){
        //         setError(error)
        //         setData(null)
        //     } finally{
        //         setLoading(false)
        //     }
            
        // }

    }
 
    //add users from input
    const handleAddUsers = () =>{
        setUsers([...users], {
            username
        })


        setUsers([...users, {
            id: users.length, //how to find the id 
            name: users.username //where do I get the users from?
        }])
    }


    return(
        <div>
            
            <h4>Here is a list of github Users, you can add more by using the input field below</h4>
            {/* <h3>{<GithubUser2 username="ilonam8" /> }</h3> */}
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.name}</li>)
                }
            </ul>
            <input name='username' value={username} onChange={handleUsername}></input>
            <button onClick={handleAddUsers}>Add users</button>
            
            <ul>
            <li><Link to="/users/1">User 1</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}