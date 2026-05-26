import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="col-span-1 lg:col-span-4 lg:row-span-2 bg-white rounded-3xl border border-yellow-200 shadow-sm overflow-hidden flex flex-col h-full">
      
      {/* Imagem da Fachada Real da Loja (No Topo) */}
      <div className="w-full h-48 md:h-56 bg-gray-200 relative shrink-0">
        <img 
          src="/fachada.png" 
          alt="Fachada real da loja Mel Natural" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-[#0A1931]/20 to-transparent flex items-end p-6">
          <h3 className="text-white font-black text-2xl tracking-wide drop-shadow-lg">Nossa Loja Física</h3>
        </div>
      </div>

      {/* Informações da Loja (Embaixo) */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-[#0A1931] font-bold text-xs uppercase tracking-widest mb-2">Tradição & Confiança</span>
        <h2 className="text-2xl font-black text-[#0A1931] leading-tight mb-3">Direto do Centro para você.</h2>
        <p className="text-gray-600 text-[13px] mb-6 leading-relaxed">
          Nossa distribuidora oferece uma selection rigorosa de produtos naturais, cosméticos e especiarias para o seu bem-estar, com a qualidade de sempre.
        </p>

        <div className="space-y-4 mt-auto">
          <div className="flex items-start gap-3">
            <div className="bg-[#FEDE00]/20 p-2.5 rounded-xl text-yellow-600 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-[#0A1931] text-xs">Endereço</p>
              <p className="text-gray-500 text-[11px] mt-0.5">Rua Félix Pacheco, 931 - Centro, Teresina - PI</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-blue-50 p-2.5 rounded-xl text-[#0A1931] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-[#0A1931] text-xs">Funcionamento</p>
              <p className="text-gray-500 text-[11px] mt-0.5">Seg a Mex: 08h às 18h | Sáb: 08h às 13h</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}