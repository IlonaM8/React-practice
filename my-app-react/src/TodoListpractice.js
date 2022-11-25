import React from 'react'

export class TodoListpractice extends React.Component{
    state = {
        items: ['Sleep', 'Eat', 'Walk the cat', 'Workout', 'Code', 'Study React']
    }


//deleate a specific item form the list
    handleDelete = (index) =>{
        this.setState({
            items: this.state.items.filter(function(e, i){
                return i !== index;
            })
        })
    }


    render(){
        const items = this.state.items.map((item, index )=> <li key={index}>{item}<button onClick={this.handleDelete.bind(this, index)}>Delete</button></li>)
        return(
            <div>
                <h1>Hello there, this is my TodoList for List-06</h1>
                <ul>{items}</ul>
            </div>
        )
    }
}










