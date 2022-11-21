import React from "react";
import { connect } from "react-redux";
import { allTypes,dataDB } from "../redux/action";
import axios from "axios";
import s from "../cssModules/Form.module.css"

let validate=(form)=>{
  const error={}
  let reg = /[0-9]+/;
  if(!form.nombre||!form.vida||!form.ataque||!form.defensa||!form.velocidad||!form.altura||!form.peso||form.idTypes.length===0){
    error.error="Todos los campos son obligatorios"
  } 
  if(form.nombre.match(reg)){
    error.nombre="El nombre no puede contener numeros"
  }
  if(form.vida<0||form.ataque<0||form.defensa<0||form.velocidad<0||form.altura<0||form.peso<0){
    error.numero="Los numeros no pueden ser valores negativos"
  }

  return error;
  }
 class Form1 extends React.Component {
 
 constructor() {
    super();
    this.state = {
      nombre:" ",
      vida:0,
      ataque:0,
      defensa:0,
      velocidad:0,
      altura:0,
      peso:0,
      idTypes:[],
      error:{},
      
    };
  } 

 handleChange = (e) => {
    let valor = e.target.value;
    
    if (valor) {
      this.setState((state)=>{
        return{
         ...state,
         nombre:valor,
        }
     }); 
      
    } 
  };
  handleChange1 = (e) => {
    let valor = e.target.value;
    console.log(valor)
 if (valor) {
     this.setState((state) => {
          return {
            ...state,
            idTypes: [...new Set([...state.idTypes, valor])],}
    });
  }
  
  };

  handleChange2=(e)=>{
  let valor=e.target.value;
  if(valor){
    this.setState(
      (state) => {
       return {
          ...state,
          vida:valor
      }
      })
  } 
}
  handleChange3=(e)=>{
    let valor=e.target.value;
    if(valor){
      this.setState(
        (state) => {
          return {
             ...state,
             ataque:valor
         }
         })
    }
  }
  handleChange4=(e)=>{
    let valor=e.target.value;
    if(valor){
      this.setState(
        (state) => {
          return {
             ...state,
             defensa:valor
         }
         })
    }
  }
  handleChange5=(e)=>{
    let valor=e.target.value;
    if(valor){
      this.setState(
        (state) => {
          return {
             ...state,
             velocidad:valor
         }
         })
    }
  }
  handleChange6=(e)=>{
    let valor=e.target.value;
    if(valor){
      this.setState(
        (state) => {
          return {
             ...state,
             altura:valor
         }
         })
    }
  }
  handleChange7=(e)=>{
    let valor=e.target.value;
    if(valor){
      this.setState(
        (state) => {
          return {
             ...state,
             peso:valor
         }
         })
    }
  }
  handleClick = (e) => {
    e.preventDefault()
    this.props.allTypes()
  };
 
  handleClick2=async(e)=>{
   e.preventDefault() 
  const {error,...form}=this.state;
  const result=validate(form)
if(Object.keys(result).length){
    this.setState({error:result}) 
  } else {
    await axios.post("http://localhost:3001/newPokemon",form);
    alert("¡Ya cargo tu formulario!")
    this.props.dataDB()
  }

  }
  
  render() {
    return ( 
      <div className={s.div}>
       <div className={s.title}>¡Bienvenido!¿listo para crear un nuevo pokemon?</div>
        
        <form className={s.form}>
         <div>
            <label  className={s.label}>Nombre</label>
            <br></br>
            <input  
            className={s.input}
            onChange={this.handleChange}
            type="text"
            value={this.state.nombre}
            placeholder="Nombre"/>
             </div>
             <div><label>{this.state.error&&<small>{this.state.error.nombre}</small>}</label></div>
            
          <div>
            <label
            className={s.label}
            >Vida</label> <br></br>
            <input 
            className={s.input}
            type="number"
            value={this.state.vida}
            onChange={this.handleChange2}
            />
          </div>
          <div>
            <label
            className={s.label}
            >Ataque</label>
            <br></br>
            <input
            className={s.input}  
            type="number" 
            value={this.state.ataque}
            onChange={this.handleChange3}/>
          </div>
          <div> 
            <label
            className={s.label}
            >Defensa</label>
            <br></br>
            <input  
            className={s.input}
            type="number"
            value={this.state.defensa}
            onChange={this.handleChange4}/>
          </div>
          <div>
            {" "}
            <label
            className={s.label}
            >Velocidad</label>
            <br></br>
           <input  
           className={s.input}
            type="number"
            value={this.state.velocidad}
            onChange={this.handleChange5}/>
          </div> 
          <div> 
            <label
            className={s.label}
            >Altura</label>
            <br></br>
            <input  
            className={s.input}
            type="number"
            value={this.state.altura}
            onChange={this.handleChange6}/> 
          </div>
           <div>
            <label
            className={s.label}
            >Peso</label>
            <br></br>
            <input  
            className={s.input}
            type="number"
            value={this.state.peso}
            onChange={this.handleChange7}/>
          </div>
          <div>  
            <button 
            className={s.button}
            onClick={this.handleClick} ><label
            className={s.label}
            >Tipos</label></button>
            <select
            className={s.input}
            value={" "} onChange={this.handleChange1}>
            {this.props.types.map((ele) => {
              
              return (
                <option value={ele.ID} key={ele.ID}>
                  {ele.nombre}
                </option>
              ); 
            })} 
            </select>
           
          </div> 
        <div><label className={s.label}>{this.state.error&&<small>{this.state.error.error}</small>}</label></div>
        <div><label className={s.label}>{this.state.error&&<small>{this.state.error.numero}</small>}</label></div>
          <div> 
            <label>
            <button 
            className={s.button}
            onClick={this.handleClick2}
             >
            CREAR
          </button>
            </label>
            
          </div>
        </form>
       
      </div>
    );
   }    
    
}
        
function mapStateToProps(state){
  return{
    types:state.Types
  }
}
function mapDispatchToProps(dispatch){
  return { 
    allTypes:()=>{dispatch(allTypes())},
    dataDB:()=>{dispatch(dataDB())}
  }
}

const Form=connect(mapStateToProps,mapDispatchToProps)(Form1)

export default Form