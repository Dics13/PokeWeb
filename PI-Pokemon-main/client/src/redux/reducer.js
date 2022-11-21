let initialState={
  Pokemon:{},
  Filter:[],
  Order:[],
  Types:[],
  Create:[]

}
export default function reducer(state=initialState,action){
    switch (action.type){
     case "GET_NAME":{
        return {
            ...state,
            Pokemon:action.payload,
        }
     }
     case "FILTER_TYPE":{
      return {
          ...state,
          Filter:action.payload,
      } 
   } 
   case "ORDER":{
    return {
        ...state,
        Order:action.payload,
    } 
 }
 case "ALL_TYPES":{
    
  return {
      ...state,
      Types:action.payload,
  } 
}
case "CREATE":{
 return {
    ...state,
    Create:[...state.Create, action.payload,]
 }
} case "New":{
    return { 
        ...state,
        Filter:[...state.Create]
    }
    
}

     default:{
        return {...state}
     }
    }
}