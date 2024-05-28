import React, { Component } from 'react';
import './App.css';
import Data from './data.json'
import Suggestion from './components/Suggestion';
import Tabular from './components/Tabular';


export default class App extends Component {

constructor(props){
  super(props)
  this.state={
    data : Data.data,
    keyword:"",
    results: [],
    showSuggestion :false,
    showDetails:false
  }
}
//matchName
matchName=(name,keyword)=>{
  let keyLen = keyword.length
   keyword =keyword.toLowerCase()
   name =name.toLowerCase().substring(0,keyLen)
  return name === keyword && keyLen!==0 
}

//onSearch
onSearch=(value)=>{
  let results = this.state.data.filter(item =>
    this.matchName(item.name,value)
  )
  this.setState({
    results:results
  })
  console.log(results);
}

//updateField
updateField = (value)=>{
this.setState(
 { 
  keyword:value,
  showSuggestion:true }
)
this.onSearch(value)
}

//updateText
updateText=(name,id)=>{
let res = this.state.data.filter(item => item.name === name && item.Emp_id === id )
this.setState({
  keyword:name,
  showSuggestion:false,
  results:res
})
}

//clear
clear=()=>{
  this.setState({
    keyword:"",
    showSuggestion:false,
    results:[]
  })
}

 //HandleClick 
 handleClick=()=>{
  this.setState({
    showDetails:true
  })
 }
  //CLOSEDETAILS
  closeDetails=()=>{
    this.setState({
      showDetails:false,
      results:[],
      keyword:'',
      showSuggestion:false
    })
  }



  render() {
    return (
<div className='App'>
      {this.state.showDetails ? <Tabular results={this.state.results} closeDetails={this.closeDetails}/> :  
    <div className='autoComplete-Container'> 
      <h1 className='main-head'>Employee Details</h1>
      <br/>
      <br/>
      <div className='search-container'>
              <div className='input'>
              <input className='search-bar' onChange={(e)=>this.updateField(e.target.value)} value={this.state.keyword} placeholder='Search..' type='text'/>
              {
              this.state.keyword.length > 0 ? 
  <div className='button'>
      <button className='clear' onClick={()=>this.clear()}> X </button>
  </div>
            :null}
              </div>
      </div>
      {
       this.state.showSuggestion && this.state.results.length >0 ? 
      <div className='suggestion-container'>
           <Suggestion results={this .state.results } updateText={this.updateText}/>  
     </div>       :      this.state.keyword.length >0  && this.state.results.length === 0?
             <div className='no-results'>
                    <h1>No Results Found..!</h1>
                    <br/>
                    <h4>Try different Keywords</h4>
             </div> : null
    }
     {
       this.state.results.length===1 && 
       this.state.keyword.toLowerCase() === this.state.results[0].name.toLowerCase() ?
       <div className='details'>
          <button className='details-button' onClick={()=>this. handleClick()}>View Details</button>
       </div> : null
     }

    </div>
        }
</div>
)
}
}
