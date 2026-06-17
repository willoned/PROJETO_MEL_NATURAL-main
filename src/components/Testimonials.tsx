import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { name: 'Ana Costa', role: 'Cliente Fiel', text: 'O melhor mel que já provei! A entrega em Teresina foi super rápida e o atendimento é impecável.', rating: 5 },
    { name: 'Carlos Mendes', role: 'Proprietário de Restaurante', text: 'Uso o mel natural deles em todas as receitas do meu restaurante. A qualidade e a pureza são garantidas.', rating: 5 },
    { name: 'Mariana Silva', role: 'Nutricionista', text: 'Sempre indico para meus pacientes. É difícil achar um mel puro de verdade hoje em dia, mas o da Mel Natural é perfeito.', rating: 5 },
  ];

  return (
    <section className="col-span-1 md:col-span-2 lg:col-span-12 py-12 md:py-20" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-[#0A1931] uppercase tracking-tight mb-4"
          >
            Quem Prova, <span className="text-[#FEDE00]">Aprova</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600"
          >
            A satisfação dos nossos clientes é a nossa maior recompensa. Veja o que dizem sobre nossos produtos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FEDE00] text-[#FEDE00]" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0A1931] rounded-full flex items-center justify-center text-[#FEDE00] font-black text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-[#0A1931]">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}