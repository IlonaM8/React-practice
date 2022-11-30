import { useEffect, useRef, useState } from 'react';
import { DisplayLanguage2 } from './DisplayLanguage2';

export default function WelcomeuseRef() {
    const [ name, setName ] = useState('World')
    const inputRef = useRef() //calling useref to make a reference
     //after making the inputref I can use useeffect - only when the componets mounts so with an empty array
    useEffect(() => {
        inputRef.current.focus() //calling the focus method on the reference contained in the input ref.
        //inputRef.current - because the reference is saved in the current property of the inputref object
 
    }, [])

    //taking the value form the input and using it to update the name shown in our component
    function handleNameChange(event){
        setName(event.target.value)
    }

   //inside the return we call the displaylanguage componenet - remember to put welcome inside the provider in APP

  return (
    <div>
      <DisplayLanguage2 /> 
        <h2>Welcome with useRef</h2>
        <p>Hello, {name}</p>
        <input ref={inputRef} value={name} onChange={handleNameChange}/> 
        </div>
  )
}

//pass inputRef to the ref prop of my input