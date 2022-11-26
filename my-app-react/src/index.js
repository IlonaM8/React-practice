import React from 'react'
// import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client';
import { App } from './App'
import './index.css' 



//const root = document.querySelector('#root');
// ReactDom.render(<App />, root);


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
