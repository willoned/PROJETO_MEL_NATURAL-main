import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';

interface PreCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export default function PreCheckoutModal({ isOpen, onClose, productName }: PreCheckoutModalProps) {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', email: '' });

  // Se o modal não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui no futuro enviaremos os dados para o Supabase!
    console.log("Dados capturados:", formData);
    
    // Por enquanto, redireciona para o WhatsApp com uma mensagem pronta
    const texto = `Olá! Meu nome é ${formData.name}. Gostaria de fechar o pedido do produto: ${productName}.`;
    const numeroWhatsApp = "5586999999999"; // Coloque o número real da loja aqui
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`, '_blank');
    
    onClose(); // Fecha o modal após enviar
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Fundo escuro (Overlay) */}
      <div 
        className="absolute inset-0 bg-[#0A1931]/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Caixa do Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Cabeçalho do Modal */}
        <div className="bg-[#0A1931] p-6 text-center relative border-b-4 border-[#FEDE00]">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="text-[#FEDE00] font-black text-xl uppercase tracking-widest mb-1">Quase lá!</h3>
          <p className="text-white/80 text-sm">Para continuarmos com seu pedido de <br/><strong className="text-white">{productName}</strong>, informe seus dados.</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#0A1931] uppercase tracking-wider mb-1.5">Seu Nome Completo</label>
            <input 
              type="text" 
              required
              placeholder="Ex: João da Silva"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FEDE00] focus:ring-2 focus:ring-[#FEDE00]/20 transition-all"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0A1931] uppercase tracking-wider mb-1.5">WhatsApp</label>
            <input 
              type="tel" 
              required
              placeholder="(86) 99999-9999"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FEDE00] focus:ring-2 focus:ring-[#FEDE00]/20 transition-all"
              value={formData.whatsapp}
              onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0A1931] uppercase tracking-wider mb-1.5">E-mail (Opcional)</label>
            <input 
              type="email" 
              placeholder="seuemail@exemplo.com"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FEDE00] focus:ring-2 focus:ring-[#FEDE00]/20 transition-all"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full mt-6 py-4 bg-[#0A1931] hover:brightness-110 text-[#FEDE00] font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all uppercase tracking-widest shadow-lg shadow-blue-900/10"
          >
            Continuar para o WhatsApp <ArrowRight className="w-4 h-4" />
          </button>

          <p className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 mt-4 uppercase font-bold tracking-wider">
            <ShieldCheck className="w-3 h-3 text-green-500" /> Seus dados estão seguros
          </p>
        </form>
      </div>
    </div>
  );
}