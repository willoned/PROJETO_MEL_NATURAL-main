import React from 'react';
import { motion } from 'framer-motion';

export default function Categories() {
  const categories = [
    { name: 'Méis Puros', items: '12 produtos', image: 'https://images.unsplash.com/photo-1587049352847-81a56d773c1c?auto=format&fit=crop&q=80&w=600' },
    { name: 'Favo & Própolis', items: '8 produtos', image: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&q=80&w=600' },
    { name: 'Cosméticos Naturais', items: '15 produtos', image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=600' },
    { name: 'Kits para Presente', items: '5 produtos', image: 'https://images.unsplash.com/photo-1542841791-eaed99468e27?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="col-span-1 md:col-span-2 lg:col-span-12 py-12 md:py-20 bg-white rounded-3xl" id="categorias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Cabeçalho Centralizado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-[#0A1931] uppercase tracking-tight"
          >
            Explore por <span className="text-[#FEDE00] underline decoration-[#0A1931]">Linhas</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 mt-4 text-sm md:text-base"
          >
            Navegue pela nossa seleção completa. Tudo o que você precisa para uma vida mais doce e saudável, organizado para facilitar sua escolha.
          </motion.p>
        </div>

        {/* Grid de Categorias com Animação em Cascata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-md"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-[#0A1931]/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-black text-xl tracking-wide">{category.name}</h3>
                <p className="text-[#FEDE00] font-bold text-sm mt-1">{category.items}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}