import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/Ferrari_Leclerc2026.jpeg"
          alt="F1 Fondo" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/70"></div> 
      </div>

      
      <div className="relative z-10 w-full max-w-md bg-[#E10600] rounded-3xl p-8 shadow-[0_0_50px_rgba(225,6,0,0.5)] mx-4">
        
        
        <Link href="/" className="absolute top-6 left-6 text-white hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </Link>

       
        <div className="text-center mb-10 mt-2">
          <h1 className="font-montserrat font-black text-4xl text-white uppercase leading-none tracking-tighter">
            DELTA<br/>TIME
          </h1>
        </div>

        
        <form className="space-y-6">
          <div>
            <label className="block text-white font-bold text-sm mb-2 ml-2 uppercase">Correo Electrónico</label>
            <input 
              type="email" 
              className="w-full bg-white rounded-full py-3 px-6 text-black font-bold focus:outline-none focus:ring-4 focus:ring-black/20"
            />
          </div>

          <div>
            <label className="block text-white font-bold text-sm mb-2 ml-2 uppercase">Contraseña</label>
            <input 
              type="password" 
              className="w-full bg-white rounded-full py-3 px-6 text-black font-bold focus:outline-none focus:ring-4 focus:ring-black/20"
            />
          </div>

          <div className="pt-4 flex flex-col gap-4">
            {/* Botón Principal (Blanco según PDF pg 22) */}
            <button className="w-full bg-white text-[#E10600] font-black py-3 rounded-full uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg">
              Iniciar Sesión
            </button>
            
            {/* Enlace a Registro */}
            <p className="text-center text-white text-sm font-medium">
              ¿No tienes cuenta? <Link href="/signup" className="underline hover:text-black transition-colors">Regístrate aquí</Link>
            </p>
          </div>
        </form>

      </div>
    </div>
  );
}