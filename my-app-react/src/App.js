import React from 'react'
import { HelloWorld } from "./Hello";
import { Welcome } from './Welcome';


export class App extends React.Component{
    render(){
        const strongTag = <strong>Sean</strong>
        return (
            <div>
                < HelloWorld />
                < Welcome name={<strong>Sean</strong>} age="200"/>
                < Welcome component={<p>Ciao</p>} name={strongTag} age="200"/> 
                
            </div>
        )

    }
}


