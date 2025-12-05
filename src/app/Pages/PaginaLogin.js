'use client'; 
import { useState } from 'react';

export default function PaginaLogin() {
  
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [edad, setEdad] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const handleEntrar = (e) => {
    e.preventDefault(); 

    if(password !== confirmar) {
        alert("Las contraseñas no son iguales");
        return;
    }

    alert("Bienvenido, " + usuario);
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      
      <form>
        <label>Correo: </label>
        <input type="email" value={correo} onChange={e => setCorreo(e.target.value)}/>
        <br/><br/>

        <label>Usuario: </label>
        <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <br/><br/>

        <label>Edad: </label>
        <input type="number" value={edad} onChange={e => setEdad(e.target.value)}/>
        <br/><br/>

        <label>Contraseña: </label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <br/><br/>

        <label>Repetir Contraseña: </label>
        <input type="password" value={confirmar} onChange={e => setConfirmar(e.target.value)}/>
        <br/><br/>

        <button type="button" onClick={handleEntrar}>ENTRAR</button>
      </form>
    </div>
  );
}