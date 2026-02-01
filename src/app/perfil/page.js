import SectionTitle from '../components/SectionTitle';

export default function PerfilPage() {
  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        {/* Título Principal */}
        <SectionTitle title="Perfil" />

        <div className="space-y-12">

          {/* SECCIÓN 1: INFORMACIÓN PERSONAL (Contenedor Rojo) */}
          <div className="relative">
            {/* Cabecera visual roja con el título */}
            <div className="bg-[#E10600] rounded-t-3xl p-6 pb-12">
               <h3 className="text-white font-bold text-xl uppercase tracking-wider flex items-center gap-2">
                 Información Personal
                 <div className="h-1 w-12 bg-white rounded-full"></div>
               </h3>
            </div>

            {/* Tarjeta Blanca superpuesta (Efecto del PDF) */}
            <div className="mx-6 -mt-8 bg-white text-black rounded-xl p-8 shadow-2xl relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
               
               {/* Icono de Usuario Grande */}
               <div className="flex-shrink-0">
                 <div className="w-24 h-24 rounded-full bg-[#2E2E2E] flex items-center justify-center text-white text-4xl border-4 border-[#E10600]">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                   </svg>
                 </div>
               </div>

               {/* Datos del Usuario */}
               <div className="flex-grow space-y-4 w-full">
                  <div className="border-b border-gray-200 pb-2">
                     <p className="text-xs font-bold text-gray-500 uppercase">Nombre de usuario</p>
                     <p className="text-xl font-bold">Usuario14</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-2">
                     <p className="text-xs font-bold text-gray-500 uppercase">Contraseña</p>
                     <p className="text-xl font-bold tracking-widest">••••••••</p>
                  </div>

                  <div>
                     <p className="text-xs font-bold text-gray-500 uppercase">Contribuciones en la comunidad</p>
                     <div className="flex items-center gap-2">
                        <span className="text-2xl font-black text-[#E10600]">33</span>
                        <span className="text-sm text-gray-600">posts publicados</span>
                     </div>
                  </div>
               </div>

               {/* Botón Editar (Flotante o lateral) */}
               <div className="flex-shrink-0">
                  <button className="bg-[#E10600] hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full shadow-lg transition-transform hover:scale-105 uppercase text-sm">
                    Editar
                  </button>
               </div>

            </div>
          </div>

          {/* SECCIÓN 2: FAVORITOS DEL USUARIO */}
          <div>
            <div className="flex items-center gap-4 mb-4">
               <div className="h-8 w-1 bg-[#E10600] rounded-full"></div>
               <h3 className="text-white font-bold text-xl uppercase">Favoritos del Usuario</h3>
            </div>
            
            {/* Tarjeta de "Vacío" */}
            <div className="bg-white text-black rounded-xl p-8 shadow-lg flex flex-col items-center justify-center text-center min-h-[200px]">
               <div className="text-gray-300 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
               </div>
               <p className="font-bold text-lg text-gray-800">Todavía no tienes favoritos</p>
               <p className="text-sm text-gray-500 mt-2">Cuando marques algo como favorito, aparecerá aquí.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}