import React from 'react'

const Divisa = (props)=> {
  
  const {tipoDeDivisa, 
         selectDivisa,
         onChangeDivisa,
         onChangeMonto,
         monto
  } = props

  return (
    <div>
      <input type="number" value={monto} onChange={onChangeMonto}/>
      <select value={selectDivisa} onChange={onChangeDivisa}>
        {tipoDeDivisa.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
        
      </select>
    </div>
  )
}

export default Divisa;