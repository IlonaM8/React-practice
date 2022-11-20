import React from 'react'
import { Clock } from './Clock';
import { Counter } from './Counter';
import { HelloWorld } from "./Hello";
import { Welcome } from './Welcome';


export class App extends React.Component{
    render(){
        return (
            <div>
                < HelloWorld />
                < Welcome name="John" />
                <Clock />
                < Counter initialValue={10} timeout={1000}  incrementBy={10}/>
                

            </div>
        )

    }
}


