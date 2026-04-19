'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '../lib/supabase'; 
import Link from 'next/link';
import { Suspense } from 'react';

function ForoDetalleContenido() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); 
  const [tema, setTema] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    const fetchTema = async () => {
      
      const { data, error } = await supabase
        .from('foro_temas')
        .select('*')
        .eq('id', id)
        .single();
        
      if (data) setTema(data);
      setLoading(false);
    };
    
    fetchTema();
  }, [id]);

  if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center font-bold">Cargando debate...</div>;
  if (!tema) return <div className="min-h-screen bg-black text-white flex items-center justify-center font-bold">Tema no encontrado.</div>;

  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        
        <Link href="/foro" className="text-[#E10600] hover:text-white font-bold mb-6 inline-block uppercase text-sm tracking-wider transition-colors">
          ← Volver al Foro
        </Link>

        <div className="bg-[#2E2E2E] p-8 rounded-xl border border-gray-800 shadow-xl">
          <span className="block text-xs font-bold text-[#E10600] uppercase tracking-wider mb-2">
            Publicado por: {tema.user_email || 'Anónimo'}
          </span>
          
          <h1 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            {tema.titulo}
          </h1>

          <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
            {tema.contenido}
          </div>
        </div>
        
      </div>
    </main>
  );
}

export default function ForoDetalle() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-20 text-center">Cargando...</div>}>
      <ForoDetalleContenido />
    </Suspense>
  );
}