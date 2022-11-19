import React from 'react'
import { HelloWorld } from "./Hello";
import { Welcome } from './Welcome';

export class App extends React.Component{
    render(){
        return (
            <div>
                < HelloWorld />
                < Welcome component={<p>Ciao</p>} />
            </div>
        )

    }
}


