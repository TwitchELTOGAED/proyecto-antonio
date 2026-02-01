import Link from 'next/link';

export default function ForumRow({ title, author, time, responses, category }) {
  return (
    <Link href="/foro-detalle" className="block group">
      <div className="bg-[#2E2E2E] p-5 rounded-xl border border-transparent hover:border-[#E10600] transition-all mb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
        {/* Lado izquierdo: Icono y Título */}
        <div className="flex items-center gap-4">
          {/* Avatar simulado */}
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 font-bold">
             {author.charAt(0)}
          </div>
          <div>
            <h3 className="text-white font-bold text-lg group-hover:text-[#E10600] transition-colors">
              {title}
            </h3>
            <div className="text-xs text-gray-400 flex gap-2 mt-1">
               <span className="text-[#E10600] font-bold uppercase">{category}</span>
               <span>•</span>
               <span>Por {author}</span>
               <span>•</span>
               <span>{time}</span>
            </div>
          </div>
        </div>

        {/* Lado derecho: Estadísticas */}
        <div className="flex items-center gap-6 text-sm text-gray-400">
           <div className="text-center">
              <span className="block font-bold text-white text-lg">{responses}</span>
              <span className="text-xs">Respuestas</span>
           </div>
           {/* Flechita decorativa */}
           <div className="text-[#E10600] opacity-0 group-hover:opacity-100 transition-opacity">
              ➔
           </div>
        </div>

      </div>
    </Link>
  );
}