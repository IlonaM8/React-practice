import React from 'react'

export class Welcome extends React.Component {
    render(){
        return (
        <div>
            <p>Hello, {this.props.name}</p>
            {this.props.component}
        </div> 
        )
        
    }

}

//default props
Welcome.defaultProps = {name: "User"}



