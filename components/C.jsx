"use client"
import React from 'react'
import { useSelector } from 'react-redux'

export const C = () => {
    const {Student2Name}= useSelector((state)=>{
        const{Student2Name}=state.appreducer
        return {Student2Name} 
    
       })
  return (
    <div>
        <h1>D</h1>
        <h3>student2 name: {Student2Name}  </h3>
    </div>
  )
}
