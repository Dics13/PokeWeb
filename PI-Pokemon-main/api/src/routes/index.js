const { Router } = require("express");
const { Pokemon, Type } = require("../db");
const axios = require("axios");
//es probable que no sepa como relacionar los dos modelos en el futuro, pero se supone que los puedo recrear. eso es lo raro, que el otro dia se me haya roto el servidor.
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/ManyPokemons", async (req, res) => {
 try{
    let { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=40&limit=40"
    );
  
    let arr = data.results.map((ele) => {
      return axios.get(ele.url).then((data) => {
        let obj = {
          Attack: data.data.stats[1].base_stat,
          ID: data.data.id,
          name: data.data.name,
          image: data.data.sprites.back_default,
          type: data.data.types[0].type.name,
         
        };
        return obj;
      });
    });
    Promise.all(arr).then((data) => res.send(data));
  } catch(error){console.log(error)}
 
  

});

router.get("/pokemonsID/:id", async (req, res) => {
  try{
    const { id } = req.params;
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (data){
      let detalle = {
        name: data.name,
        image: data.sprites.back_default,
        type: data.types[0].type.name,
        ID: data.id,
        Life: data.stats[0].base_stat,
        Attack: data.stats[1].base_stat,
        Defense: data.stats[2].base_stat,
        Speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
      };
      res.send(detalle);
    }
  }catch(error){console.log(error)}
 
});
router.get("/pokemonsName/", async (req, res) => {
const name = req.query.name;
if(name){
  try{
    let { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154"
    );
  
     data.results.map((ele) => {
      if(ele.name===name){
        axios.get(ele.url)
       .then((data) => {
        let obj = {
          
          ID: data.data.id,
          name: data.data.name,
          image: data.data.sprites.back_default,
          type: data.data.types[0].type.name};
       return obj
      })
      .then((data)=>{
        res.send(data)
      })
      }
       
      ;
    });
  } catch(error){
    res.send(error)
  }
}

});

router.post("/newPokemon", async (req, res,next) => {
  const {nombre, idTypes,vida,ataque,defensa,velocidad,altura,peso } = req.body;
  let objeto={
    nombre:nombre,
    vida:vida,
    ataque:ataque,
    defensa:defensa,
    velocidad:velocidad,
    altura:altura,
    peso:peso,}
 if(nombre&&idTypes&&vida&&ataque&&defensa&&velocidad&&altura&&peso){
  try {
    let newPokemon = await Pokemon.create(objeto);
      await newPokemon.setTypes(idTypes);
    } 
  catch (error) {
    console.log(error);
  }
   
 }
next()
}, async(req,res)=>{
 try{
 let data= await Pokemon.findAll({attributes:["nombre","ID"]})
 res.send(data)

 } catch(error){
  console.log(error)
 }
}
);

router.get("/types", async (req, res) => {
  try{
    idTypes = await Type.findAll({ attributes: ["ID", "nombre"] });
     res.send(idTypes);
  }catch(error){console.log(error)}
  
});
router.get("/Random",async(req,res)=>{
  let id= Math.random(1,40)

  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (data) {
    let detalle = {
      name: data.name,
    
      Attack: data.stats[1].base_stat,
    
    };
    res.send(detalle);
  }



})

module.exports = router;
