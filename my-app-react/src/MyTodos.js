import React from "react";

export class MyTodos extends React.Component{

    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.title}
                        {todo.completed && <span>(completed)</span>}
                    </li>))}
                </ul>
            </div>
        )
    }
}