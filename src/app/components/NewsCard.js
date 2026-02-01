import Link from 'next/link';

export default function NewsCard({ title, excerpt, image, category }) {
  return (
    <Link href="/noticia-detalle" className="group block">
      <article className="flex flex-col md:flex-row gap-4 bg-[#2E2E2E] p-4 rounded-2xl border border-transparent hover:border-[#E10600] transition-all duration-300 mb-4">
        
        
        <div className="w-full md:w-48 flex-shrink-0 relative aspect-video rounded-xl overflow-hidden bg-gray-800">
             <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>

        
        <div className="flex flex-col justify-center">
            <span className="text-[#E10600] text-xs font-bold uppercase mb-1">{category || 'F1 News'}</span>
            <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-[#E10600] transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {excerpt}
            </p>
        </div>
      </article>
    </Link>
  );
}