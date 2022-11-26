//Write a Sum function component that receives a numbers prop (expected to be an array of numbers) and renders the sum of all numbers in the array within a h1 tag.

import React from 'react'

export function Sum(props){
    //const sum = numbers.reduce((result, number)=> result + number);
    return(
        <div>
               
            <h1>Here is the sum of all numbers in the array "numbers" you passed as prop:
                 {props.numbers.reduce((result, number)=> result + number)}</h1>
        </div>
    ) 
}

