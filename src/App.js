import "./App.css";
import React, {useState} from "react"
import Inicio from "./Inicio";
import Nosotros from "./nosotros";
import Productos from "./productos";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/regular.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import ModalUser from "./components/ModalUser";

function App() {

  const [visible, setVisible] = useState(false)

  const toggle = () => setVisible(!visible)

  return (
    <div className="App">
      <ModalUser visible={visible} toggle={toggle}/>

      <div className="logonav">
        <div className="topbar">
          <div className="redes">
            <i class="fa-brands fa-instagram icon1"></i>
            <i class="fa-brands fa-facebook icon2"></i>
          </div>
          <img className="imglogo" src="/Licius1.png"></img>
          <i onClick={toggle} class="fa-solid fa-user icon3"></i>
        </div>
      </div>
      <BrowserRouter className="App-header">
        <nav class="nav-principal">
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/nosotros">Ubicación</Link>
        </nav>

        <Routes>
          <Route path="/productos" element={<Productos />} />
          <Route path="/inicio" element={<App />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
