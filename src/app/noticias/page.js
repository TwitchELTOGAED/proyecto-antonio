import SectionTitle from '../components/SectionTitle';
import NewsCard from '../components/NewsCard';

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-black text-[#F5F5F5] pb-20 pt-8">
      
      
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        
        <SectionTitle title="Todas las Noticias" />
        
        
        <div className="flex flex-col gap-6">
          
          
          <NewsCard 
            title='En Aston Martin ven el AMR26 "a otro nivel" '
            excerpt="Neil Zambardi-Christie, líder de fabricación, recuerda que es su primer coche con Adrian Newey."
            category="Pretemporada"
            image="/fernando-alonso-aston-martin.webp"
          />
          
          
          <NewsCard 
            title='Fernando Alonso, al bajarse del AMR26 por primera vez: "Es emocionante" '
            excerpt='Fernando Alonso ya sabe lo que es conducir el Aston Martin AMR26. El asturiano se ha subido por primera al monoplaza diseñado por Adrian Newey.'
            category="ASTON MARTIN"
            image="/fernando-alonso-newey.webp"
          />

         
          <NewsCard 
            title="Así fue el shakedown de la F1 en Barcelona para la parrilla de 2026"
            excerpt="La complejidad de la revisión reglamentaria de la F1 para 2026 es tal que los equipos solicitaron un shakedown adicional, para preparar el inicio de la temporada."
            category="Pretemporada"
            image="/andrea-kimi-antonelli-mercedes.webp"
          />

        </div>

      </div>
    </main>
  );
}