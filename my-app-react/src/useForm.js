import { useState} from 'react'


export function useForm(){
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    
    function handleInputChange(event){
        const { name,type, value, checked } = event.target
        //we want to keep the prev value and not replace it - call the callback with the current value
        //i'm merging the two objects
        setData((data) => {
            return{
                ...data, 
                [name]: type === 'checkox' ? checked : value
                
            }
            
        })
 
    }

    return {
        data: data, 
        inputChange: handleInputChange
    }

}