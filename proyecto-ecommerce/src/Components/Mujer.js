import React from 'react'
import { useState } from "react";
import mujer from "../Assets/img/mujer.png";

export default function Mujer() {

    const [item, setItem] = useState(0);

    const suma = (numero) =>{
        setItem(item + numero);
    }
    
  return (
    <div style={{display: 'flex'}}>
        <div className="card" style={{width: "20rem", margin: "3rem"}}>
                <img src={mujer} className="card-img-top" alt="mujer"/>
                    <div className="card-body">
                        <p className="card-text">MUJER</p>
                        <p>Cantidad: {item}</p>
                        <button type="button" onClick={()=> suma(1)} className="btn btn-primary m-1">+</button>
                        <button type="button" onClick={()=> suma(-1)} className="btn btn-primary m-1">-</button>
                    </div>
            </div>
            <div className="card" style={{width: "20rem", margin: "3rem"}}>
                <img src={mujer} className="card-img-top" alt="mujer"/>
                    <div className="card-body">
                        <p className="card-text">MUJER</p>
                        <p>Cantidad: {item}</p>
                        <button type="button" onClick={()=> suma(1)} className="btn btn-primary m-1">+</button>
                        <button type="button" onClick={()=> suma(-1)} className="btn btn-primary m-1">-</button>
                    </div>
            </div>
            <div className="card" style={{width: "20rem", margin: "3rem"}}>
                <img src={mujer} className="card-img-top" alt="mujer"/>
                    <div className="card-body">
                        <p className="card-text">MUJER</p>
                        <p>Cantidad: {item}</p>
                        <button type="button" onClick={()=> suma(1)} className="btn btn-primary m-1">+</button>
                        <button type="button" onClick={()=> suma(-1)} className="btn btn-primary m-1">-</button>
                    </div>
            </div>
            <div className="card" style={{width: "20rem", margin: "3rem"}}>
                <img src={mujer} className="card-img-top" alt="mujer"/>
                    <div className="card-body">
                        <p className="card-text">MUJER</p>
                        <p>Cantidad: {item}</p>
                        <button type="button" onClick={()=> suma(1)} className="btn btn-primary m-1">+</button>
                        <button type="button" onClick={()=> suma(-1)} className="btn btn-primary m-1">-</button>
                    </div>
            </div>
           
           
            
            
    </div>
  )
}
