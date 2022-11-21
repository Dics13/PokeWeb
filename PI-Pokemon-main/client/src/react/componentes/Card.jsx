import React from "react";
import { Link } from "react-router-dom";
import s from "../../cssModules/Card.module.css"

export default function Card({ prop }) {
  const { name, image, type, ID } = prop;
  return (
    <div className={s.container}>
      <img className={s.img}src={image} alt="Pokemon"/>
      <Link to={`/Detalle/${ID}`}> 
      <h1 className={s.name}>{name}</h1>
      </Link>
      
      <h1 className={s.type}>{type}</h1>
    </div>
  );
}

