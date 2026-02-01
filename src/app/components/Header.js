'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname(); 

  
  if (pathname === '/' || pathname === '/login' || pathname === '/signup') {
    return null;
  }

  return (
    <header className="w-full bg-black py-6 px-8 md:px-12 sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center">
        
        
        <div className="flex flex-col leading-none">
          <Link href="/home">
            <h1 className="font-racing text-4xl md:text-5xl uppercase text-white tracking-tighter cursor-pointer">
              DELTA
            </h1>
            <h1 className="font-racing text-4xl md:text-5xl uppercase text-white tracking-tighter cursor-pointer relative">
              TIME
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E10600] rounded-sm"></span>
            </h1>
          </Link>
        </div>

       
        <nav className="flex gap-8 mt-8 md:mt-0 font-sans font-medium text-sm uppercase text-gray-400">
          
          
          <Link href="/home" className={`hover:text-[#E10600] transition-colors ${pathname === '/home' ? 'text-white font-bold' : ''}`}>
            Inicio
          </Link>
          
          <Link href="/noticias" className={`hover:text-white transition-colors ${pathname === '/noticias' ? 'text-white font-bold' : ''}`}>
            Noticias
          </Link>
          
          
          <Link href="/foro" className={`hover:text-white transition-colors ${pathname.includes('/foro') ? 'text-white font-bold' : ''}`}>
            Foro
          </Link>
          
          <Link href="/wallpapers" className={`hover:text-white transition-colors ${pathname === '/wallpapers' ? 'text-white font-bold' : ''}`}>
            Wallpapers
          </Link>
          
          <Link href="/perfil" className={`hover:text-white transition-colors ${pathname === '/perfil' ? 'text-white font-bold' : ''}`}>
            Perfil
          </Link>
        </nav>
        
      </div>
    </header>
  );
}