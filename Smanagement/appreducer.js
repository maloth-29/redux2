import { init } from "./init"
 export const appreducer=(state = init,action)=>{
    switch(action.type){
        case "STUDENT1_UPDATE":
            return {
                ...state,
                Student1Name:action.payload
            }
            
        case "STUDENT2_UPDATE":
            return {
                    ...state,
                    Student2Name:action.payload
                }
                
    }
    
    
    return state
}