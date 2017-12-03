import React,{Component} from 'react';


 class  Search extends Component
 {
constructor(props)
{
  super(props);
  this.state={
    term:''
  };
}

render(){
   return(<div className="search-bar">
   <input className="i"placeholder=" inga paarungada da lol .xD"type="text" onChange={(event)=>this.onchange(event.target.value)}/>

    </div>
 );
}

onchange(term){
  this.setState({term});
  this.props.change(term);
}
}
export default Search;
