import React from "react";
import SearchName from "./componentes/SearchName.jsx";
import Filter from "./componentes/Filter.jsx";
import Order from "./componentes/Order.jsx";
import Paginated from "./componentes/Paginated.jsx";
import { Link } from "react-router-dom";
import s from "../cssModules/Home.module.css"

export default function Home() {
  return ( 
   
    <div className={s.div}>
      <header className={s.header}>¡PokeWeb!</header>
    
      <div className={s.nav}>
        <SearchName />
      </div>
   
      <div className={s.div0}>
        <Paginated />
      </div>
      
      
        <div  className={s.div2}>
          <Order />{" "}
        </div>
        <div className={s.div1}>
          <Filter />
        </div>
        
          {" "}
          <Link to="/Formulario">
            {" "}
            <button className={s.button}>¡Crea tu propio Pokemon!</button>{" "}
          </Link>
       
      <div>
     
      </div>
    </div>
  );
}
