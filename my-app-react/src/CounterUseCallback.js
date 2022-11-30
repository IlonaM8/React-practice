import React, {useCallback, useState} from 'react'


export function CounterUseCallback({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)


    //use callback returns a stabile version of the function that we are memoizing
   const handleIncrement =  useCallback(function handleIncrement(){
        setCounter((c) => c + 1)
    }, [])
// the dependency array is empty: so I'm creating this function the first time the compoent renders
//every time the compoent rerenders I'm going to keep the version I have cached the first time the component rendered
    
 //exption: setCounter function - never changes so you don't need to place them in the dependency array. 

  return (
    <div>
        <h2>Counter: {counter}</h2>
        <p>This counter is implemented with useCallback</p>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}


//Every time I increment the counter - the state value changes so react re-renders again
//so thandleIncrement fucntion is created all over again - so a new handleIncrement function is passed to the button every time I render this component
//if I want to have a stabile version of this function, that doesn't change from one render to the next - I can use the useCallback hook