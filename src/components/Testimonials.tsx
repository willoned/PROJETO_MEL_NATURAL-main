import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Mariana Alves',
      role: 'Teresina',
      text: 'A qualidade do mel da Mel Natural é incomparável! O Kit Imunidade salvou os invernos da minha família. Recomendo sempre!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      id: 2,
      name: 'João Pedro',
      role: 'Atacado',
      text: 'Excelente atendimento no WhatsApp e entrega rápida. Especiarias frescas e de alta procedência, sempre compro e indico para parceiros.',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150'
    }
  ];

  return (
    <section id="depoimentos" className="col-span-1 lg:col-span-4 lg:row-span-2 bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col h-full">
      <h5 className="text-[#0A1931] font-bold text-xs uppercase tracking-widest mb-6">O que dizem nossos clientes</h5>
      
      <div className="flex flex-col gap-5 flex-1 justify-center">
        {reviews.map((review, idx) => (
          <div key={review.id} className={`flex gap-4 items-start ${idx !== 0 ? 'border-t border-gray-100 pt-5' : ''}`}>
             <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover shadow-sm" />
             <div>
               <div className="flex items-center gap-1 mb-1 text-[#FEDE00]">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-3 h-3 fill-current" />
                 ))}
               </div>
               <p className="text-[13px] leading-snug italic text-gray-600 font-medium tracking-tight">"{review.text}"</p>
               <p className="text-[10px] font-bold mt-2 uppercase text-[#0A1931]">— {review.name}, {review.role}</p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
