import React, { useEffect, useState } from "react";
// import { GithubUser2 } from "./GithubUser2";
import { GithubUserUseEffect4 } from "./GithubUserUseEffect4";

// import { GithubUserUseEffect4 } from "./GithubUserUseEffect4";



export function GithubUserList2() {
    const [user, setUser] = useState('');
    const [input, setInput] = useState('');
    const [username, setUsername] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value
    setInput(value);
  };

  const usersArray = [];
  const handleSubmit = () => {
    usersArray.push(input);
    setUser(usersArray);
    setInput('');
  };

  useEffect(() => {
    if (user !== '') {
        usersArray.push(user);
      setUsername(username.concat(usersArray));
    }
  }, [user, username]);

  const list = username.map((user) => {
      return (
        <div>
            <GithubUserUseEffect4 username={user} />
        </div>
        
      );
    
  });

  return (
    <div>
    <input type="text" onChange={handleChange} value={input}></input>
      <button onClick={handleSubmit}>Search</button>
      <div>{list}</div>
    </div>
      
   
  );
}