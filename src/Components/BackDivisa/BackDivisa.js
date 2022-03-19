import React, {useEffect, useState} from 'react';
import Divisa from "../Divisa";
import "../BackDivisa/BackDivisa.css"

const UrlBase = 'http://api.exchangeratesapi.io/v1/latest?access_key=27617e6680f44c3208a8a2eacb8883d3'

export default function BackDivisa() {

    const [tipoDeDivisa, setTipoDeDivisa] = useState([]);//todas las divisas
    const [fromDivisa, setFromDivisa] = useState();//EUR
    const [toDivisa, setToDivisa] = useState();//AED
    const [intercambio, setIntercambio] = useState();//cambio entre euros y aed
    const [monto, setMonto] = useState(1);
    const [montoEnFromDivisa, setMontoEnFromDivisa] = useState(true);
   
    
    let toMonto, fromMonto
    if(montoEnFromDivisa){
      fromMonto = monto
      toMonto = monto * intercambio
    } else {
      toMonto = monto
      fromMonto = monto / intercambio
    }
    
    useEffect( () => {
        fetch(UrlBase)
        .then(res => res.json())
        .then(data => {
          const primerDivisa = Object.keys(data.rates)[0]
          setTipoDeDivisa([data.base, ...Object.keys(data.rates)])
          setFromDivisa(data.rates)
          setToDivisa(primerDivisa)
          setIntercambio(data.rates[primerDivisa])
        })
    }, [])
   
 
  function handleFromMontoChange(e) {
    setMonto(e.target.value)
    setMontoEnFromDivisa(true)
  }  

  function handleToMontoChange(e) {
    setMonto(e.target.value)
    setMontoEnFromDivisa(false)
  } 

  return (
      <div className='divisa'>
        <div className='sub-divisa'>
        <h1>Convertidor</h1>
        <Divisa 
          tipoDeDivisa={tipoDeDivisa} 
          selectDivisa={fromDivisa} 
          onChangeDivisa={e => setFromDivisa(e.target.value)}
          onChangeMonto={handleFromMontoChange}
          monto={fromMonto}
          />
          
        <p>=</p>
        <Divisa 
          tipoDeDivisa={tipoDeDivisa} 
          selectDivisa={toDivisa} 
          onChangeDivisa={e => setToDivisa(e.target.value)}
          onChangeMonto={handleToMontoChange}
          monto={toMonto}
          />
          </div>
      </div>
  )
}
