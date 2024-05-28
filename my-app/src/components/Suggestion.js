import React from 'react';
import './Suggestion.css'

function Suggestion(props) {
    
const sugg = props.results.map((data,index)=>{
  return <div className='emp-data' key={index} onClick={()=>props.updateText(data.name,data.Emp_id)}> 
             <span className='large'>{data.name}</span>
             
             <span className='right large'>{data.Emp_id}</span>
             <br/>
             <span className='small '>{data.dept}</span>
             <span className='right small'>EMP_ID</span>
             <hr/>
        </div>
})

  return (
    <div className='suggestions'>{sugg}</div>
  )
}

export default Suggestion
