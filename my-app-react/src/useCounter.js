
//exract the logic to use in other parts. The logic: initialiaze the counter, increment, decrement, reset
import { useCallback, useState } from 'react'

//here is the custom hook
 export function useCounter(initialValue = 0){
    const [ counter, setCounter] = useState(initialValue)

 //usecallback to save the result of the function in cache the first time our component renders
    const handleCounterIncrement = useCallback( function handleCounterIncrement(){
        setCounter(c => c + 1) 
    }, [])

    //another useCallback for Decrement fucntion
   const handleCounterDecrement = useCallback(function handleCounterDecrement(){
        setCounter(c => c - 1) 

    }, [])

    //another callback for reset function
   const handleCounterReset = useCallback(function handleCounterReset(){
        setCounter(initialValue) //in general every value passed here need to be placed in the dependency array
    }, [initialValue]) //if the initialValue changes the cache version should change - we must place it in the dependency array!


    return{
        counter: counter, 
        onIncrement: handleCounterIncrement, 
        onDecrement: handleCounterDecrement, 
        onReset: handleCounterReset
    }
}