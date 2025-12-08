'use client'; // OBLIGATORIO porque usamos useState
import { useState } from 'react';
import Link from 'next/link'; // Para poder volver al login si ya tienes cuenta

export default function SignupPage() {
  
  // Definimos los estados para el registro
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const handleRegistro = (e) => {
    e.preventDefault();

    if (!nombre || !usuario || !email || !password) {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    
    if (password !== confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    
    alert("¡Usuario " + usuario + " registrado con éxito!");
    
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>CREAR CUENTA - DELTA TIME</h1>
      <hr />

      <form onSubmit={handleRegistro}>
        
        <label>Nombre Completo: </label>
        <input 
            type="text" 
            value={nombre} 
            onChange={e => setNombre(e.target.value)}
        />
        <br/><br/>

        <label>Nombre de Usuario (Nick): </label>
        <input 
            type="text" 
            value={usuario} 
            onChange={e => setUsuario(e.target.value)}
        />
        <br/><br/>

        <label>Correo Electrónico: </label>
        <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
        />
        <br/><br/>

        <label>Contraseña: </label>
        <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
        />
        <br/><br/>

        <label>Repetir Contraseña: </label>
        <input 
            type="password" 
            value={confirmar} 
            onChange={e => setConfirmar(e.target.value)}
        />
        <br/><br/>

        <button type="submit">REGISTRARSE</button>
      </form>

      <br />
      <p>¿Ya tienes cuenta?</p>
      {/* Enlace para ir al Login sin recargar la página */}
      <Link href="/login">Ir a Iniciar Sesión</Link>

    </div>
  );
}