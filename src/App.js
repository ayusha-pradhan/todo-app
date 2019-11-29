import React from 'react';
import Check from './check';
import Select from './select';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        places : [
                  {place:"bagbazar",complete: false},
                  {place:"maitighar",complete: false},
                  {place:"tinkune",complete: false},
                  {place:"kritipur",complete: false}
                ]

    }
    
} 

updateTodo = (place) => {
          
  const places = this.state.places.map(a =>{
       if (a.place === place){
           return{
               ...a,
               complete: !a.complete               
           }
       }
       else{
           return a;
       }
   });
  console.log(places)
   this.setState({places:places})
}


render(){
  const {places,complete} = this.state
 
  return (
    

  <div>  
  
  <Check places={places}
   updateTodoFn={this.updateTodo} 
   complete={complete} />
  <br/>
  <Select places={places}/>
 
  </div>
  )
};
}

export default App;
