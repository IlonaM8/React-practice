import React from 'react'
import { Clock } from './Clock';
import { Counter } from './Counter';
import { HelloWorld } from "./Hello";
import { Welcome } from './Welcome';
import { ClickCounter } from './ClickCounter';



export class App extends React.Component{
   constructor(props){
    super(props)

    this.state = {
        incrementBy: 10,
    }
   }
   
   //esercizio 1:1
   myFun(){
    console.log('ciao', this)
    this.setState({ incrementBy: this.state.incrementBy + 1})
    
   }


    render(){
        return (
            <div>
                < HelloWorld />
                < Welcome name="John" />
                <Clock />
                <button onClick={this.myFun.bind(this)}>Click me</button>
                < Counter  initialValue={10} timeout={1000}  incrementBy={this.state.incrementBy}/>
                <ClickCounter />
               

            </div>
        )

    }
}


