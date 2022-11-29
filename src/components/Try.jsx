import React, { useState } from 'react'

export default function Try() {
let myObj={
        name:"subir",
        age:34,
        school:"lagda",
        title:"Mahato"
}
const [obj,setObj]=useState(myObj)
const clicked=()=>{
    console.log("Hello world");
setObj({...obj, vill:"ghonga"})

}

  return (
    <div>
    <p>{myObj.age}||{obj.name}||{obj.title}||{obj.school}||{ obj.vill } </p>
     <button onClick={clicked}>update</button>

    </div>
  )
}
