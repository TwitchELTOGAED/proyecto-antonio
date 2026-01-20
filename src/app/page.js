import Link from 'next/link';
import Header from './components/Header';
import styles from './page.module.css'; // Importamos los estilos CSS

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className={styles.mainContainer}>
        
        {/* Usamos la clase CSS Grid definida para la estructura exacta */}
        <div className={styles.bentoGrid}>

          {/* === SECCIÓN NOTICIAS (Izquierda, Grande) === */}
          <section className={`${styles.card} ${styles.newsSection}`}>
            <Link href="/noticias" className="absolute inset-0 z-0"></Link>
            
            {/* Título */}
            <div className="relative z-10">
              <h2 className="font-contrail text-2xl uppercase tracking-wider">Últimas Noticias</h2>
              <div className={styles.redLine}></div>
            </div>

            {/* Lista de Noticias (Estilo PDF Pág 23) */}
            <div className="flex flex-col gap-6 mt-4 relative z-10 pointer-events-none">
              
              {/* Noticia 1 */}
              <article className="flex gap-4 items-center group">
                {/* Placeholder de imagen */}
                <div className="w-32 h-20 bg-gray-800 rounded-lg overflow-hidden shrink-0 border border-gray-700">
                  {/* Aquí iría la imagen <img src="..." /> */}
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg leading-tight group-hover:text-[#E10600] transition-colors">
                    VERSTAPPEN A POR LA REMONTADA
                  </h3>
                  <p className="font-montserrat text-xs text-gray-400 mt-2">
                    Max sigue recortando distancia a los McLaren y ya está a 40 puntos...
                  </p>
                </div>
              </article>

              {/* Noticia 2 */}
              <article className="flex gap-4 items-center group">
                <div className="w-32 h-20 bg-gray-800 rounded-lg overflow-hidden shrink-0 border border-gray-700"></div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg leading-tight group-hover:text-[#E10600] transition-colors">
                    UN PUNTO QUE SABE A GLORIA
                  </h3>
                  <p className="font-montserrat text-xs text-gray-400 mt-2">
                    Alonso: "Con el noveno coche, he sumado un punto, estoy contento".
                  </p>
                </div>
              </article>

              {/* Noticia 3 */}
              <article className="flex gap-4 items-center group">
                <div className="w-32 h-20 bg-gray-800 rounded-lg overflow-hidden shrink-0 border border-gray-700"></div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg leading-tight group-hover:text-[#E10600] transition-colors">
                    NEWEY ES "EL MOTOR" DE ASTON MARTIN
                  </h3>
                  <p className="font-montserrat text-xs text-gray-400 mt-2">
                    Adrian Newey es una de las piedras angulares del proyecto a largo plazo...
                  </p>
                </div>
              </article>

            </div>
          </section>

          {/* === SECCIÓN FORO (Arriba Derecha) === */}
          <section className={`${styles.card} ${styles.forumSection}`}>
            <Link href="/foro" className="absolute inset-0 z-0"></Link>
            
            <div className="relative z-10">
              <h2 className="font-contrail text-xl uppercase tracking-wider">Foro</h2>
              <div className={styles.redLine}></div>
            </div>

            <div className="flex flex-col gap-4 relative z-10">
              <div className="bg-[#1a1a1a] p-3 rounded-lg border-l-4 border-[#E10600]">
                <p className="font-montserrat font-bold text-sm">¿Es Aston Martin candidato al título en 2026?</p>
              </div>
              <div className="bg-[#1a1a1a] p-3 rounded-lg border-l-4 border-gray-600">
                <p className="font-montserrat font-bold text-sm">El GP de Madrid no me gusta...</p>
              </div>
            </div>
          </section>

          {/* === SECCIÓN WALLPAPERS (Abajo Derecha) === */}
          <section className={`${styles.card} ${styles.wallpapersSection}`}>
            <Link href="/wallpapers" className="absolute inset-0 z-0"></Link>
            
            <div className="relative z-10">
              <h2 className="font-contrail text-xl uppercase tracking-wider">Wallpapers</h2>
              <div className={styles.redLine}></div>
            </div>

            {/* Grid pequeño de imágenes (Placeholder) */}
            <div className="grid grid-cols-2 gap-3 mt-2 relative z-10">
              <div className="h-24 bg-gray-800 rounded-lg border border-gray-700 hover:border-[#E10600] transition-colors"></div>
              <div className="h-24 bg-gray-800 rounded-lg border border-gray-700 hover:border-[#E10600] transition-colors"></div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}