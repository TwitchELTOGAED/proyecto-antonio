import Header from '../components/Header';
import Card from '../components/Card';
import { misNoticias } from '../datos'; // Traemos los datos

export default function PaginaPrincipal() {
  return (
    <div>
      <Header />

      <h2>Últimas Noticias</h2>

      {/* Aquí recorremos la lista de noticias */}
      <div>
        {misNoticias.map((item) => (
            <Card 
                key={item.id}
                titulo={item.titulo}
                descripcion={item.descripcion}
                categoria={item.categoria}
            />
        ))}
      </div>
    </div>
  );
}