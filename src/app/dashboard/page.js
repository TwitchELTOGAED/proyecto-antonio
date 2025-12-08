
import Header from '../components/Header';
import Card from '../components/Card';


import { datosNoticias, datosForo, datosWallpapers } from '../datos';

export default function DashboardPage() {
  return (
    <div>
      <Header />
      
      <h1>PÁGINA PRINCIPAL</h1>

      
      <div style={{ padding: '20px', borderBottom: '2px solid red' }}>
        <h2>ÚLTIMAS NOTICIAS</h2>
        {datosNoticias.map((item) => (
          <Card 
            key={item.id}
            titulo={item.titulo}
            descripcion={item.descripcion}
            imagen={item.imagen}
          />
        ))}
      </div>

      
      <div style={{ padding: '20px', borderBottom: '2px solid red' }}>
        <h2>FORO</h2>
        {datosForo.map((item) => (
          <Card 
            key={item.id}
            titulo={item.titulo}
            descripcion={item.descripcion}
           
          />
        ))}
      </div>

    
      <div style={{ padding: '20px' }}>
        <h2>WALLPAPERS</h2>
        {datosWallpapers.map((item) => (
          <Card 
            key={item.id}
            imagen={item.imagen}
           
          />
        ))}
      </div>

      <hr/>
      <footer>
        <p>2025 Delta Time F1</p>
      </footer>

    </div>
  );
}