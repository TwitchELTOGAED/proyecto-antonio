import SectionTitle from '../components/SectionTitle';

export default function PerfilPage() {
  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        
        <SectionTitle title="Perfil" />

        <div className="space-y-12">

          
          <div className="relative">
            
            <div className="bg-[#E10600] rounded-t-3xl p-6 pb-12">
               <h3 className="text-white font-bold text-xl uppercase tracking-wider flex items-center gap-2">
                 Información Personal
                 <div className="h-1 w-12 bg-white rounded-full"></div>
               </h3>
            </div>

            
            <div className="mx-6 -mt-8 bg-white text-black rounded-xl p-8 shadow-2xl relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
               
               
               <div className="flex-shrink-0">
  <div className="w-24 h-24 rounded-full bg-[#2E2E2E] flex items-center justify-center border-4 border-[#E10600]">
     <span className="text-white text-5xl font-bold">U</span>
  </div>
</div>

               
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

              
               <div className="flex-shrink-0">
                  <button className="bg-[#E10600] hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full shadow-lg transition-transform hover:scale-105 uppercase text-sm">
                    Editar
                  </button>
               </div>

            </div>
          </div>

          
          <div>
            <div className="flex items-center gap-4 mb-4">
               <div className="h-8 w-1 bg-[#E10600] rounded-full"></div>
               <h3 className="text-white font-bold text-xl uppercase">Favoritos del Usuario</h3>
            </div>
            
           
            <div className="bg-white text-black rounded-xl p-8 shadow-lg flex flex-col items-center justify-center text-center min-h-[200px]">
               <div className="text-gray-300 mb-4">
                  <span className="text-6xl">★</span>
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