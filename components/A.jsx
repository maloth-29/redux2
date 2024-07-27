"use client"
import React, {useRef, useState } from 'react'
import{useDispatch} from 'react-redux'

export const A = () => {
    const Student2Name=useRef()
    const [Student1Name,SetStudent1Name]=useState()
    const dispatch= useDispatch()
    const handeleChange=(eve)=>{
      SetStudent1Name(eve.target.value)
    }
    const handeleClick=()=>{
      dispatch({type:"STUDENT1_UPDATE",payload:Student1Name})
  }
  const handeleRlick=()=>{
    const name=Student2Name.current.value;
    dispatch({type:"STUDENT2_UPDATE",payload:name})
  }

  return (
    <div>
    <h1>A</h1>
    <p>
        <b>Student1 Name:<input onChange={handeleChange} />  <button onClick={handeleClick}>Submit</button></b>
    </p>
    <p>
        <b>Student2 Name:<input ref={Student2Name}/> <button onClick={handeleRlick}>Submit</button></b>
    </p>
    
    </div>
  )
}
