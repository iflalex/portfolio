//React
import React from 'react'
//Store
//Router
import { useLocation } from 'react-router-dom'
//interfaces

//Components



export default function DetailsProjet(): React.ReactElement {
    const location = useLocation()
    const item = location.state 

    console.log(item)
    
    return (
      <div className=''>
       <h1>alex</h1>
      </div>
     )
  
}