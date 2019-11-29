import React from "react";
import Todo from './todo';
// import shortid from "shortid";

export default class Check extends React.Component{

    render(){
        const {places,complete}=this.props
        return(
            <div  >
                {places.map((places,index) =>
                {return(
                <Todo updateTodoFn= {(places)=>{this.toggleTodo(places)}} key={index} places={places.place} complete={complete}/>
                )
                }
                )}
            </div>
        );
    }

    toggleTodo = (places)=>{
        
        this.props.updateTodoFn(places);
    }
}