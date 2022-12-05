import{ useRef } from 'react'

export  function CarDetails() {
    //use ref here
    const myRef = useRef()

    
       let initialData = {
            model: "BF-06",
            year: 4045,
            color: "Green Spring"
        }


        

    function handleInputChange(){
         initialData = {
            model: "",
            year: "",
            color: ""
        }
        myRef.current.reset()
    }

   

   

   


  return (
    <div>
        <h4>CarDetails</h4>
        <form onChange={handleInputChange} ref={myRef}>
            <input name='model' defaultValue={initialData.model} ></input>
            <input name='year' defaultValue={initialData.year}></input>
            <input name='color' defaultValue={initialData.color}></input>
        </form>
    </div>
  )
}
