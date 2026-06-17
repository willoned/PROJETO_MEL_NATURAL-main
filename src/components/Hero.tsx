import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0A1931]">
      
      {/* VÍDEO DE FUNDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/floresta-bg.mp4" type="video/mp4" />
      </video>

      {/* PELÍCULA ESCURA: Mantém o contraste perfeito */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* CONTEÚDO CENTRALIZADO */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-tight mb-6"
        >
          A Pureza da <span className="text-[#FEDE00]">Natureza</span> <br/> Direto para Você
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-2xl"
        >
          Extratos, ervas e produtos orgânicos colhidos com sabedoria para levar saúde e cuidado à sua rotina.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="#produtos"
            className="inline-block px-8 py-4 bg-[#FEDE00] hover:bg-yellow-400 text-[#0A1931] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Descubra a Mel Natural
          </a>
        </motion.div>
      </div>
    </section>
  );
}