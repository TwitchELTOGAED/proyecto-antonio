import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center bg-black overflow-hidden">
      
      {/* Fondo con el coche F1 (Filtro oscuro) */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1596564239714-227092c4d623?q=80&w=1920" 
            className="w-full h-full object-cover opacity-50" 
         />
         {/* Degradado para fundir con negro */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
      </div>

      <div className="z-10 text-center flex flex-col items-center gap-8">
        {/* LOGO GIGANTE */}
        <div>
            <h1 className="font-montserrat font-black text-7xl md:text-9xl text-white tracking-tighter leading-none">
              DELTA<br/>TIME
            </h1>
            <div className="w-full h-2 bg-[#E10600] mt-4 rounded-full"></div>
            <p className="text-gray-300 tracking-[0.5em] mt-2 font-bold text-xl">F1 FORO</p>
        </div>

        {/* BOTONES DE ACCESO (PDF Pág 20) */}
        <div className="flex flex-col md:flex-row gap-6 mt-8">
            <Link href="/signup">
                <button className="bg-[#E10600] text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_#E10600]">
                    Entrar
                </button>
            </Link>
            
            <Link href="/login">
                <button className="bg-[#2E2E2E] text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-700 transition-colors border border-gray-600">
                    Iniciar Sesión
                </button>
            </Link>
        </div>
      </div>

    </div>
  );
}