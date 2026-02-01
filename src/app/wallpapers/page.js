import SectionTitle from '../components/SectionTitle';


const WallpaperItem = ({ src, title, photographer }) => (
  <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-[#2E2E2E] cursor-pointer">
    <img 
        src={src} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
    />
   
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h4 className="font-bold text-white text-lg leading-none">{title}</h4>
        <p className="text-[#E10600] text-xs uppercase font-bold mt-1">📸 {photographer}</p>
    </div>
  </div>
);

export default function WallpapersPage() {
  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <SectionTitle title="Wallpapers F1" />
        <p className="text-gray-400 mb-8 max-w-2xl">
            Descarga los mejores fondos de pantalla en alta resolución. Comparte tus mejores capturas respetando siempre los derechos de autor.
        </p>

        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
            
            <WallpaperItem 
                src="/RedBull-2019.jpeg"
                title="Red Bull Hungarian GP 2019"
                photographer="MaxSpeed"
            />
            <WallpaperItem 
                src="/Ferrari_Hamilton2026.jpeg"
                title="Ferrari 2026"
                photographer="Tifosi_01"
            />
            <WallpaperItem 
                src="/Russel_Mercedes_Debut.jpeg"
                title="Russel Debut Mercedes"
                photographer="LewisFan"
            />
            <WallpaperItem 
                src="/Alonso-singapur2010.jpeg"
                title="GP Singapur 2010"
                photographer="F1 Official"
            />
            <WallpaperItem 
                src="/fernando-alonso-aston-martin.webp"
                title="Mamba Negra"
                photographer="@nanosecso"
            />
             <WallpaperItem 
                src="/Colapinto.png"
                title="Colapinto GP México 2025"
                photographer="Colapinista"
            />

        </div>
      </div>
    </main>
  );
}