import SectionTitle from '../components/SectionTitle';
import NewsCard from '../components/NewsCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-racing-cream pb-20">
      
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-10">
        
       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
         
          <div className="lg:col-span-8">
            <SectionTitle title="Últimas Noticias" />
            
            <div className="flex flex-col gap-2">
              
              <NewsCard 
                title='En Aston Martin ven el AMR26 "a otro nivel" '
                excerpt="Neil Zambardi-Christie, líder de fabricación, recuerda que es su primer coche con Adrian Newey."
                category="Pretemporada"
                image="/fernando-alonso-aston-martin.webp"
              />
              
             
              <NewsCard 
                title='Fernando Alonso, al bajarse del AMR26 por primera vez: "Es emocionante" '
                excerpt='Fernando Alonso ya sabe lo que es conducir el Aston Martin AMR26. El asturiano se ha subido por primera al monoplaza diseñado por Adrian Newey.'
                category="ASTON MARTIN"
                image="/fernando-alonso-newey.webp"
              />

              
              <NewsCard 
                title="Así fue el shakedown de la F1 en Barcelona para la parrilla de 2026"
                excerpt="La complejidad de la revisión reglamentaria de la F1 para 2026 es tal que los equipos solicitaron un shakedown adicional, para preparar el inicio de la temporada."
                category="Pretemporada"
                image="/andrea-kimi-antonelli-mercedes.webp"
              />
            </div>
          </div>

          
          <aside className="lg:col-span-4 flex flex-col gap-10">
            
           
            <div>
              <SectionTitle title="Foro" />
              <div className="bg-racing-gray rounded-2xl p-6 border border-white/5">
                <ul className="space-y-6">
                  <li className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                    <Link href="/foro-detalle" className="hover:text-racing-red transition-colors">
                      <h4 className="font-bold text-md mb-1">¿Es Aston Martin candidato al título en 2026?</h4>
                      <p className="text-xs text-gray-400">Por: Usuario33 • Hace 2h</p>
                    </Link>
                  </li>
                  <li className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                    <Link href="/foro-detalle" className="hover:text-racing-red transition-colors">
                      <h4 className="font-bold text-md mb-1">El GP de Madrid no me gusta...</h4>
                      <p className="text-xs text-gray-400">Por: F1Fan_ES • Hace 5h</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

           
            <div>
              <SectionTitle title="Wallpapers" />
              <div className="grid grid-cols-2 gap-4">
                 
                 
                 <Link href="/wallpapers" className="block aspect-square rounded-xl overflow-hidden bg-gray-800 relative group cursor-pointer">
                    <img 
                        src="/Russel_Mercedes_Debut.jpeg" 
                        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" 
                        alt="Wallpaper Mercedes"
                    />
                 </Link>

                 
                 <Link href="/wallpapers" className="block aspect-square rounded-xl overflow-hidden bg-gray-800 relative group cursor-pointer">
                    <img 
                        src="/Ferrari_Leclerc2026.jpeg" 
                        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" 
                        alt="Wallpaper Ferrari"
                    />
                 </Link>

              </div>
            </div>

          </aside>
        
        </div>
      </div>
    </main>
  );
}