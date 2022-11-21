import React from "react"
import { useDispatch,useSelector} from "react-redux"
import { Alfa,Cant } from "../../redux/action"
import s from "../../cssModules/Order.module.css"
import List from "./ListOrder.jsx"

export default function Order(){
const prop=useSelector((state)=>state.Order)
const dispatch=useDispatch()
let Alfa1="alfa1"
let Alfa2="alfa2"
let Cant1="cant1"
let Cant2="cant2"

const handleClick=(Alfa1)=>{
 let order=Alfa1
  dispatch(Alfa(order))
}
const handleClick1=(Alfa2)=>{
let order=Alfa2
dispatch(Alfa(order))
}
const handleClick2=(Cant1)=>{
    let order=Cant1
dispatch(Cant(order))
}
const handleClick3=(Cant2)=>{
  let order=Cant2
  dispatch(Cant(order))
}

  return(
   <div >
    <header className={s.font}>Orden por ataque y orden Alfabetico</header>
    <div >
      <button className={s.button} onClick={(e)=>{handleClick(Alfa1)}}>Orden Alfabetico Ascendente</button>
      <button className={s.button} onClick={(e)=>{handleClick1(Alfa2)}}>Orden Alfabetico Descendente</button>
    
       <button  className={s.button}onClick={(e)=>{handleClick2(Cant1)}}>Ataque (valores ascendentes)</button>
       <button  className={s.button}onClick={(e)=>{handleClick3(Cant2)}}> Ataque(valores descendentes)</button>
    </div>
    <div className={s.grid}>
     {
      prop.map((ele,index)=>{
        return(<List key={index} prop={ele} />)
      })
     }
     </div>
   </div>
  
  )
}