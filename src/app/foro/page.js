'use client';

import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ForumRow from '../components/ForumRow';

export default function ForoPage() {
  const [temas, setTemas] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('Noticias');
  const [contenido, setContenido] = useState('');
  
 
  const [temaEditando, setTemaEditando] = useState(null); 

  useEffect(() => {
    const fetchInicial = async () => {
      try {
        const respuesta = await fetch('/api/foro');
        if (respuesta.ok) {
          const datos = await respuesta.json();
          setTemas(datos);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchInicial();
  }, []);

 
  const iniciarEdicion = (tema) => {
    setTemaEditando(tema.id);
    setTitulo(tema.titulo);
    setCategoria(tema.categoria);
    setContenido(tema.contenido);
    setMostrarFormulario(true); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  
  const cancelarFormulario = () => {
    setMostrarFormulario(false);
    setTemaEditando(null);
    setTitulo('');
    setCategoria('Noticias');
    setContenido('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const metodo = temaEditando ? 'PUT' : 'POST';
      const bodyDatos = temaEditando 
          ? { id: temaEditando, titulo, categoria, contenido } 
          : { titulo, categoria, contenido };

      const respuesta = await fetch('/api/foro', {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyDatos)
      });

      if (respuesta.ok) {
        cancelarFormulario();
        
        
        const res = await fetch('/api/foro');
        if (res.ok) {
          const datos = await res.json();
          setTemas(datos);
        }
      } else {
        alert("Error al guardar el tema.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const borrarTema = async (id) => {
    if (!window.confirm("¿Seguro que quieres borrar este tema?")) return;

    try {
      const respuesta = await fetch(`/api/foro?id=${id}`, {
        method: 'DELETE',
      });

      if (respuesta.ok) {
        const res = await fetch('/api/foro');
        if (res.ok) {
          const datos = await res.json();
          setTemas(datos);
        }
      } else {
        alert("Error al borrar el tema.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-8">
            <SectionTitle title="Foro de la Comunidad" />
            <button 
                onClick={() => mostrarFormulario ? cancelarFormulario() : setMostrarFormulario(true)}
                className="bg-[#E10600] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm transition-colors uppercase"
            >
                {mostrarFormulario ? "Cancelar" : "+ Nuevo Tema"}
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {mostrarFormulario && (
              <form onSubmit={handleSubmit} className="bg-[#2E2E2E] p-6 rounded-xl mb-8 border border-[#E10600]/50 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-white">
                  {temaEditando ? "Editar tema" : "Crear un nuevo tema"}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Título del tema</label>
                    <input 
                      type="text" 
                      required
                      value={titulo}
                      onChange={(e) => setTitulo(e.target.value)}
                      className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#E10600]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Categoría</label>
                    <select 
                      value={categoria}
                      onChange={(e) => setCategoria(e.target.value)}
                      className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#E10600]"
                    >
                      <option value="Noticias">Noticias</option>
                      <option value="Opiniones">Opiniones</option>
                      <option value="Imágenes">Imágenes</option>
                      <option value="Clips">Clips</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Contenido</label>
                    <textarea 
                      required
                      value={contenido}
                      onChange={(e) => setContenido(e.target.value)}
                      className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#E10600] h-32"
                    ></textarea>
                  </div>

                  <button type="submit" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors uppercase text-sm w-full">
                    {temaEditando ? "Actualizar Tema" : "Publicar Tema"}
                  </button>
                </div>
              </form>
            )}

            {temas.length === 0 ? (
                <p className="text-gray-400">No hay temas todavía. ¡Sé el primero en publicar!</p>
            ) : (
                temas.map((tema) => (
                  <ForumRow 
                    key={tema.id}
                    id={tema.id}
                    titulo={tema.titulo}
                    autor={tema.autor}
                    fecha={new Date(tema.created_at).toLocaleDateString()}
                    respuestas="0"
                    categoria={tema.categoria || "General"}
                    onDelete={borrarTema}
                    onEdit={() => iniciarEdicion(tema)}
                  />
                ))
            )}
          </div>

          <aside className="lg:col-span-4 space-y-8">
             <div className="bg-[#2E2E2E] p-6 rounded-2xl border border-white/5 sticky top-8">
                <h3 className="text-xl font-bold mb-4 text-white">Reglas del Foro</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                   <li>Respeto ante todo.</li>
                   <li>No spoilers en títulos.</li>
                   <li>Diviértete debatiendo.</li>
                </ul>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}