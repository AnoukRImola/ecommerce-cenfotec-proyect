import React, { Component } from "react";

class Listado extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { zonas } = this.props;
    return (
      <ul>
        {zonas.map((zona) => (
          <li>Esra es la zona de {zona} </li>
        ))}
      </ul>
    );
  }
}

class EnvioCondicional extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const zonas = [
      "San Jose",
      "Heredia",
      "Cartago",
      "Alajuela",
      "Limón",
      "Puntarenas",
      "Guanacaste",
    ];
    return (
    <div>
        <Listado zonas={zonas} />
        <button onClick={()=> this.setState()}={}></button>
    </div>
    );
  }
}

export default EnvioCondicional;