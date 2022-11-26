import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {
        my_title: "Welcome! How are you?"
    }, 
    it: {
        my_title: "Benvenuto! Come stai?"
    },
    no: {
        my_title: "Velkommen! Hvordan har du det? "
    }

}

export class DisplayLanguage extends React.Component{
    render(){
        return(
            <div>
                <LanguageContext.Consumer>
                    {language => {
                        return <div><h1>{Strings[language].my_title}</h1></div>
                    }}
                </LanguageContext.Consumer>
                
            </div>
        )
    }
}


//we have to place the consumer component here 