import Link from 'next/link';

export default function ForumRow({ id, titulo, autor, fecha, respuestas, categoria, onDelete, onEdit }) {
  return (
    <div className="bg-[#2E2E2E] p-4 rounded-xl mb-4 border border-white/5 hover:border-[#E10600] transition-colors flex flex-col md:flex-row gap-4 items-start md:items-center justify-between group">
      
      <div className="flex items-center gap-4 flex-grow">
        <div className="w-12 h-12 rounded-full bg-black border-2 border-[#E10600] flex items-center justify-center flex-shrink-0">
          
          <span className="text-white font-bold">{autor ? autor.charAt(0).toUpperCase() : "U"}</span>
        </div>
        
        <div>
          
          <span className="text-xs font-bold text-[#E10600] uppercase tracking-wider">{categoria}</span>
          
          <Link href={`/foro-detalle`}>
             
             <h4 className="text-lg font-bold text-white group-hover:text-[#E10600] transition-colors cursor-pointer">{titulo}</h4>
          </Link>
         
          <p className="text-xs text-gray-400 mt-1">Por <span className="text-white">{autor}</span> • {fecha}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="text-center mr-4">
         
          <span className="block text-xl font-bold text-white">{respuestas}</span>
          <span className="text-xs text-gray-500 uppercase">Respuestas</span>
        </div>
        
        <button 
          onClick={onEdit}
          className="text-gray-500 hover:text-blue-400 transition-colors p-2"
          title="Editar tema"
        >
          ✏️
        </button>
        <button 
          onClick={() => onDelete(id)}
          className="text-gray-500 hover:text-[#E10600] transition-colors p-2"
          title="Borrar tema"
        >
          🗑️
        </button>
      </div>

    </div>
  );
}