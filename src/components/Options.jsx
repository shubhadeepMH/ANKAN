import React from 'react'


export default function Options(props) {
  return (
<button  className={`optionButton ${props.active ? 'active' : ''}`} onClick={props.handleClicked} >
   {props.name}
  
</button>
  )
}
