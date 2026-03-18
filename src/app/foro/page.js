'use client';

import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import Link from 'next/link';
import { supabase } from '../lib/supabase'; 

export default function ForoPage() {
  const [temas, setTemas] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  
  
  const [admin, setAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

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

   
    fetch('/api/foro')
      .then((res) => res.json())
      .then((data) => setTemas(data || []));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await fetch('/api/foro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        titulo, 
        contenido,
        user_email: userEmail || 'Anónimo'
      })
    });
    
    setTitulo(''); setContenido('');
    setMostrarFormulario(false);
    
    const res = await fetch('/api/foro');
    const data = await res.json();
    setTemas(data || []);
  };

  const borrarTema = async (id) => {
    if (!window.confirm("¿Seguro que quieres borrar este tema?")) return;
    await fetch(`/api/foro?id=${id}`, { method: 'DELETE' });
    
    const res = await fetch('/api/foro');
    const data = await res.json();
    setTemas(data || []);
  };

  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        <div className="flex justify-between items-end mb-8">
          <SectionTitle title="Foro de la Comunidad" />
          
          
          {userEmail && (
            <button 
              onClick={() => setMostrarFormulario(!mostrarFormulario)}
              className="bg-[#E10600] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm transition-colors uppercase"
            >
              {mostrarFormulario ? "Cancelar" : "+ Nuevo Tema"}
            </button>
          )}
        </div>

        {mostrarFormulario && userEmail && (
          <form onSubmit={handleSubmit} className="bg-[#2E2E2E] p-6 rounded-xl mb-8 border border-[#E10600]/50">
            <h3 className="text-xl font-bold mb-4 text-white">Crear nuevo tema</h3>
            <div className="space-y-4">
              <input type="text" required placeholder="Título del debate" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#E10600]" />
              <textarea required placeholder="Escribe tu mensaje aquí..." value={contenido} onChange={(e) => setContenido(e.target.value)} className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#E10600] min-h-[150px]" />
              <button type="submit" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors uppercase text-sm w-full">
                Publicar Tema
              </button>
            </div>
          </form>
        )}

        <div className="flex flex-col gap-4">
          {temas.length === 0 ? (
            <p className="text-gray-400">No hay temas en el foro todavía.</p>
          ) : (
            temas.map((tema) => {
              
              const esPropietario = userEmail === tema.user_email;
              const puedeBorrar = admin || esPropietario;

              return (
                <div key={tema.id} className="bg-[#2E2E2E] p-6 rounded-xl border border-transparent hover:border-gray-600 transition-colors relative group">
                  
                 
                  <Link href={`/foro-detalle?id=${tema.id}`} className="block cursor-pointer">
                    <span className="text-xs font-bold text-[#E10600] uppercase tracking-wider mb-2 block">
                      Por: {tema.user_email || 'Anónimo'}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E10600] transition-colors">
                      {tema.titulo}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {tema.contenido}
                    </p>
                  </Link>

                 
                  {puedeBorrar && (
                    <button 
                      onClick={() => borrarTema(tema.id)}
                      className="absolute top-6 right-6 bg-black/80 hover:bg-[#E10600] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10"
                      title="Borrar Tema"
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