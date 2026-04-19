'use client';

import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import NewsCard from '../components/NewsCard';
import Link from 'next/link';

export default function Home() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    
    fetch('/api/noticias')
      .then(res => res.json())
      .then(data => {
        if (data) {
          
          setNoticias(data.slice(0, 3));
        }
      })
      .catch(err => console.error("Error al cargar noticias:", err));
  }, []);

  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          
          <div className="lg:col-span-8">
            <SectionTitle title="Últimas Noticias" />
            
            <div className="flex flex-col gap-4">
              {noticias.length === 0 ? (
                <p className="text-gray-400">Cargando noticias de la pista...</p>
              ) : (
                noticias.map((noticia) => (
                  <div key={noticia.id} className="block hover:scale-[1.01] transition-transform">
                    <NewsCard 
                      id={noticia.id} 
                      title={noticia.titulo}
                      excerpt={noticia.contenido.substring(0, 120) + '...'} 
                      category="Actualidad"
                      image={noticia.imagen || "/fernando-alonso-aston-martin.webp"} 
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          
          <aside className="lg:col-span-4 flex flex-col gap-10">
            
            <div>
              <SectionTitle title="Foro" />
              <div className="bg-[#2E2E2E] rounded-2xl p-6 border border-white/5">
                <ul className="space-y-6">
                  <li className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                    <Link href="/foro" className="hover:text-[#E10600] transition-colors">
                      <h4 className="font-bold text-md mb-1">¿Es Aston Martin candidato al título en 2026?</h4>
                      <p className="text-xs text-gray-400">Por: Usuario33 • Hace 2h</p>
                    </Link>
                  </li>
                  <li className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                    <Link href="/foro" className="hover:text-[#E10600] transition-colors">
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