import "./ModalUser.css";

function ModalUser({ visible, toggle }) {
  var x = document.getElementById("login")
  var y = document.getElementById("register")
  var z = document.getElementById("btnn")
  const cancelar = (e) => {
    e.preventDefault();
    toggle();
  };
  const login=()=>{
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px"
  }
  const register=()=>{
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px"

  }

  return (
    <div>
      <div className="modalcontainer" style={{ display: visible ? "flex" : "none" }}
      >
        <div className="loginbox">
            <div className="botton-box">
              <div id="btnn"></div>
              <button onClick={login} className="bttn">Iniciar</button>
              <button onClick={register} className="bttn">Registro</button>
            </div>
            <form id="login" className="formbox">
              <input type="text" className="input" placeholder="Email" required />
              <input type="text" className="input" placeholder="Contraseña" required />
              <input type="checkbox" className="checkbox"/><span>Recordar</span>
              <button type="submit" className="iniciobtn">Iniciar</button>
              <button className="btncancelar" onClick={cancelar}>Volver</button>
            </form>
            <form id="register" className="formbox">
              <input type="text" className="input" placeholder="Email" required />
              <input type="text" className="input" placeholder="Cedula" required />
              <input type="text" className="input" placeholder="Contraseña" required />
              <input type="checkbox" className="checkbox"/><span>Acepto los terminos</span>
              <button type="submit" className="iniciobtn">Registrarse</button>
              <button className="btncancelar" onClick={cancelar}>Volver</button>
            </form>
            
        </div>
      </div>
    </div>
  );
}
export default ModalUser;
