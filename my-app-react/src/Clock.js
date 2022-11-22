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

        

    }
    render(){
        return(
            <div>
             <h1>The time is: {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }

    componentDidMount(){
        const oneSecond = 1000;
        this.intervalID = setInterval(()=>{
            this.setState({
                date: new Date(),
            })
        }, oneSecond);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID)
    }
}

/* 
      state inside the constructor or outside the constructor
        
        
        */