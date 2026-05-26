import React from 'react';
import { ShoppingBag } from 'lucide-react';

// Definimos que este componente agora recebe a função de navegação vinda do App.tsx
interface ProductsProps {
  onNavigateToCatalog: () => void;
}

export default function Products({ onNavigateToCatalog }: ProductsProps) {
  const products = [
    {
      id: 1,
      name: 'Mel Natural Puro (500g)',
      description: 'Nosso carro-chefe. 100% puro e direto do produtor.',
      price: 'R$ 45,00',
      tag: 'Ouro Líquido',
      image: 'https://images.unsplash.com/photo-1587049352851-8d4e891347ad?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Mix Fitoterápico',
      description: 'O poder medicinal das plantas para sua saúde diária.',
      price: 'R$ 35,90',
      tag: 'Fitoterápicos',
      image: 'https://images.unsplash.com/photo-1608528577891-eb05eb20d75a?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Cosméticos Naturais',
      description: 'Cremes e loções sem produtos químicos agressivos.',
      price: 'R$ 55,00',
      tag: 'Cosméticos',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Suplementos em Cápsulas',
      description: 'Mais energia, foco e imunidade para a sua rotina.',
      price: 'R$ 89,90',
      tag: 'Suplementos',
      image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Especiarias Selecionadas',
      description: 'Temperos naturais que dão sabor e saúde à sua comida.',
      price: 'R$ 15,50',
      tag: 'Especiarias',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <section id="produtos" className="col-span-1 lg:col-span-4 lg:row-span-4 bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 flex flex-col h-full">
      <div className="mb-5 shrink-0">
        <span className="text-[#0A1931] font-bold text-xs uppercase tracking-widest">Catálogo Completo</span>
        <h2 className="text-2xl font-black text-[#0A1931] mt-1 leading-tight">Destaques da Loja</h2>
        <p className="text-xs text-gray-500 mt-1">Variedade direto da nossa distribuidora para você.</p>
      </div>

      <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2">
        {products.map((product) => (
          <div 
            key={product.id} 
            onClick={onNavigateToCatalog} // Permite abrir o catálogo ao clicar no produto
            className="bg-[#f9f9f9] rounded-2xl p-3 flex gap-4 items-center transition-all hover:shadow-md hover:bg-white border border-gray-100 group cursor-pointer"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <div className="flex-1 min-w-0 py-1">
              <div className="flex items-center gap-2 mb-1">
                 <span className="text-[9px] font-bold text-[#0A1931] bg-[#FEDE00] px-2 py-0.5 rounded-full uppercase tracking-wider">
                   {product.tag}
                 </span>
              </div>
              <h4 className="font-bold text-[#0A1931] text-[13px] leading-tight mb-1 truncate">{product.name}</h4>
              <p className="text-[11px] text-gray-500 line-clamp-2 leading-snug">{product.description}</p>
              
              <div className="mt-2 flex items-center justify-between">
                <p className="text-base font-black text-[#0A1931]">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100 shrink-0">
        <button 
          onClick={onNavigateToCatalog} // Ativa a mudança de tela ao clicar no botão principal
          className="w-full py-4 bg-[#0A1931] hover:brightness-110 text-[#FEDE00] font-bold text-sm rounded-2xl flex items-center justify-center gap-2 transition-all uppercase tracking-widest shadow-lg shadow-blue-900/10"
        >
          <ShoppingBag className="w-4 h-4" />
          Acessar Catálogo Completo
        </button>
      </div>
    </section>
  );
}