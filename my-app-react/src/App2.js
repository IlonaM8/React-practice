import React from 'react'
import { Container } from './Container';
import { Routes, Route }  from 'react-router-dom';
import { Welcome } from './Welcome';
import { Counter1 } from './Counter1';
import { ClickCounter } from './ClickCounter';

export function App2() {
  return (
    <div>
       <Container title={<h3>Welcome to my App!</h3>}>
        <div>App2: Learning React Router </div>
        <Routes>
            <Route path="/" element={<Welcome name="John" />}/>
            <Route path='/counter' element={<ClickCounter />} />
        </Routes>
        </Container>
       
       

    </div>
    
  )
}
