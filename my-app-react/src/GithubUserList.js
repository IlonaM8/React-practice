import React, { useState } from 'react';
import { GithubUser } from './GithubUser';



export function GithubUserList(){
    const [data, setData] = useState({
        inputData: '',
        usernames: [],
      });


    //here is the input field
    const handleInput = (event) => {
        event.preventDefault();
        setData((data) => {
          return {
            inputData: event.target.value,
            usernames: [...data.usernames],
          };
        });
    }
 
    //add users from input
    const handleAddUsers = (event) =>{
        event.preventDefault();

        setData((data) => {
          return {
            inputData: '',
            usernames: [...data.usernames, data.inputData],
          };
        });
    }


    return(
        <div>
            
            <h4>Search for a Github user by using the input field below</h4>
           
            <ul>
                {data.usernames.map((username, index) => (
                <li key={index}>
                    <GithubUser username={username} />
                </li>
                ))}
             </ul>
            <input value={data.inputData} onChange={handleInput}></input>
            <button onClick={handleAddUsers}>Add user</button>
        </div>
    )
}