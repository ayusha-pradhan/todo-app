import React from "react";

export default class Todo extends React.Component{

render(){
    
    const {places,complete}= this.props;
   
    return( 
        
        <div style={{textDecoration: complete ? "line-through" : ""}}
         onClick={(places) => this.toggleTodo(places)} >
            {places}
        </div>
    );
    
}
toggleTodo = ()=>{
    this.props.updateTodoFn(this.props.places);
}

}