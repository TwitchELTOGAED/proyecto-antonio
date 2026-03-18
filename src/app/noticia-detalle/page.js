'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '../lib/supabase'; 
import Link from 'next/link';

export default function NoticiaDetallePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); 
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    const fetchNoticia = async () => {
      
      const { data, error } = await supabase
        .from('noticias')
        .select('*')
        .eq('id', id)
        .single();
        
      if (data) setNoticia(data);
      setLoading(false);
    };
    
    fetchNoticia();
  }, [id]);

  if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center font-bold">Cargando noticia...</div>;
  if (!noticia) return <div className="min-h-screen bg-black text-white flex items-center justify-center font-bold">Noticia no encontrada.</div>;

  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        
        <Link href="/noticias" className="text-[#E10600] hover:text-white font-bold mb-6 inline-block uppercase text-sm tracking-wider transition-colors">
          ← Volver a Noticias
        </Link>

        <span className="block text-xs font-bold text-[#E10600] uppercase tracking-wider mb-4">
          {noticia.autor}
        </span>
        
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
          {noticia.titulo}
        </h1>

        <img 
          src={noticia.imagen} 
          alt={noticia.titulo} 
          className="w-full h-auto rounded-xl mb-10 object-cover border border-gray-800"
        />

        
        <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
          {noticia.contenido}
        </div>
        
      </div>
    </main>
  );
}