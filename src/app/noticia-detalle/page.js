'use client'; 

import Header from '../components/Header';

export default function NoticiaDetallePage() {
  return (
    <div>
      <Header />

      <div style={{ padding: '20px', maxWidth: '800px' }}>
        
       
        <h1 style={{ color: 'red' }}>VERSTAPPEN A POR LA REMONTADA</h1>
        
        <img 
            src="https://preview.redd.it/game-is-still-on-after-double-dsq-of-mcl39-las-vegas-gp-v0-z4eabobi553g1.jpeg?width=1080&crop=smart&auto=webp&s=2d0ec7be2743cb479ec0cff93455a95b87b1a4b9"
            alt="Verstappen ganando" 
            style={{ width: '100%', maxWidth: '600px', display: 'block', marginBottom: '20px' }} 
        />

        
        <p>
            La sombra amenazadora de Max Verstappen planea sobre el box papaya. 
            Una sombra amenazadora que coloca a Zak Brown y Andrea Stella en un auténtico dilema.
        </p>
        <p>
            Si imponen órdenes, un piloto quedará enfadado. Si no las imponen como hasta ahora,
            Max Verstappen puede salir beneficiado en el río revuelto de Woking.
        </p>

        <br/>
    
        <button onClick={() => alert("Le has dado like!")}>
             Me gusta
        </button>

      </div>

      <hr/>

    </div>
  );
}