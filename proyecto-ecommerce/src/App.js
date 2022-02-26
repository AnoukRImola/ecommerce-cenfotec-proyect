import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Formulario from "./Components/Formulario";
import Home from "./Components/Home";
import Mujer from "./Components/Mujer";
import Hombre from "./Components/Hombre";


function App() {
  return (
    <div className="App">
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="contacto" element={<Formulario />} />
        <Route path="mujer" element={<Mujer />} />
        <Route path="hombre" element={<Hombre />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
