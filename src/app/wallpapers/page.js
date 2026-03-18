'use client';

import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { supabase } from '../lib/supabase';

export default function WallpapersPage() {
  const [wallpapers, setWallpapers] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  
  
  const [admin, setAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  
  const [titulo, setTitulo] = useState('');
  const [fotografo, setFotografo] = useState('');
  const [imagen, setImagen] = useState('');

  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      const role = localStorage.getItem('userRole');
      if (role === 'admin') setAdmin(true);
    }

    
    const obtenerUsuario = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUserEmail(data.user.email);
      }
    };
    obtenerUsuario();

    
    fetch('/api/wallpapers')
      .then((res) => res.json())
      .then((data) => setWallpapers(data || []));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await fetch('/api/wallpapers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        titulo, 
        fotografo: fotografo || 'Anónimo', 
        imagen,
        user_email: userEmail 
      })
    });
    
    setTitulo(''); setFotografo(''); setImagen('');
    setMostrarFormulario(false);
    
    const res = await fetch('/api/wallpapers');
    const data = await res.json();
    setWallpapers(data || []);
  };

  const borrarWallpaper = async (id) => {
    if (!window.confirm("¿Seguro que quieres borrar esta imagen?")) return;
    await fetch(`/api/wallpapers?id=${id}`, { method: 'DELETE' });
    
    const res = await fetch('/api/wallpapers');
    const data = await res.json();
    setWallpapers(data || []);
  };

  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        <div className="flex justify-between items-end mb-8">
          <SectionTitle title="Wallpapers F1" />
          
         
          {userEmail && (
            <button 
              onClick={() => setMostrarFormulario(!mostrarFormulario)}
              className="bg-[#E10600] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm transition-colors uppercase"
            >
              {mostrarFormulario ? "Cancelar" : "+ Subir Imagen"}
            </button>
          )}
        </div>

        {mostrarFormulario && userEmail && (
          <form onSubmit={handleSubmit} className="bg-[#2E2E2E] p-6 rounded-xl mb-8 border border-[#E10600]/50">
            <h3 className="text-xl font-bold mb-4 text-white">Compartir nuevo Wallpaper</h3>
            <div className="space-y-4">
              <input type="text" required placeholder="Título (Ej: Ferrari Monza)" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#E10600]" />
              <input type="text" placeholder="Fotógrafo / Autor (Opcional)" value={fotografo} onChange={(e) => setFotografo(e.target.value)} className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#E10600]" />
              <input type="text" required placeholder="URL de la imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#E10600]" />
              <button type="submit" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors uppercase text-sm w-full">
                Publicar Wallpaper
              </button>
            </div>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wallpapers.length === 0 ? (
            <p className="text-gray-400 col-span-full">No hay wallpapers todavía. ¡Sé el primero en subir uno!</p>
          ) : (
            wallpapers.map((wp) => {
              
              const esPropietario = userEmail === wp.user_email;
              const puedeBorrar = admin || esPropietario;

              return (
                <div key={wp.id} className="relative group overflow-hidden rounded-xl bg-[#2E2E2E]">
                  <img src={wp.imagen} alt={wp.titulo} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">{wp.titulo}</h3>
                    <p className="text-gray-300 text-xs">📸 {wp.fotografo}</p>
                  </div>

                 
                  {puedeBorrar && (
                    <button 
                      onClick={() => borrarWallpaper(wp.id)}
                      className="absolute top-4 right-4 bg-black/80 hover:bg-[#E10600] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10"
                      title="Borrar Imagen"
                    >
                      🗑️
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </main>
  );
}