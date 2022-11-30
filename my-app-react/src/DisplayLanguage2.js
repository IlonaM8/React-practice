import { useContext} from 'react'

import { LanguageContext } from './LanguageContext'


const translation = {
    en: {
        "my_title": "Welcome! How are you?"
    }, 
    it: {
        "my_title": "Benvenuto! Come stai?"
    },
    no: {
        "my_title": "Velkommen! Hvordan har du det? "
    }

}



//we can avoid using the consumer and we can use the useContext hook to access the value of a contex that we're passing to the useContext hook as the parameter
export function DisplayLanguage2() {

    const language = useContext(LanguageContext) //the useContext it returning the value of the context that we're saving in a variabile of our choice:language
    
    return (
      <div>
          <h3>Current Language is: {translation[language]["my_title"]}</h3>
      </div>
    )
  }









//this is mix presentation logic and applocation logic
// export  function DisplayLanguage2() {
//   return (
//     <div>
//         <LanguageContext.Consumer>
//             {language =>(
//                 <h3>Current Language: {language}</h3>
//             )}
//         </LanguageContext.Consumer>
       
//     </div>
//   )
// }
