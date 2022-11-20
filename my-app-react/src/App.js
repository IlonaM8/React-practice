import React from 'react'
import { HelloWorld } from "./Hello";
import { Welcome } from './Welcome';
import { Age } from './Age'

export class App extends React.Component{
    render(){
        return (
            <div>
                < HelloWorld />
                < Welcome name="John" />
                < Age/>

            </div>
        )

    }
}


