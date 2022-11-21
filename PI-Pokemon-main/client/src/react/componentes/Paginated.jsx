import React from "react";
import { useState, useEffect } from "react";
import PagCard from "./PagCard";

export default function Paginated() {

 const [prop, setProp] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/ManyPokemons")
      .then((res) => res.json())
      .then((data) => setProp(data));
  }, []);

  let initialIndex = 1;
  const [indexPrev, setIndexPrev] = useState(initialIndex);
  const CantPage = Math.ceil(prop.length / 10);
  const lastValue = indexPrev * 10;
  const firstValue = lastValue - 10;
  const Data = prop.slice(firstValue, lastValue);
 
  return (
    <h1>
      <PagCard
        CantPage={CantPage}
        setIndexPrev={setIndexPrev}
        indexPrev={indexPrev}
        Data={Data}
      />
    </h1>
  );
}
