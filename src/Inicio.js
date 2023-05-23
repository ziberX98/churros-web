import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./inicio.css";
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/brands.css';

const Inicio = () => {
  return (
    <div className="contenedor">
      <div className="bgimg">
        <div className="bgtitulo">
          <h1 className="titulo1">Somos Churrolicius</h1>
        </div>
      </div>

      <div className="shadowcontainer shadowback">
        <div className="descripcion1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
            nulla odio. Nulla facilisi. Quisque ultricies sem a metus pulvinar,
            congue commodo nisi gravida. Cras a dignissim arcu.
          </p>
          <p className="desciwsp">
            whatsapp al:<span className="num"> 3111111111</span>
          </p>
          <div className="buttonwspbox">
          <button type="button" className="btn btn-success custombtn">Contactar
          <i class="fa-brands fa-whatsapp ms-2"></i>
          </button>
          </div>
          <p className="descrizona">Bucaramanga:</p>
          <p className="d">Cra 34 #44-44, Cabecera</p>
          
        </div>
      </div>
    </div>
  );
};

export default Inicio;
