'use client'; 
import Header from '../components/Header';
import Card from '../components/Card';
import { datosNoticias } from '../datos'; 

export default function NoticiasPage() {
  return (
    <div style={{ padding: '20px' }}>
      <Header />
      
      <h2>SECCIÓN DE NOTICIAS</h2>
      
      <div>
        {datosNoticias.map((item) => (
          <div key={item.id} style={{ marginBottom: '30px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            
           
            <Card 
              titulo={item.titulo}
              descripcion={item.descripcion}
              imagen={item.imagen}
            />
           

          </div>
        ))}
      </div>
    </div>
  );
}