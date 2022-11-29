
import { useCounter } from './useCounter';


//this is my component that uses the Counter logic
export function CustomHookCounter({ initialValue = 0}){
    //remember: this is an object - which i'm destructuring and extracting the value of the counter ect..
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    return(
        <div>
            <h3>Counter made with the custom hook: {counter} </h3>
            <button onClick={onIncrement}>Increment btn</button>
            <button onClick={onDecrement}>Decrement btn</button>
            <button onClick={onReset}>Reset the counter</button>

        </div>
    )
}

