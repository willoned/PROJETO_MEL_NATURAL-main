import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const benefits = [
    '100% Puro e Cru',
    'Colheita Sustentável',
    'Apoio a Apicultores Locais',
    'Entrega Rápida em Teresina',
  ];

  return (
    <section className="col-span-1 md:col-span-2 lg:col-span-12 py-12 md:py-24 bg-white rounded-3xl overflow-hidden" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Texto Desliza da Esquerda */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#0A1931] uppercase tracking-tight mb-6 leading-tight">
              A Essência da <br /> <span className="text-[#FEDE00] underline decoration-[#0A1931]">Natureza</span> na Sua Mesa
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Desde o primeiro dia, nossa missão tem sido trazer o mel mais puro e autêntico diretamente da colmeia para você. Sem misturas, sem aditivos, apenas a perfeição da natureza.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Trabalhamos em parceria com apicultores locais selecionados, garantindo um processo sustentável que respeita as abelhas e o meio ambiente, entregando saúde engarrafada para toda Teresina e região.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FEDE00]" />
                  <span className="font-bold text-[#0A1931] text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bloco Amarelo Desliza da Direita */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-[#FEDE00] flex items-center justify-center p-8 text-center shadow-lg"
          >
             <div className="border-4 border-[#0A1931] w-full h-full rounded-2xl flex flex-col items-center justify-center p-8 bg-[#FEDE00]/50 backdrop-blur-sm">
                <span className="text-6xl mb-4">🐝</span>
                <h3 className="font-black text-[#0A1931] text-3xl uppercase tracking-widest mb-2">Tradição & Qualidade</h3>
                <p className="text-[#0A1931]/80 font-bold max-w-xs mx-auto">Mais de mil famílias já confiam na pureza dos nossos produtos.</p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}