// import React, {useMemo} from 'react'

import { useMemo } from "react";

    //my list of objects
    const objectList = [
        {name: 'Harry', id: 1, age: 20 },
        {name: 'David', id: 2, age: 16 },
        {name: 'Jhon', id: 3, age: 17 },
        {name: 'Sharon', id: 4, age: 32},
        {name: 'Jimmy', id: 5, age: 41}
    ]

export function FilteredList() {
    //use memo here
    const resultMemo = useMemo(() => {
        return filtermyObj(objectList)
    }, [])

  return (
    <div>
        <h3>Hello, display here useMemo: {resultMemo}</h3>
        {/* {filteredObj.map((person) => {
            return(
                <div key={person.id}>
                    <h4>Name: {person.name}, Age: {person.age}</h4>
                </div>
            );
        })} */}

    </div>
  )
}


//function to filter my obj
function filtermyObj(objectList){
    const filteredObj = objectList.filter(itemObj => {
        return itemObj.age > 18;
     });

     const finalResult = filteredObj.map((person) => {
        return (
            <div key={person.id}>
                <h4>Name: {person.name}, Age: {person.age}</h4>
            </div>
        )
    })

    return finalResult

}
