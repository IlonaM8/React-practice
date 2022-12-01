import { GithubUser2 } from './GithubUser2';
import React from 'react'
import { Link } from 'react-router-dom';

export function ShowGithubUser() {
  return (
    <div>
        <h3>ShowGithubUser: <GithubUser2 username="ilonam8" />
        </h3> 
        <Link to="/">Go to Homepage</Link>
        </div>
  )
}
