import React, { useEffect, useState} from 'react'

export function HookCounter({ initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)

    //call here the hook useEffect
// this will run only when the componet had mounter: only one time.
    useEffect(()=>{
        console.log(`The counter has mounted`)

        return () => {
            console.log('I am about to be unmounted') //this is the cleanup function
        }
    }, [])

//this will run when the component had mounted and also when the value of counter changes
// useEffect(() =>{}, []) parameter one: side effect function, parameter two: the dependency array
    useEffect(()=>{
        console.log(`The counter is now ${counter}`) //this will run everytime the counter value is changing
        //if you want to include also the initial value ${initialValue}, you must include it also inside the array

        return () =>{
            console.log(`The counter was ${counter}`) //this is the cleanup function
        }
    }, [counter]) 

    //
    useEffect(()=>{
        console.log('I have rendered')
    })

    //we don't have methods here, here is a function inside 
    function handleCounterIncrement(){
        setCounter(c => c + 1) //use a callback to have the latest value when the value of the state dipends of the prev value of thw state

    }

    function handleCounterDecrement(){
        setCounter(c => c - 1) //use a callback to have the latest value when the value of the state dipends of the prev value of thw state

    }

    function handleCounterReset(){
        setCounter(initialValue) //we can pass the value directly because the next value doesn't depend of it

    }

    
    return(
        <div>
            <h3>Counter made with the hook useState: {counter} </h3>
            <button onClick={handleCounterIncrement}>Increment btn</button>
            <button onClick={handleCounterDecrement}>Decrement btn</button>
            <button onClick={handleCounterReset}>Reset the counter</button>

        </div>
    )
}