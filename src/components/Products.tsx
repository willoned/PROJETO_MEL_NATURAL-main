import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface ProductsProps {
  onNavigateToCatalog: () => void;
}

export default function Products({ onNavigateToCatalog }: ProductsProps) {
  const featuredProducts = [
    {
      name: 'Mel Natural Puro',
      weight: '500g',
      price: 'R$ 45,00',
      description: 'Puro, cru e colhido de forma sustentável.',
      image: 'https://images.unsplash.com/photo-1587049352847-81a56d773c1c?auto=format&fit=crop&q=80&w=600',
    },
    {
      name: 'Mel Natural Puro',
      weight: '1kg',
      price: 'R$ 70,00',
      description: 'Nossa versão familiar com o melhor custo-benefício.',
      image: 'https://images.unsplash.com/photo-1587049352847-81a56d773c1c?auto=format&fit=crop&q=80&w=600',
    },
    {
      name: 'Sabonete de Aveia',
      weight: '90g',
      price: 'R$ 15,00',
      description: 'Com mel e aveia para uma pele hidratada.',
      image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=600',
    }
  ];

  return (
    <section className="col-span-1 md:col-span-2 lg:col-span-12 py-12 md:py-20" id="produtos">
      <div className="text-center mb-12">
        <motion.h2 
          // Animação do Título
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-[#0A1931] uppercase tracking-tight"
        >
          Nossos <span className="text-[#FEDE00] underline decoration-[#0A1931]">Destaques</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Os produtos mais amados pelos nossos clientes, direto do produtor para a sua mesa.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product, index) => (
          <motion.div 
            key={index}
            // AQUI ESTÁ A MÁGICA DA ROLAGEM!
            initial={{ opacity: 0, y: 50 }} // Começa invisível e mais abaixo
            whileInView={{ opacity: 1, y: 0 }} // Quando aparece na tela, fica visível e sobe
            viewport={{ once: true, margin: "-50px" }} // Anima só uma vez, quando o card passar 50px da base da tela
            transition={{ duration: 0.5, delay: index * 0.2 }} // O "delay" cria o efeito dominó (um após o outro)
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col h-full"
          >
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-black text-[#0A1931] text-xl leading-tight">{product.name}</h3>
                <span className="text-xs font-bold bg-[#FEDE00]/20 text-[#0A1931] px-2 py-1 rounded-lg">
                  {product.weight}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-6 flex-grow">{product.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="font-black text-2xl text-[#0A1931] tracking-tighter">{product.price}</span>
                <button 
                  onClick={onNavigateToCatalog}
                  className="w-12 h-12 bg-[#0A1931] hover:bg-[#FEDE00] text-white hover:text-[#0A1931] rounded-2xl flex items-center justify-center transition-all group-hover:shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center mt-12"
      >
        <button 
          onClick={onNavigateToCatalog}
          className="px-8 py-4 bg-[#FEDE00] hover:bg-yellow-400 text-[#0A1931] font-black uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg"
        >
          Ver Catálogo Completo
        </button>
      </motion.div>
    </section>
  );
}