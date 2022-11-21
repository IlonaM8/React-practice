import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
  /* state outside the costructor */
    state = { 
       count: this.props.initialValue ?? 0
     }
     
     //Risposta: il constructor non è pià richiesto
    // constructor(props){
    //     super(props)
            

    // }



    render(){
        return(
            <div>
            <CounterDisplay count={this.state.count} /> 
            </div>
        )
    }


    componentDidMount(){
        setInterval(()=>{
            this.setState((state)=>{
                return{
                    count: state.count + (this.props.incrementBy ?? 1)
                }
            })

        },  this.props.timeout ?? 1000)

    }
}







//defalut
/*
Counter.defaultProps = {
    timeout : 1000,
    incrementBy : 1,
    initialValue : 0
} */

