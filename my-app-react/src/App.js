import React from 'react'
// import { Clock } from './Clock';
// import { Counter } from './Counter';
import { HelloWorld } from "./Hello";
import { Welcome } from './Welcome';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { InteractiveWelcome } from './InteractiveWelcome';
import { MyForm } from './MyForm';
import { Login } from './Login';
import { UncontrolledForm } from './UncontrolledForm';
import { UncontrolledLogin } from './UncontrolledLogin';
import { MyList } from './MyList';
import { MyTodos } from './MyTodos';
import { TodoList } from './TodoList';
import { TodoListpractice } from './TodoListpractice';


const todos = [
    {id: 1, title: "Buy Milk", completed: true}, 
    {id: 2, title: "Stare at the wall", completed: false}, 
    {id: 3, title: "Buy Bread", completed: true}, 
    {id: 4, title: "Sleep", completed: false}, 
]





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
            <div className='container'>
                < HelloWorld />
                < Welcome name="John" />
                {/* <Clock /> */}
                {/* <button onClick={this.myFun.bind(this)}>Click me</button> */}
                {/* < Counter  initialValue={10} timeout={1000}  incrementBy={this.state.incrementBy}/> */}
                <ClickCounter />
                <ClickTracker/>
                <InteractiveWelcome />
                <MyForm />
                <Login />
                <UncontrolledForm />
                <UncontrolledLogin />
                <MyList names={['Billy', 'Kate', 'Jane']} />
                <MyTodos todos={todos}  />
                <TodoList items={['Sleep', 'Eat', 'Walk the cat', 'Workout', 'Code', 'Study React']} />
                <TodoListpractice />
               

            </div>
        )

    }
}


