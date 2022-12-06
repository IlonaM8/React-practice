import React from 'react'
import { Container } from './Container';
import { Routes, Route, Link, useNavigate }  from 'react-router-dom';
import { Welcome } from './Welcome';
import { ClickCounter } from './ClickCounter';

import { ShowGithubUser } from './ShowGithubUser';
import { GithubUserList } from './GithubUserList';
import GithubUserss from './GithubUserss';
import Swr1GithubUsers from './Swr1GithubUsers';



export function App2() {
    //useNavigation hook - same API as the link component
    const navigate = useNavigate()

    function handlLobinButton(){
        navigate("/login")
    }
  return (
    <div>
       <Container title={<h3>Welcome to my App!</h3>}>
        <div>App2: Learning React Router </div>
        <Routes>
            <Route path="/" element={<Welcome name="John" />}/>
            <Route path="/counter" element={<ClickCounter />} />

            <Route path='users' element={<GithubUserList />}>
                  <Route index element={<p>Add a user and select it</p>} />
                  <Route path='username' element={<ShowGithubUser />} />
            </Route>
            {/* <Route path= "users/:username" element={<ShowGithubUser />} /> */}
            <Route path="*" element={<div><p>Page Not Found</p>
                               <Link to="/">Go Home!</Link>
                               </div>} 
                 />
            <Route path='githubusers' element={<GithubUserss />}></Route>     
        </Routes>

          <ul>
            <li><Link to="/">Go to Welcome</Link></li>
            <li><Link to="/counter">Go to Couner</Link></li>
            <li><Link to="users/:username">Go to Users Page</Link></li>
            <li><Link to="githubusers">Go to GithubUsers Page</Link></li>
          </ul>
          <button onClick={handlLobinButton}>Go to login</button>

          <Swr1GithubUsers username="ilonam8" />


         
          

        </Container>
       
       

    </div>
    
  )
}
