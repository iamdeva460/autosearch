import './Tabular.css'

import React from 'react'

export default function Tabular(props) {
   const data = props.results.map((d,index)=>{
   return <table>
<thead>
    <tr>
    <td colSpan='2' className='bold'>{d.name} Details</td>
    </tr>
</thead>
        <tbody>
            <tr>
                <td className='bold'>Name</td>
                <td >{d.name}</td>
            </tr>
            <tr>
                <td className='bold'>Employee ID</td>
                <td>{d.Emp_id}</td>
            </tr>
            <tr>
                <td className='bold'>Age</td>
                <td >{d.age}</td>
            </tr>
            <tr>
                <td className='bold'>Email</td>
                <td >{d.email}</td>
            </tr>
            <tr>
                <td className='bold'>Phone No</td>
                <td >{d.Phone_Number}</td>
            </tr>
            <tr>
                <td className='bold'> Department</td>
                <td > {d.dept}</td>      
            </tr>
            <tr>
                <td className='bold'>Status</td>
                <td className={d.status=== 'Active'? 'Active':'inActive'}>{d.status}</td>
            </tr>

        </tbody>

         </table>

   })
  return (
    <div className='outer-div'>
        <div className='inner-div'>
          <h1 className='close' onClick={()=>props.closeDetails()}> &#10060;</h1>       
          {data} 
      </div>
        
    </div>
  )
}
