'use client';

import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import NewsCard from '../components/NewsCard';

export default function NoticiasPage() {
  const [noticias, setNoticias] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [admin, setAdmin] = useState(false); 

  const [titulo, setTitulo] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [categoria, setCategoria] = useState('F1 2026');
  const [imagen, setImagen] = useState('');

  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      const role = localStorage.getItem('userRole');
      if (role === 'admin') {
        setAdmin(true); 
      }
    }

    fetch('/api/noticias')
      .then((res) => res.json())
      .then((data) => setNoticias(data || []));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await fetch('/api/noticias', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        titulo, 
        contenido: excerpt, 
        imagen: imagen || '/fernando-alonso-aston-martin.webp', 
        autor: categoria 
      })
    });
    
    setTitulo(''); setExcerpt(''); setCategoria('F1 2026'); setImagen('');
    setMostrarFormulario(false);
    
    const res = await fetch('/api/noticias');
    const data = await res.json();
    setNoticias(data || []);
  };

  const borrarNoticia = async (id) => {
    if (!window.confirm("¿Seguro que quieres borrar esta noticia?")) return;
    await fetch(`/api/noticias?id=${id}`, { method: 'DELETE' });
    
    const res = await fetch('/api/noticias');
    const data = await res.json();
    setNoticias(data || []);
  };

  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        <div className="flex justify-between items-end mb-8">
          <SectionTitle title="Todas las Noticias" />
          
          
          {admin && (
            <button 
              onClick={() => setMostrarFormulario(!mostrarFormulario)}
              className="bg-[#E10600] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm transition-colors uppercase"
            >
              {mostrarFormulario ? "Cancelar" : "+ Redactar Noticia"}
            </button>
          )}
        </div>

        {mostrarFormulario && admin && (
          <form onSubmit={handleSubmit} className="bg-[#2E2E2E] p-6 rounded-xl mb-8 border border-[#E10600]/50">
            <h3 className="text-xl font-bold mb-4 text-white">Publicar nueva noticia</h3>
            <div className="space-y-4">
              <input type="text" required placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#E10600]" />
              <input type="text" required placeholder="Resumen" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#E10600]" />
              <input type="text" placeholder="Categoría (Ej: Pretemporada)" value={categoria} onChange={(e) => setCategoria(e.target.value)} className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#E10600]" />
              <input type="text" placeholder="URL de la imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#E10600]" />
              <button type="submit" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors uppercase text-sm w-full">
                Publicar Noticia
              </button>
            </div>
          </form>
        )}

        <div className="flex flex-col gap-6">
          {noticias.length === 0 ? (
            <p className="text-gray-400">No hay noticias publicadas en este momento.</p>
          ) : (
            noticias.map((noticia) => (
              <div key={noticia.id} className="relative group">
                <NewsCard 
                  id={noticia.id}
                  title={noticia.titulo}
                  excerpt={noticia.contenido}
                  category={noticia.autor} 
                  image={noticia.imagen}
                />
                
                {admin && (
                  <button 
                    onClick={() => borrarNoticia(noticia.id)}
                    className="absolute top-4 right-4 bg-black/80 hover:bg-[#E10600] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10"
                    title="Borrar Noticia"
                  >
                    🗑️
                  </button>
                )}
              </div>
            ))
          )}
        </div>

      </div>
    </main>
  );
}