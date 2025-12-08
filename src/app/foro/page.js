'use client';
import Link from 'next/link';
import Header from '../components/Header';
import { datosForo } from '../datos'; 

export default function ForoPage() {
  return (
    <div style={{ padding: '20px' }}>
      <Header />
      
      <h2>FORO</h2>
      

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
       
        {datosForo.map((item) => (
          <div key={item.id} style={{ 
              backgroundColor: '#1a1a1a', 
              color: 'white', 
              padding: '15px', 
              marginBottom: '15px', 
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
          }}>
           
            <img src={item.imagen} alt="tema" style={{ width: '100px', borderRadius: '5px' }} />
            
            <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{item.titulo}</h3>
                <p style={{ margin: 0, fontSize: '12px', color: '#ccc' }}>{item.descripcion}</p>
            </div>
          </div>
        ))}

       
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button 
                onClick={() => alert("Abriendo formulario para crear post...")}
                style={{ 
                    backgroundColor: 'red', 
                    color: 'white', 
                    padding: '10px 30px', 
                    border: 'none', 
                    borderRadius: '20px', 
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}
            >
                Publicar
            </button>
        </div>

      </div>
    </div>
  );
}