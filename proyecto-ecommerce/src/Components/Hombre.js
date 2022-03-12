import { useState } from "react";
import men from "../Assets/img/men.png";


export default function Hombre() {

    const [item, setItem] = useState(0);

    const suma = (numero) =>{
        setItem(item + numero);
    }

  return (
    <div style={{display: 'flex'}}>
        <div className="card" style={{width: "20rem", margin: "3rem"}}>
                <img src={men} className="card-img-top" alt="hombre"/>
                    <div className="card-body">
                        <p className="card-text">HOMBRE</p>
                        <p>Cantidad: {item}</p>
                        <button type="button" onClick={()=> suma(1)} className="btn btn-primary m-1">+</button>
                        <button type="button" onClick={()=> suma(-1)} className="btn btn-primary m-1">-</button>
                    </div>
            </div>
            <div className="card" style={{width: "20rem", margin: "3rem"}}>
                <img src={men} className="card-img-top" alt="hombre"/>
                    <div className="card-body">
                        <p className="card-text">HOMBRE</p>
                        <p>Cantidad: {item}</p>
                        <button type="button" onClick={()=> suma(1)} className="btn btn-primary m-1">+</button>
                        <button type="button" onClick={()=> suma(-1)} className="btn btn-primary m-1">-</button>
                    </div>
            </div>
            <div className="card" style={{width: "20rem", margin: "3rem"}}>
                <img src={men} className="card-img-top" alt="hombre"/>
                    <div className="card-body">
                        <p className="card-text">HOMBRE</p>
                        <p>Cantidad: {item}</p>
                        <button type="button" onClick={()=> suma(1)} className="btn btn-primary m-1">+</button>
                        <button type="button" onClick={()=> suma(-1)} className="btn btn-primary m-1">-</button>
                    </div>
            </div>
            <div className="card" style={{width: "20rem", margin: "3rem"}}>
                <img src={men} className="card-img-top" alt="hombre"/>
                    <div className="card-body">
                        <p className="card-text">HOMBRE</p>
                        <p>Cantidad: {item}</p>
                        <button type="button" onClick={()=> suma(1)} className="btn btn-primary m-1">+</button>
                        <button type="button" onClick={()=> suma(-1)} className="btn btn-primary m-1">-</button>
                    </div>
            </div>
            
    </div>
  )
}
