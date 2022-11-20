import React from "react";

export class Clock extends React.Component{

    //state outside the constructor
     /* state = { 
           date : new Date()
     } */


    constructor(props){
        super(props)

        this.state = { 
           date : new Date()
        }

        setInterval(()=>{
            this.setState({
                date: new Date(),
            })
        }, 1000)

    }
    render(){
        return(
            <div>
             <h1>The time is: {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

/* 
      state inside the constructor or outside the constructor
        
        
        */