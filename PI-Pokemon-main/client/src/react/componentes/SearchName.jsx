import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Search } from "../../redux/action";
import Card from "./Card";
import s from "../../cssModules/Search.module.css"
export default function SearchName() {
  const dispatch = useDispatch();
  const [name, setNombre] = useState(" ");
  const prop = useSelector((state) => state.Pokemon);
  console.log(prop)
  let handleClick = (e) => {
    dispatch(Search(name));
  };
  let handleChange = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div className={s.body}>
      
        <input
        className={s.input}
          onChange={handleChange}
          type="text"
          value={name}
          
        />
        <button 
        className={s.button}
        onClick={handleClick}>
          Buscar{" "}
        </button>
        {!Object.entries(prop).length === 0 && <h2>
        <Card prop={prop} />
      </h2>}
     
    </div>
  );
}
