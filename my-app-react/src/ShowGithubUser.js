import { GithubUser } from './GithubUser';
import React from 'react'
import { Link, useParams } from 'react-router-dom';


export function ShowGithubUser() {
  const {username} = useParams();

  return (
    <div>
        <h3>ShowGithubUser: <GithubUser username="ilonam8" />
        </h3> 
        <Link to="/">Go to Homepage</Link>
        </div>
  )
}
