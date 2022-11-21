import React from "react";
import s from "../../cssModules/List.module.css"
export default function List ({prop}){
    const {name,Attack}=prop;
    
  return(
    <div className={s.div}>
      <h1 className={s.font}>{name}</h1>
      <h2 className={s.font}>{Attack}</h2>
    </div>
  )
}