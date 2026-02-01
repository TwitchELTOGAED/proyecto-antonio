import SectionTitle from '../components/SectionTitle';
import Link from 'next/link';

export default function NoticiaDetalle() {
  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
       
        <div className="text-gray-400 text-sm mb-6 flex gap-2">
           <Link href="/home" className="hover:text-white">Inicio</Link> 
           <span>&gt;</span>
           <Link href="/noticias" className="hover:text-white">Noticias</Link>
           <span>&gt;</span>
           <span className="text-[#E10600]">AMR26</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          
          <article className="lg:col-span-8">
            
           
            <div className="mb-6">
               <span className="bg-[#E10600] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                 Pretemporada
               </span>
               <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 leading-tight">
                 EN ASTON MARTIN VEN EL AMR26 "A OTRO NIVEL": "EL TIEMPO DIRÁ"
               </h1>
               <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                 <span>Por: <strong>SoyMotor</strong></span>
                 <span>•</span>
                 <span>Hace 4 horas</span>
               </div>
            </div>

           
            <div className="w-full aspect-video bg-[#2E2E2E] rounded-2xl overflow-hidden mb-8 border border-gray-800">
               <img 
                 src="/fernando-alonso-aston-martin.webp" 
                 className="w-full h-full object-cover" 
                 alt="Fernando Alonso Aston Martin AMR26"
               />
            </div>

            
            <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
               <p className="font-medium text-white text-xl">
                 Neil Zambardi-Christie, líder de fabricación de Aston Martin, asegura que el nuevo monoplaza diseñado bajo la batuta de Adrian Newey supone un salto cualitativo evidente, aunque prefieren mantener la cautela.
               </p>
               
               <p>
                 La llegada de <strong>Adrian Newey</strong> a Silverstone ha marcado un antes y un después. Según fuentes internas del equipo, el AMR26 no es simplemente una evolución de sus predecesores, sino una reinterpretación completa aprovechando el cambio de reglamento de 2026.
               </p>

               <p>
                 <em>"Es mi primer coche trabajando con Adrian y se nota que está a otro nivel en cuanto a detalle y exigencia aerodinámica"</em>, comentaba Zambardi-Christie. El equipo ha trabajado a contrarreloj para integrar la nueva unidad de potencia de Honda, un desafío que ha requerido rediseñar gran parte del chasis trasero.
               </p>

               <p>
                 A pesar del optimismo que se respira en la nueva fábrica, desde la dirección técnica piden calma. <em>"El túnel de viento dice cosas muy buenas, pero la pista es el único juez real. El tiempo dirá dónde estamos respecto a Red Bull y Ferrari"</em>, concluyen desde el equipo verde. Fernando Alonso ya ha probado el simulador y sus primeras impresiones parecen confirmar las buenas sensaciones.
               </p>
            </div>

            
            <div className="mt-10 pt-6 border-t border-gray-800 flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-[#2E2E2E] rounded-full hover:bg-[#E10600] transition-colors font-bold text-sm uppercase group">
                   <span>❤️</span> <span className="group-hover:text-white">Me gusta</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-[#2E2E2E] rounded-full hover:bg-white hover:text-black transition-colors font-bold text-sm uppercase">
                   🔗 Compartir
                </button>
            </div>
          </article>

          
          <aside className="lg:col-span-4 space-y-10">
             
             
             <div>
                <SectionTitle title="Debate Activo" />
                <div className="bg-[#2E2E2E] p-6 rounded-2xl border border-white/5">
                   <Link href="/foro-detalle" className="block group mb-6">
                      <h4 className="font-bold text-lg mb-1 group-hover:text-[#E10600] transition-colors">¿Será el AMR26 el coche ganador?</h4>
                      <p className="text-xs text-gray-400">84 respuestas • Hace 1h</p>
                   </Link>
                   
                   <Link href="/foro-detalle" className="block group">
                      <h4 className="font-bold text-lg mb-1 group-hover:text-[#E10600] transition-colors">Honda vs Ford: La batalla de motores</h4>
                      <p className="text-xs text-gray-400">32 respuestas • Hace 3h</p>
                   </Link>
                </div>
             </div>

             
             <div className="bg-gradient-to-br from-[#E10600] to-red-900 p-8 rounded-2xl text-center shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-bold text-2xl uppercase italic mb-2 text-white">ÚNETE AL EQUIPO</h3>
                  <p className="text-sm text-white/90 mb-4">Regístrate para comentar y unirte a la comunidad!</p>
                  <Link href="/signup">
                    <button className="bg-white text-[#E10600] px-6 py-2 rounded-full font-bold text-sm uppercase hover:scale-105 transition-transform">
                      Crear Cuenta
                    </button>
                  </Link>
                </div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
             </div>

          </aside>

        </div>
      </div>
    </main>
  );
}