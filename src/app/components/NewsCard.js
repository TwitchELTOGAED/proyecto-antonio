import Link from 'next/link';

export default function NewsCard({ id, title, excerpt, category, image }) {
  return (
    <Link href={`/noticia-detalle?id=${id}`} className="block overflow-hidden rounded-xl bg-[#2E2E2E] hover:border-[#E10600] border border-transparent transition-colors">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img src={image} alt={title} className="h-full w-full object-cover min-h-[200px]" />
        </div>
        <div className="p-6 md:w-2/3 flex flex-col justify-center">
          <span className="text-xs font-bold text-[#E10600] uppercase tracking-wider mb-2">{category}</span>
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}