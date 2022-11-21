import React from "react";
import s from "../../cssModules/List.module.css"
export default function List ({prop}){
    const {name,type}=prop;
    
  return(
    <div className={s.div}>
      <h1 className={s.font}>{name}</h1>
      <h2 className={s.font}>{type}</h2>
    </div>
  )
}