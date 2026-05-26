import { ArrowRight, Hexagon } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative col-span-1 lg:col-span-8 lg:row-span-3 bg-[#E5E5E5] rounded-3xl p-6 md:p-10 border border-gray-300 shadow-sm overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-[#FEDE00] opacity-10 rounded-bl-full pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0A1931] border border-gray-200 text-xs font-bold uppercase tracking-wider mb-6">
            <Hexagon className="w-4 h-4 fill-[#FEDE00] text-[#FEDE00]" />
            Direto da Natureza
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A1931] tracking-tight leading-tight mb-4">
            Mel Natural: <br/><span className="text-gray-600">Sua Fonte de Saúde</span> <br/>direto de Teresina.
          </h1>
          <p className="text-base text-gray-600 mb-8 max-w-md leading-relaxed">
            A Distribuidora de Produtos Naturais, Fitoterápicos, Cosméticos e Suplementos que traz o melhor da natureza para você e sua família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#produtos" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#FEDE00] hover:bg-yellow-400 text-[#0A1931] text-sm font-bold uppercase tracking-wider rounded-full shadow-md transition-colors duration-200">
              Conheça Nossos Produtos
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center"
        >
           <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
             {/* AQUI ESTÁ A MUDANÇA: Puxando a sua imagem local */}
             <img 
               src="/destaque.png" 
               alt="Destaque Mel Natural"
               className="object-cover w-full h-full"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/60 to-transparent"></div>
           </div>
           
           {/* Floating Badge */}
           <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="bg-[#FEDE00]/20 p-3 rounded-full">
                <Hexagon className="w-6 h-6 text-[#0A1931] fill-[#FEDE00]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-[#0A1931]">Qualidade Pura</p>
                <p className="text-[10px] text-gray-500">100% Garantida</p>
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}