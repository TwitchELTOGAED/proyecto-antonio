import SectionTitle from '../components/SectionTitle';
import Link from 'next/link';

export default function ForoDetallePage() {
  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
       
        <Link href="/foro" className="inline-flex items-center text-gray-400 hover:text-white mb-6 text-sm transition-colors">
          ← Volver al Foro
        </Link>

        
        <SectionTitle title="Foro" />

        
        <article className="bg-[#2E2E2E] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
          
          
          <div className="p-8 pb-4">
             <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  ¿Es Aston Martin candidato al título en 2026?
                </h1>
               
                <button className="text-gray-400 hover:text-[#E10600] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
             </div>
             
             
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center font-bold text-xs">U33</div>
                <div>
                   <p className="text-sm font-bold text-white">Por: Usuario33</p>
                   <p className="text-xs text-gray-400">Hace 2 horas</p>
                </div>
             </div>
          </div>

          
          <div className="w-full aspect-video md:aspect-[21/9] bg-gray-800 relative">
             <img 
               src="/alonso-newey-soymotor.jpeg" 
               alt="Alonso y Newey" 
               className="w-full h-full object-cover opacity-90"
             />
          </div>

          
          <div className="p-8 space-y-6 text-gray-300 leading-relaxed text-lg">
             <p>
               En 2026 entra en vigor el nuevo reglamento, y con <strong className="text-white">Newey como 'motor' del equipo</strong>, creo que Aston Martin debe de, al menos, pelear por victorias y podios el año que viene...
             </p>
             <p>
               Además está <strong>Fernando Alonso</strong>, que si tiene una mínima posibilidad, estará en la pelea. La inversión de Lawrence Stroll y la nueva fábrica deberían empezar a dar sus frutos reales más allá de los destellos que hemos visto hasta ahora.
             </p>
             <p>
               ¿Vosotros qué pensáis? ¿Será Honda un socio fiable o volveremos a la época de McLaren?
             </p>
          </div>

         
          <div className="px-8 pb-8 pt-4 border-t border-white/5 flex gap-4">
             <button className="bg-[#E10600] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 uppercase text-sm tracking-wider">
               Responder
             </button>
             <button className="bg-transparent border border-gray-600 hover:border-white text-white font-bold py-3 px-8 rounded-full transition-colors uppercase text-sm">
               Compartir
             </button>
          </div>

        </article>

       
        <div className="mt-12">
           <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-800 pb-2">Comentarios (2)</h3>
           
           <div className="space-y-6">
              
              <div className="bg-[#1A1A1A] p-6 rounded-xl flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-green-700 flex-shrink-0 flex items-center justify-center font-bold text-xs">F1</div>
                 <div>
                    <p className="text-sm font-bold text-white mb-1">Fan_Alonso_14 <span className="text-gray-500 font-normal ml-2 text-xs">Hace 1 hora</span></p>
                    <p className="text-gray-400 text-sm">Ojalá sea así, pero me preocupa que el motor Honda llegue verde. Red Bull ha dejado el listón muy alto.</p>
                 </div>
              </div>

              
              <div className="bg-[#1A1A1A] p-6 rounded-xl flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-purple-700 flex-shrink-0 flex items-center justify-center font-bold text-xs">MV</div>
                 <div>
                    <p className="text-sm font-bold text-white mb-1">MaxVerstappenFan <span className="text-gray-500 font-normal ml-2 text-xs">Hace 30 min</span></p>
                    <p className="text-gray-400 text-sm">Newey es un genio, pero no hace milagros el primer año. Yo creo que 2027 será su año.</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}