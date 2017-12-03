import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import VideoList from './components/videolist';
import Search from './components/search';
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";
import YTsearch from "youtube-api-search";
import Details from './components/details'
import _ from'lodash';
 class App extends Component
{
  constructor(props){
    super(props);
    this.state={
      videos:[],
      selected:null
    };

this.textchange('NAAN YEN')


  }
  textchange(term){
    YTsearch({key:API_KEY,term:term},(videos)=>{
    this.setState({
      videos:videos,
      selected:videos[0]
    })
  }
)}
  render(){
const search=_.debounce((term)=>{this.textchange(term)},500);
  return(
<div>
    <Search change={(term)=>search(term) }/>

    <VideoList select={(selected)=>this.setState({selected})} video={this.state.videos} />
    <Details  video={this.state.selected}/>
</div>
);
}
}
ReactDOM.render(<App />,document.querySelector('.container'));
