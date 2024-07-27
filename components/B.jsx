"use client"
import React from 'react'
import { useSelector } from 'react-redux'

export const B = () => {
   const {Student1Name}= useSelector((state)=>{
        const{Student1Name}=state.appreducer
        return {Student1Name} 
    
       })

  return (
    <div>
        <h1>C</h1>
        <h3>student1 name:{Student1Name} </h3>
    </div>
  )
}
