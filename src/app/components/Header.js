import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-[#2E2E2E] py-8 px-8 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end border-b border-gray-700 pb-4">
        
        {/* LOGO */}
        <div className="group">
          <Link href="/">
            <h1 className="font-contrail text-5xl md:text-6xl uppercase text-white leading-none tracking-tighter cursor-pointer">
              DELTA <span className="block md:inline">TIME</span>
            </h1>
          </Link>
          <div className="h-2 w-full bg-[#E10600] mt-2 rounded-sm group-hover:w-[110%] transition-all"></div>
        </div>

        {/* MENÚ */}
        <nav className="flex gap-6 mt-6 md:mt-0 font-montserrat font-bold text-sm uppercase text-gray-300">
          <Link href="/" className="hover:text-white hover:underline decoration-[#E10600] underline-offset-4 decoration-2 transition-all">Inicio</Link>
          <Link href="/noticias" className="hover:text-white hover:underline decoration-[#E10600] underline-offset-4 decoration-2 transition-all">Noticias</Link>
          <Link href="/foro" className="hover:text-white hover:underline decoration-[#E10600] underline-offset-4 decoration-2 transition-all">Foro</Link>
          <Link href="/wallpapers" className="hover:text-white hover:underline decoration-[#E10600] underline-offset-4 decoration-2 transition-all">Wallpapers</Link>
          <Link href="/perfil" className="hover:text-white hover:underline decoration-[#E10600] underline-offset-4 decoration-2 transition-all">Perfil</Link>
        </nav>
        
      </div>
    </header>
  );
}