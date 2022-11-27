import React, {useEffect, useState} from "react";

export function ClickCounter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)
    
   
// this function is called by the useEffect
 function onCounterChange(){
    console.log(`The counter is: ${counter}`)
 }

 //useEffect here 
    useEffect(() => {onCounterChange()}, [counter])


    function handleCounterClick(){
        setCounter(c => c + 1)

    }



    return(
        <div>
            
            <h2>This is made with the hook useState. Count: {counter}</h2>
            <button onClick={handleCounterClick}>Click here to increment</button>
        </div>
    )
}











// export class ClickCounter extends React.Component{
//          state = { 
//          count: this.props.initialValue ?? 0
//         }

//     // arrow function to use the this keyword in the event handler
//      myFunIncrementCount = () => {
//         this.setState((state) => {
//             return {
//                 count: state.count + this.props.incrementBy,
//             }
//         })
//      }

//     render(){
//         return (
//             <div>
//                 <h2>Count: {this.state.count}</h2>
//                 <button onClick={this.myFunIncrementCount}>Click here!</button>
//             </div>
//         )
//     }
// }

// ClickCounter.defaultProps = {
//     incrementBy : 1, 
//     initialValue : 0

// }



   







