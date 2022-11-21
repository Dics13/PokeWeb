import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "../cssModules/Detail.module.css"

export default function Detail({prop}){

    let [data,setData]=useState({})

    let {id}=useParams(prop)
    useEffect(()=>{
         fetch(`http://localhost:3001/pokemonsID/${id}`)
            .then(response=>response.json())
            .then(info=>setData(info))
      },[] 
  ) 
  
  const {name,image,type,ID,Life,Attack,Defense,Speed,height,weight}=data;
    return(
       <div className={s.div0}>
       <div className={s.div}> 
       <div className={s.header}>
       <div  className={s.name}>{name}</div>
       <img 
       className={s.img1}
       src={image} alt="NO TENEMOS LA IMAGEN"/>
       
       </div>
       <div className={s.type}>
       <div>N°{ID}</div> 
        <div >Tipo:{type}</div>
        </div>
        <br></br>
        <div className={s.grid}>
        <div className={s.number}>Vida:{Life}</div>
        <div className={s.number}>Ataque:{Attack}</div>
        <div className={s.number}>Defensa:{Defense}</div>
        <div className={s.number}>Velocidad:{Speed}</div>
        <div className={s.number}>Altura:{height}</div>
        <div className={s.number}>Peso:{weight}</div>
      </div>
      </div>
        </div>
    )
}