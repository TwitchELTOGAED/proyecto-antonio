import SectionTitle from '../components/SectionTitle';
import ForumRow from '../components/ForumRow';

export default function ForoPage() {
  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Título de la página */}
        <div className="flex justify-between items-end mb-8">
            <SectionTitle title="Foro de la Comunidad" />
            <button className="bg-[#E10600] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm transition-colors uppercase">
                + Nuevo Tema
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LISTA DE TEMAS (8 columnas) */}
          <div className="lg:col-span-8">
            
            <ForumRow 
              title="¿Es Aston Martin candidato al título en 2026?"
              author="Usuario33"
              time="Hace 2 horas"
              responses="56"
              category="Debate"
            />
            
            <ForumRow 
              title="El GP de Madrid no me gusta..."
              author="F1Fan_ES"
              time="Hace 5 horas"
              responses="12"
              category="Circuitos"
            />

            <ForumRow 
              title="Análisis técnico: El suelo del Red Bull RB20"
              author="AeroGod"
              time="Hace 1 día"
              responses="128"
              category="Técnica"
            />

             <ForumRow 
              title="¿Dónde comprar entradas baratas para Montmeló?"
              author="ViajeroF1"
              time="Hace 3 días"
              responses="8"
              category="Entradas"
            />

          </div>

          {/* SIDEBAR (Igual que en Home, para consistencia) */}
          <aside className="lg:col-span-4 space-y-8">
             <div className="bg-[#2E2E2E] p-6 rounded-2xl border border-white/5 sticky top-8">
                <h3 className="text-xl font-bold mb-4 text-white">Reglas del Foro</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                   <li>Respeto ante todo.</li>
                   <li>No spoilers en títulos.</li>
                   <li>Usa la categoría correcta.</li>
                   <li>Diviértete debatiendo.</li>
                </ul>
             </div>
          </aside>

        </div>
      </div>
    </main>
  );
}