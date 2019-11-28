import React from 'react';
import Check from './check';
import Select from './select';

// const places = [{place:"bagbazar"},{place:"maitighar"},{place:"tinkune"},{place:"kritipur"}]


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        places : [{place:"bagbazar"},{place:"maitighar"},{place:"tinkune"},{place:"kritipur"}],
        
        // complete : false
    }

} 

updateTodo = (place) => {
        
  const places = this.state.places.map(a =>{
       if (a.place === place){
           return{
               ...a,
               complete: !this.state.complete
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
  // console.log(places)
  return (
 

  <div>  
  <Check places={places}
   updateTodoFn={this.updateTodo} 
   complete={complete} />
  <br/>
  <Select places={places} 
  // complete={complete}
   />
 
  </div>
  )
};
}

export default App;
