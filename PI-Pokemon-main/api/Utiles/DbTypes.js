const axios= require ('axios');
const { Type } = require('../src/db.js');

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

const getTypes= async()=>{
  
  try{
    axios.get("https://pokeapi.co/api/v2/type")
    .then(data=>{return data})
     .then(data=>{let info=data.data.results.map((ele) =>{return {nombre:removeAccents(ele.name)}})
      return info;
      })  
      .then(info=>{
    Type.bulkCreate(info)
 });
}catch(error){console.log(error)}

    }
  module.exports= getTypes;