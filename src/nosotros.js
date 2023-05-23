import "./nosotros.css";

function Nosotros() {
  return (
    <div className="boxcontainer">
      <div className="bgimgnos">
        <div className="bgtitulo">
          <h1 className="titulo1">Tu beneficio es nuestra prioridad</h1>
        </div>
      </div>
      <div className="boxdescri">
        <div className="descripcionos">
          <div className="mision">
            <h2>Misión</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              nulla odio.
            </p>
          </div>
          <div className="vision">
            <h2>Visión</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              nulla odio.
            </p>
          </div>
        </div>
        <div className="imgnos">
          <img src="/Licius.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
