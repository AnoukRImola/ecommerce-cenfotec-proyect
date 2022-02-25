import React, { Component } from "react";


class Listado extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { zonas } = this.props;
    return (
      <ul style={{listStyleType: "none"}}>
        {zonas.map((zona) => (
          <li key={zona}>{zona} </li>
        ))}
      </ul>
    );
  }
}

class EnvioCondicional extends Component {
  constructor(props) {
    super(props);
    this.state ={
      mostrarListado:false
    };
  }

  showListado(){
    this.setState({mostrarListado: !this.state.mostrarListado});
  }

  renderListado(zonas){
    const {mostrarListado} = this.state;
    if (mostrarListado) {
      return <Listado zonas={zonas}/>
    } else {
    }
  }
  render() {
    const zonas = [
      "San Jose",
      "Heredia",
      "Cartago",
      "Alajuela"
    ];
    return (
    <div className="enviocondicional">
      <div style={{width: "30%"}}>
        {this.renderListado(zonas)}
        <button onClick={()=> this.showListado()}>ZONAS CON ENVIO GRATIS</button>
        </div>
    </div>
    );
  }
}

export default EnvioCondicional;
