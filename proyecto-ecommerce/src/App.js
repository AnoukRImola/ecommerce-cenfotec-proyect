import Nav from "./Components/Nav";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import Descuento from "./Components/Descuento";
import EnvioCondicional from "./Components/EnvioCondicional";
import Formulario from "./Components/Formulario";



function App() {
  return (
    <div className="App">
      <Nav />
      <Descuento/>
      <Section />
      <hr/>
      <EnvioCondicional/>
      <hr/>
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
