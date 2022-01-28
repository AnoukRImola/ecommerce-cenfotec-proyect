import Nav from "./Components/Nav";
import logo from "./Assets/logo.png"

function App() {
  return (
    <div className="App">
      <Nav />
      <img src={logo} alt="logo" />  
    </div>
  );
}

export default App;
