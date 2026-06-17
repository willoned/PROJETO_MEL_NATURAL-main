import React from 'react';
import { motion } from 'framer-motion';

export default function BrandsMarquee() {
  // Lista de marcas. Colocamos repetido de propósito para o efeito infinito funcionar perfeitamente.
  const brands = [
    "🌿 NatuVida", "🍯 Mel da Terra", "🍃 Botânica Essencial", "🌼 Flora Pura", 
    "🌾 Raízes Fortes", "🌱 Vitalidade Orgânica", "🌺 Extratos da Amazônia",
    // Repetindo a lista para o loop infinito não ter buracos
    "🌿 NatuVida", "🍯 Mel da Terra", "🍃 Botânica Essencial", "🌼 Flora Pura", 
    "🌾 Raízes Fortes", "🌱 Vitalidade Orgânica", "🌺 Extratos da Amazônia"
  ];

  return (
    // 👇 AQUI! Altere o "-mt-8" para subir mais ou descer. 
    // Exemplos: "-mt-12" (sobe mais), "-mt-16" (sobe muito), "-mt-4" (sobe pouco).
    // O "relative z-30" garante que a barra fique por cima do vídeo.
    <div className="relative z-30 -mt-22 bg-[#FEDE00] py-5 overflow-hidden w-full flex items-center border-b-4 border-[#0A1931]/10">
      <motion.div
        className="flex space-x-16 whitespace-nowrap px-8"
        // Anima de 0% a -50% (como a lista é duplicada, quando chega na metade, ele reseta imperceptivelmente)
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30 // Quanto maior o número, mais lento e suave fica
        }}
      >
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center justify-center">
            {/* Se for usar as logos das marcas em imagem depois, substitua o <span> pela tag <img /> */}
            <span className="text-[#0A1931] font-black text-xl md:text-2xl uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity cursor-default">
              {brand}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}