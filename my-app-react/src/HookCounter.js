import React, { useState} from 'react'

export function HookCounter({ initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)

    //we don't have methods here, here is a function inside 
    function handleCounterIncrement(){
        setCounter(c => c + 1) //use a callback to have the latest value when the value of the state dipends of the prev value of thw state

    }

    function handleCounterReset(){
        setCounter(initialValue) //we can pass the value directly because the next value doesn't depend of it

    }

    
    return(
        <div>
            <h3>Counter made with the hook useState: {counter} </h3>
            <button onClick={() => setCounter(c => c+ 1)}>Increment btn</button>
            <button onClick={handleCounterIncrement}>Another Increment btn</button>
            <button onClick={handleCounterReset}>Reset the counter</button>

        </div>
    )
}