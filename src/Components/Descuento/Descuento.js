import React, { Component } from "react";
import "../Descuento/Descuento.css"

class Descuento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conteo: 300,
    };
  }
  render() {
    const { conteo } = this.state;
    return (
      <div className="descuento">
        <p>
          Aprovechá los segundos que quedan para aprovechar un descuento del 30% <br/>{" "}
          {conteo}s
        </p>
      </div>
    );
  }
  componentDidMount(){
      this.intervalo = setInterval(()=>{
          this.setState(prevState => ({
              conteo: prevState.conteo -1
          }))
      },1000)
  }
  componentWillUnmount(){
      clearInterval(this.intervalo)
  }
}

export default Descuento;
