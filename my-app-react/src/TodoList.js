import React from "react";
 



export class TodoList extends React.Component{
    state = {
        input: ''
    }

    //track input field's state on Change
   handleItemsToList = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
        [name]: value
    })

   }

   //button: add item on Click
   handlePushItems = (event) =>{
    this.setState({
        input: '', 
        
    })
      this.props.items.push(this.state.input)
      console.log(this.props.items)
   }
 


    render(){
        const items = this.props.items.map((item, index )=> <li key={item + index}>{item}</li>)

        return(
            <div>
                <h1>My Todo List: List-03</h1>
                <ul>{items}</ul>
                <input name="input" 
                       type="text"
                       value={this.state.input}
                       onChange={this. handleItemsToList}/>
                <button 
                    type="button"
                       onClick={this.handlePushItems}>Add item to the list</button>
            </div>
        )
    }
}