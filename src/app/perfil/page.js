'use client'; 
import { useState } from 'react';
import Header from '../components/Header';

export default function PerfilPage() {
  
  
  const [usuario] = useState({
    nick: "Usuario14",
    password: "password123", 
    contribuciones: 33
  });

  return (
    <div style={{ padding: '20px', backgroundColor: '#111', color: 'white', minHeight: '100vh' }}>
      <Header />
      
      <h2>PERFIL</h2>
      
      <hr style={{ borderColor: 'red' }}/>

      
      <div style={{ 
          backgroundColor: '#222', 
          padding: '20px', 
          borderRadius: '15px', 
          maxWidth: '600px', 
          margin: '20px auto' 
      }}>

        
        <h3 style={{ borderBottom: '2px solid red', display: 'inline-block' }}>
            INFORMACIÓN PERSONAL
        </h3>
        
        <div style={{ 
            backgroundColor: 'white', 
            color: 'black', 
            padding: '20px', 
            borderRadius: '10px',
            marginTop: '10px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                
                <div style={{ fontSize: '50px' }}>👤</div>
                
                <div style={{ width: '100%' }}>
                    <p><strong>Nombre de usuario:</strong> {usuario.nick}</p>
                    <p><strong>Contraseña:</strong> *******</p>
                    <p><strong>Contribuciones en la comunidad:</strong> {usuario.contribuciones}</p>
                </div>
            </div>

            
            <div style={{ textAlign: 'right', marginTop: '10px' }}>
                <button 
                    onClick={() => alert("Modo edición 'activado' (Simulado)")}
                    style={{ 
                        backgroundColor: 'red', 
                        color: 'white', 
                        border: 'none', 
                        padding: '5px 15px', 
                        borderRadius: '15px', 
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    EDITAR
                </button>
            </div>
        </div>

        <br/>

        
        <h3 style={{ borderBottom: '2px solid red', display: 'inline-block' }}>
            FAVORITOS DEL USUARIO
        </h3>

        <div style={{ 
            backgroundColor: 'white', 
            color: 'black', 
            padding: '20px', 
            borderRadius: '10px',
            marginTop: '10px',
            minHeight: '100px'
        }}>
            <p style={{ color: '#555' }}>
                Todavía no tienes favoritos, cuando marques algo como favorito, aparecerá aquí.
            </p>
        </div>

      </div>
    </div>
  );
}