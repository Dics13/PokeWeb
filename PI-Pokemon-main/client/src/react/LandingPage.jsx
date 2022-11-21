import React from "react";
import { Link } from "react-router-dom";
import s from "../cssModules/Landing.module.css";

export default function Landing() {
  return (
    <div>
      <div className={s.div0}></div> 
       <div className={s.div}></div> 
 <div>   
          <Link to="/Home">
            <button className={s.button}>Home</button>
          </Link>
        </div>
    </div>
  );
}
