import React from "react";
import Todo from './todo';
// import shortid from "shortid";

export default class Check extends React.Component{
   

    // static getDerivedStateFromProps(props, state){
    //     return
    //     {
    //         places =props.places
    //     }
    // }

    // updateTodo = (place) => {
        
    //            const places = this.props.places.map(a =>{
    //                 if (a.place === place){
    //                     return{
    //                         ...a,
    //                         complete: !this.props.complete
    //                     }
    //                 }
    //                 else{
    //                     return a;
    //                 }
    //             });
    //             console.log("updated places" ,places)
    //             this.setState({places:places})
    //         }
        
        
    

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
        // debugger;
        this.props.updateTodoFn(places);
    }
}