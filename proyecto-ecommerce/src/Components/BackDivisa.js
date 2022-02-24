import React, {useEffect} from 'react';
import Divisa from "./Divisa";

const UrlBase = 'http://api.exchangeratesapi.io/v1/latest?access_key=27617e6680f44c3208a8a2eacb8883d3'

export default function BackDivisa() {

    useEffect( () => {
        fetch(UrlBase)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

  return (
      <div>
        <div>Convertidor</div>
        <Divisa />
        <p>=</p>
        <Divisa />
      </div>
  )
}
