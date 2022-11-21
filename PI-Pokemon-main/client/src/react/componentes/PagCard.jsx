import React from "react";
import Card1 from "./Card1";
import s from "../../cssModules/Paginated.module.css"

export default function PagCard({ Data, CantPage, setIndexPrev, indexPrev }) {
  

  const CantPageIndex = [];

  for (var i = 1; i <= CantPage; i++) {
    CantPageIndex.push(i);
  }

  const handleclick = (indexPrev, setIndexPrev) => {
    if (indexPrev < CantPageIndex.length) {
      setIndexPrev(indexPrev + 1);
    } else return;
  };
  const handleclick1 = (indexPrev, setIndexPrev) => {
    if (indexPrev > 1) {
      setIndexPrev(indexPrev - 1);
    } else return;
  };
  return (
    <div >
      <div  className={s.buttons}>
        <div>
      <button
        className={s.button}
        onClick={(e) => {
          handleclick1(indexPrev, setIndexPrev);
        }}
      >
        {"<--"}
       
      </button>

      {CantPageIndex.map((ele, index) => {
        return (
          <button
          className={s.button}
            key={index}
            onClick={(e) => {
              setIndexPrev(ele);
            }}
          >
            {ele}
          </button>
        );
      })}
      <button
        className={s.button}
        onClick={(e) => {
          handleclick(indexPrev, setIndexPrev);
        }}
      >
        {"-->"}
        
      </button>
      </div>
      </div>
     <div  className={s.container}>
            {Data.map((ele, index) => {
              return (
                
                  <Card1 key={index}
                        prop={ele}
                  />
               
              );
            })}
          </div>
       
    </div> 
  );
}
