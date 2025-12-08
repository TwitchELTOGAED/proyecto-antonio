import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>PROYECTO DI - ENTREGA 2</h1>
      <p>Selecciona una página:</p>
      
      <ul>
        <li><Link href="/login">1. Login</Link></li>
        <li><Link href="/signup">2. Registro </Link></li>
        <br/>
        <li><Link href="/dashboard">3. Dashboard </Link></li>
        <br/>
        
        <li><Link href="/noticias">4. Solo Noticias </Link></li>
        <li><Link href="/noticia-detalle">5. Noticia Ampliada </Link></li>

        <br/>
        <li><Link href="/foro">6. Foro </Link></li>
        <li><Link href="/foro-detalle">7. Foro Detalle </Link></li>
        <br/>
        <li><Link href="/wallpapers">8. Wallpapers </Link></li>

        <br/>
        <li><Link href="/perfil">9. Perfil de Usuario</Link></li>

      </ul>

      
    </div>
  );
}