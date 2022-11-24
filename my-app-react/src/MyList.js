import React from 'react'

export class MyList extends React.Component{
    render(){
        const items = this.props.names.map((name, index) => <li key={name + index}>{name}</li>)
        return(
            <div>
                <ul>{items}</ul>
            </div>
        )
    }

}

