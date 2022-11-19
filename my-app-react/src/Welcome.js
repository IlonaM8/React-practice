import React from 'react'

export class Welcome extends React.Component {
    // static defaultProps = {
    //     name: "User",
    // };

    render(){
        return(
            <div>
                <p>Hello, {this.props.name}</p>
                 {this.props.component}
            </div>

            
        )
        
        
    }

}

// standard 
Welcome.defaultProps = {name: "User"}
