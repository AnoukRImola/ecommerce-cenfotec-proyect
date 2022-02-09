import { useState } from "react";
import mujer from "../Assets/img/mujer.png";
import men from "../Assets/img/men.png";

const Section = () => {

    const [item, setItem] = useState(0);

    const suma = (numero) =>{
        setItem(item + numero);
    }

    return (
        <main className="section-main">
            <div className="card" style={{width: "20rem"}}>
                <img src={mujer} className="card-img-top" alt="mujer"/>
                    <div className="card-body">
                        <p className="card-text">MUJER</p>
                        <p>Cantidad: {item}</p>
                        <button type="button" onClick={()=> suma(1)} className="btn btn-primary m-1">+</button>
                        <button type="button" onClick={()=> suma(-1)} className="btn btn-primary m-1">-</button>
                    </div>
            </div>
            <div className="card" style={{width: "20rem"}}>
                <img src={men} className="card-img-top" alt="hombre"/>
                    <div className="card-body">
                        <p className="card-text">HOMBRE</p>
                        <p>Cantidad: {item}</p>
                        <button type="button" onClick={()=> suma(1)} className="btn btn-primary m-1">+</button>
                        <button type="button" onClick={()=> suma(-1)} className="btn btn-primary m-1">-</button>
                    </div>
            </div>
            <form>
                <input></input>
                <input></input>
                <input></input>
            </form>
        </main>
    )
}

export default Section;