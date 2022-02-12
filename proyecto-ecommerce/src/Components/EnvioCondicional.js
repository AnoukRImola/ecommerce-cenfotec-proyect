

const EnvioCondicional = () => {

    const zona = ["San José", "Heredia", "Cartago"]

    const condicion = (props) =>{
        
        if ( props.name == "Sara" ) {
            return alert("pruebasi");
          }
          return alert("pruebano");{
        }
    }

    const Botton = () =>{
        return(
            <>
            <button class="dropdown-item" type="button">San José</button>
            </>
        )
    }
    

  return (
    <div>
      <p>Envío gratis***</p>
    <div class="dropdown">
     <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
        Selecciona tu zona:
     </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li><button class="dropdown-item" name="Sara" type="button"  onClick={condicion}>San José</button></li>
        <li><button class="dropdown-item" type="button">Heredia</button></li>
        <li><button class="dropdown-item" type="button" onClick={condicion}>Cartago</button></li>
        <li><button class="dropdown-item" type="button">Limón</button></li>
        <li><button class="dropdown-item" type="button">Puntarenas</button></li>
        <li><button class="dropdown-item" type="button">Guanacaste</button></li>
    </ul>
   </div>
    </div>
  );
};

export default EnvioCondicional;
