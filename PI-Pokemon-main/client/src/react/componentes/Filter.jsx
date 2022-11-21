import React from "react";
import { TypePokemon, TypeOrigin } from "../../redux/action.js";
import { useDispatch, useSelector } from "react-redux";
import s from "../../cssModules/Filter.module.css"
 import List from "../componentes/List.jsx"
export default function Filter() {
  const prop=useSelector((state)=>state.Filter)
  console.log(prop)
  const dispatch = useDispatch();
  let normal = "normal";
  let fighting = "fighting";
  let flying = "flying";
  let poison = "poison";
  let rock = "rock";
  let ghost = "ghost";
  let steel = "steel";
  let water = "water";
  let grass = "grass";
  let electric = "electric";
  let psychic = "psychic";
  let ice = "ice";
  let fire = "fire";
  let dragon = "dragon";
  let dark = "dark";
  let fairy = "fairy";
  let unknown = "unknown";
  let shadow = "shadow";
  let Nuevo = "Nuevo";
  let Existente = "Existente";

  const handleClick = (normal) => {
    let tipo = normal;
    dispatch(TypePokemon(tipo));
  };
  const handleClick1 = (fighting) => {
    let tipo = fighting;
    dispatch(TypePokemon(tipo));
  };
  const handleClick2 = (flying) => {
    let tipo = flying;
    dispatch(TypePokemon(tipo));
  };
  const handleClick3 = (poison) => {
    let tipo = poison;
    dispatch(TypePokemon(tipo));
  };
  const handleClick4 = (rock) => {
    let tipo = rock;
    dispatch(TypePokemon(tipo));
  };
  const handleClick5 = (ghost) => {
    let tipo = ghost;
    dispatch(TypePokemon(tipo));
  };
  const handleClick6 = (steel) => {
    let tipo = steel;
    dispatch(TypePokemon(tipo));
  };
  const handleClick7 = (fire) => {
    let tipo = fire;
    dispatch(TypePokemon(tipo));
  };
  const handleClick8 = (water) => {
    let tipo = water;
    dispatch(TypePokemon(tipo));
  };
  const handleClick9 = (grass) => {
    let tipo = grass;
    dispatch(TypePokemon(tipo));
  };
  const handleClick10 = (electric) => {
    let tipo = electric;
    dispatch(TypePokemon(tipo));
  };
  const handleClick11 = (psychic) => {
    let tipo = psychic;
    dispatch(TypePokemon(tipo));
  };
  const handleClick12 = (ice) => {
    let tipo = ice;
    dispatch(TypePokemon(tipo));
  };
  const handleClick13 = (dragon) => {
    let tipo = dragon;
    dispatch(TypePokemon(tipo));
  };
  const handleClick14 = (dark) => {
    let tipo = dark;
    dispatch(TypePokemon(tipo));
  };
  const handleClick15 = (fairy) => {
    let tipo = fairy;
    dispatch(TypePokemon(tipo));
  };
  const handleClick16 = (unknown) => {
    let tipo = unknown;
    dispatch(TypePokemon(tipo));
  };
  const handleClick17 = (shadow) => {
    let tipo = shadow;
    dispatch(TypePokemon(tipo));
  };
  const handleClick18 = (Creado) => {
    let tipo = Creado;
    dispatch(TypeOrigin(tipo));
  };
  const handleClick19 = (Existente) => {
    let tipo = Existente;
    dispatch(TypeOrigin(tipo));
  };

  return (
    <div >
      
       <header className={s.font}>Filtrar tipo de pokemon</header>
       <div className={s.div}>
        
          <button
            className={s.button}
            onClick={(e) => {
              handleClick(normal);
            }}
          >
            normal
          </button>
          <button
           className={s.button}
            onClick={(e) => {
              handleClick1(fighting);
            }}
          >
            fighting
          </button>
          <button
            className={s.button}
            onClick={(e) => {
              handleClick2(flying);
            }}
          >
            flying
          </button>
          <button
            className={s.button}
            onClick={(e) => {
              handleClick3(poison);
            }}
          >
            poison
          </button>
          <button
           className={s.button}
            onClick={(e) => {
              handleClick4(rock);
            }}
          >
            rock
          </button>
          <button
           className={s.button}
            onClick={(e) => {
              handleClick5(ghost);
            }}
          >
            ghost
          </button>
          <button
           className={s.button}
            onClick={(e) => {
              handleClick6(steel);
            }}
          >
            steel
          </button>
          <button
           className={s.button}
            onClick={(e) => {
              handleClick7(fire);
            }}
          >
            fire
          </button>
          <button
            className={s.button}
            onClick={(e) => {
              handleClick15(fairy);
            }}
          >
            fairy
          </button>
          <button
           className={s.button}
            onClick={(e) => {
              handleClick16(unknown);
            }}
          >
            unknown
          </button>
        
        
          <button
            className={s.button}
            onClick={(e) => {
              handleClick8(water);
            }}
          >
            water
          </button>
          <button
            className={s.button}
            onClick={(e) => {
              handleClick9(grass);
            }}
          >
            grass
          </button>
          <button
            className={s.button}
            onClick={(e) => {
              handleClick10(electric);
            }}
          >
            electric
          </button>
          <button
            className={s.button}
            onClick={(e) => {
              handleClick11(psychic);
            }}
          >
            psychic
          </button>
          <button
            className={s.button}
            onClick={(e) => {
              handleClick12(ice);
            }}
          >
            ice
          </button>
          <button
            className={s.button}
            onClick={(e) => {
              handleClick13(dragon);
            }}
          >
            dragon
          </button>
          <button
            className={s.button}
            onClick={(e) => {
              handleClick14(dark);
            }}
          >
            dark
          </button>
          <button
            className={s.button}
            onClick={(e) => {
              handleClick17(shadow);
            }}
          >
            shadow
          </button>
        </div>
        
       
        <header className={s.font}>
          Filtrar por pokemon creado o existente{" "}
        </header>
        <div className={s.div}>
          <button
          className={s.button}
            onClick={(e) => {
              handleClick18(Nuevo);
            }}
          >
            Creado
          </button>
          <button
            className={s.button}
            onClick={(e) => {
              handleClick19(Existente);
            }}
          >
            Existente
          </button>
       
        </div >
        <div  className={s.grid}>
        { prop.map((ele,index)=>{
          return (<List key={index} prop={ele} />)
        })
      }</div>
    </div>
  );
}
