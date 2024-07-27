import{configureStore}from "@reduxjs/toolkit"
import { appreducer } from "./appreducer"
import logger from "redux-logger"
 export const store=configureStore({
    reducer:{
        appreducer
         },
         middleware:()=>{
            return[logger]
        }
})