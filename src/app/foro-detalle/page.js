'use client';
import Header from '../components/Header';

export default function ForoDetallePage() {
  return (
    <div>
      <Header />
      
      <div style={{ padding: '20px', backgroundColor: '#111', color: 'white', minHeight: '100vh' }}>
        
       
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ color: 'white' }}>FORO</h2>
            <button onClick={() => alert("Like dado ")}>Me Gusta</button>
        </div>
        <hr style={{ borderColor: 'red' }}/>

      
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h3>¿Es Aston Martin candidato al título en 2026?</h3>
            
            <img 
                src="https://objetos-xlk.estaticos-marca.com/uploads/2025/04/24/680a5327a47e3.jpeg" 
                alt="Foto Foro" 
                style={{ width: '100%', borderRadius: '10px', marginTop: '10px' }}
            />
            
            <div style={{ textAlign: 'left', marginTop: '15px' }}>
                <p style={{ color: '#aaa', fontSize: '12px' }}>Por: Usuario33</p>
                <p>
                    En 2026 entra en vigor el nuevo reglamento, y con Newey como 'motor' del equipo,
                    creo que Aston Martin debe de, al menos pelear por victorias y podios el año que viene.
                    Además está Fernando Alonso, que si tiene una mínima posibilidad, estará en la pelea.
                </p>
            </div>
        </div>

        <br/><br/>
        
      </div>
    </div>
  );
}