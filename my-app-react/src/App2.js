import React from 'react'
import { Container } from './Container';
import { Routes, Route }  from 'react-router-dom';
import { Welcome } from './Welcome';
import { ClickCounter } from './ClickCounter';

import { ShowGithubUser } from './ShowGithubUser';

export function App2() {
  return (
    <div>
       <Container title={<h3>Welcome to my App!</h3>}>
        <div>App2: Learning React Router </div>
        <Routes>
            <Route path="/" element={<Welcome name="John" />}/>
            <Route path="/counter" element={<ClickCounter />} />
            <Route path= "users/:username" element={<ShowGithubUser />} />
        </Routes>
        </Container>
       
       

    </div>
    
  )
}
