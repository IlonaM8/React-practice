
//exract the logic to use in other parts. The logic: initialiaze the counter, increment, decrement, reset
import { useState } from 'react'

//here is the custom hook
 export function useCounter(initialValue = 0){
    const [ counter, setCounter] = useState(initialValue)


    //we don't have methods here, here is a function inside 
    function handleCounterIncrement(){
        setCounter(c => c + 1) //use a callback to have the latest value when the value of the state dipends of the prev value of the state

    }

    function handleCounterDecrement(){
        setCounter(c => c - 1) //use a callback to have the latest value when the value of the state dipends of the prev value of thw state

    }

    function handleCounterReset(){
        setCounter(initialValue) //we can pass the value directly because the next value doesn't depend of it

    }

    return{
        counter: counter, 
        onIncrement: handleCounterIncrement, 
        onDecrement: handleCounterDecrement, 
        onReset: handleCounterReset
    }
}