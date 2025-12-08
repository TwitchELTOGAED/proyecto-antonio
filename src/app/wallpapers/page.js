'use client';
import Header from '../components/Header';
import { datosWallpapers } from '../datos';

export default function WallpapersPage() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <Header />
      
     
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>WALLPAPERS</h2>
        
       
        <button 
            onClick={() => alert("Botón para subir fotos pulsado.")}
            style={{ 
                backgroundColor: 'red', 
                color: 'white', 
                border: 'none', 
                padding: '10px 20px', 
                borderRadius: '20px', 
                cursor: 'pointer', 
                fontWeight: 'bold' 
            }}
        >
            Compartir Foto
        </button>
      </div>
      
      

      
      <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '15px', 
          justifyContent: 'center',
          marginTop: '20px'
      }}>
        {datosWallpapers.map((item) => (
            <img 
                key={item.id} 
                src={item.imagen} 
                alt="Wallpaper F1" 
                style={{ 
                    borderRadius: '10px', 
                    objectFit: 'cover',
                    border: '1px solid #444',
                    maxHeight: '300px' 
                }} 
            />
        ))}
      </div>
      
    </div>
  );
}