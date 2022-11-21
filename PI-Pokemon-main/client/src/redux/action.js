import axios from "axios"
const GET_NAME="GET_NAME"
const FILTER_TYPE="FILTER_TYPE"
const ORDER="ORDER" 
const ALL_TYPES="ALL_TYPES"

export function Search(name){
     
     return  async(dispatch)=>{
          
             axios.get(`http://localhost:3001/pokemonsName/?name=${name}`) 
              .then((data)=>{ 
             dispatch({type:GET_NAME,payload:data.data})
                
             })

                           
             
            }           
        
} 
export function TypePokemon(tipo){
    console.log(tipo)
       return async (dispatch)=>{
     if(tipo){
       const {data}= await axios.get("http://localhost:3001/ManyPokemons")
       const info= data.filter((ele)=>{
           if(ele.type===tipo){   
               return ele;
           } else return
       }) 
       console.log(info)
      dispatch({type:FILTER_TYPE,payload:info})
      
       }
     }
      
   
}
export function TypeOrigin(tipo){
       return async (dispatch)=>{
      
       if(tipo){
           try{
         if(tipo==="Existente"){
            const {data}= await axios.get("http://localhost:3001/ManyPokemons")
         
            dispatch({type:FILTER_TYPE,payload:data})
         } else if(tipo==="Nuevo"){
            dispatch({type:"New"})
         }
           
             
           } 
           catch (error){console.log(error)}
              
       }   }
}
export function Alfa(order){
    return async(dispatch)=>{
       console.log(order)
       try{
           const {data}= await axios.get("http://localhost:3001/ManyPokemons")
           const info= data.sort((a,b)=>{
               return a.name.localeCompare(b.name)
           }) 
          
           if(order==="alfa1"){
         
           return dispatch({type:ORDER,payload:info})
             
           } else if(order==="alfa2"){
               const info1=info.reverse()
               console.log(info1)
              return dispatch({type:ORDER,payload:info1})
           }
         
        }
   
       catch (error){console.log(error)}
       }
}
export function Cant(order){
     
       return async(dispatch)=>{
           try{  
               const {data}= await axios.get("http://localhost:3001/ManyPokemons")
               
               const info= data.sort((a,b)=>{return a.Attack-b.Attack} ) 
              
             
               if(order==="cant1"){
               
                return dispatch({type:ORDER,payload:info})
                 
               } else if(order==="cant2"){
                   const info1=info.reverse()
                   
                   return dispatch({type:ORDER,payload:info1})
               }
             
            }
       
           catch (error){console.log(error)}
           }
}  
export function allTypes(){
    return (dispatch)=>{
    axios.get("http://localhost:3001/types")
        .then(data=>{return data.data})
       .then(data=> dispatch({type:ALL_TYPES,payload:data}))
      
  }
}
export function dataDB(){
    return (dispatch)=>{//no se si el select actualice la prop cada que se envie un nuevo pokemon.
        axios.post(`http://localhost:3001/newPokemon`)
        .then(data=>dispatch({type:"CREATE",payload:data.data}))
    }
   
}
