import React from 'react'

import { Clock } from './Clock';
import { Counter } from './Counter';
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
import { Container } from './Container';
import { MouseTracker } from './MouseTracker';
import { Wrapper } from './Wrapper';
// import { EnhancedMousePositionViewer} from './MousePositionViewer';
import { Counter1 } from './Counter1';
import {Counter2 } from './Counter2';
import { DisplayLanguage } from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';
import { Sum } from './Sum';


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
        language: 'en'
    }
   }

   handleLanguageChange = (event) =>{
    this.setState({
        language: event.target.value
    })
   }
   
   //esercizio 1:1
   myFun(){
    console.log('ciao', this)
    this.setState({ incrementBy: this.state.incrementBy + 1})
    
   }


    render(){
        return (
            <div>
                    <Container title={<h1>Welcome to my first React App</h1>}>
                        < HelloWorld />
                        < Welcome name="John" />
                        <Clock />
                        <button onClick={this.myFun.bind(this)}>Click me</button>
                        < Counter  initialValue={10} timeout={1000}  incrementBy={this.state.incrementBy}/>
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
                        


                        <TodoListpractice render={(items, handleDelete)=>{
                            return(
                                <div>
                                    {items.map((item, index )=> <li key={index}>{item}<button onClick={handleDelete.bind(this, index)}>Delete</button></li>)} 
                                    
                                </div>
                            )
                        }}
                        />

                        <MouseTracker 
                            render={ position =>{
                                const [x, y] = position
                                return(
                                    <div><h3>Made with Render props</h3>
                                    The current position is: {x}, {y} </div>
                                )
                            }}

                        ></MouseTracker>

                        <Wrapper render={ (count, incCount)=> {
                                        return <Counter1 count={count} incCount={incCount} />

                                        }}
                        />


                        <Wrapper render={ (count, incCount) =>{
                                        return <Counter2 count={count} incCount={incCount}/>
                                        }}
                        />

                   <span>Here is the language selection: </span>
                    <select value={this.state.value} onChange={this.handleLanguageChange}>
                        <option value="en">English</option>
                        <option value="it">Italiano</option>
                        <option value="no">Norwegian</option>
                    </select>
                    <LanguageContext.Provider value={this.state.language}>
                         <DisplayLanguage />
                    </LanguageContext.Provider>
                     
                     
                     <Sum numbers={[1, 1, 1, 2, 4 ,2]} />
                   

                   

                    </Container>

                    


            </div>

            
        )

    }
}


