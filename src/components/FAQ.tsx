import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Enviam para todo o Brasil?',
      answer: 'Sim! Entregamos em todo o território nacional via transportadora, e na região de Teresina temos entrega expressa.'
    },
    {
      question: 'Possuem certificado de pureza?',
      answer: 'Sim, nosso mel possui certificação do Ministério da Agricultura, garantindo 100% de pureza e procedência.'
    },
    {
      question: 'Como funciona no atacado?',
      answer: 'Temos tabela especial para revendedores. Fale conosco no WhatsApp enviando seu CNPJ.'
    },
    {
      question: 'Qual a validade do mel?',
      answer: 'Bem armazenado, o nosso mel de padrão A possui validade recomendada de 2 anos (24 meses).'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="col-span-1 lg:col-span-4 lg:row-span-2 bg-[#E5E5E5] rounded-3xl p-6 md:p-8 border border-gray-300 shadow-sm flex flex-col h-full">
      <h5 className="text-[#0A1931] font-bold text-xs uppercase tracking-widest mb-6">Dúvidas Frequentes</h5>
      
      <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-1">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`bg-white/80 rounded-2xl border transition-colors ${isOpen ? 'border-[#0A1931]' : 'border-transparent'}`}
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-[#0A1931] text-xs pr-2 flex items-center gap-2">
                  <span className="text-[#FEDE00]">•</span> {faq.question}
                </span>
                <div className={`p-0.5 rounded-full transition-colors ${isOpen ? 'bg-[#0A1931] text-white' : 'text-gray-400'}`}>
                  {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </div>
              </button>
              
              {isOpen && (
                <div className="px-4 pb-4 pt-1">
                  <p className="text-gray-600 text-[11px] leading-relaxed pl-4 border-l-2 border-[#FEDE00]/50 ml-1">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
