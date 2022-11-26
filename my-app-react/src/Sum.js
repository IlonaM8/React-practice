//What happens if the numbers prop of the Sum component is not set? How can you set a default value for this prop?

import React from 'react'

export function Sum({ numbers }){
    return(
        <div>
               
            <h1>Here is the sum of all numbers in the array "numbers":  
                 {numbers.reduce((result, number)=> result + number)}
            </h1>
        </div>
    ) 
}


Sum.defaultProps = {
    numbers: [ 1, 1, 1, 1, 1]
}