import{ useEffect, useRef } from 'react'

export  function CarDetails() {
    //use ref here
    useRef()

    
        initialData = {
            model: "BF-06",
            year: 3045,
            color: "Green Spring"
        },



    function handleInputChange(event){
        const name = event.target.name;
        const value = event.target.value;

    }

   





  return (
    <div>
        <h4>Car CarDetails</h4>
        <form onChange={handleInputChange}>
            <input name='model'></input>
            <input name='year'></input>
            <input name='color'></input>
        </form>
    </div>
  )
}
