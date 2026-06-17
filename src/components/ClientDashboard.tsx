import React from 'react';
import { Package, Clock, Sparkles, ArrowLeft, LogOut, ChevronRight } from 'lucide-react';

interface ClientDashboardProps {
  onBackToSite: () => void;
}

export default function ClientDashboard({ onBackToSite }: ClientDashboardProps) {
  // Dados simulados (Mock) de como seria o perfil de um cliente recorrente
  const clientData = {
    name: 'João da Silva',
    memberSince: 'Fevereiro 2026',
    loyaltyPoints: 350
  };

  const orderHistory = [
    { id: '#1042', date: '15/05/2026', status: 'Entregue', items: '2x Mel Natural Puro (500g), 1x Sabonete', total: 'R$ 108,00' },
    { id: '#0988', date: '10/04/2026', status: 'Entregue', items: '1x Mel Natural Puro (500g)', total: 'R$ 45,00' },
  ];

  return (
    <div className="min-h-screen bg-[#f2f2f2] pb-20">
      {/* Cabeçalho do Cliente */}
      <header className="bg-[#0A1931] border-b-4 border-[#FEDE00] px-4 md:px-8 py-6">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={onBackToSite}
            className="flex items-center gap-2 text-white/80 hover:text-[#FEDE00] transition-colors font-bold text-sm mb-6"
          >
            <ArrowLeft className="w-5 h-5" /> Voltar para a Loja
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-[#FEDE00] font-black text-3xl tracking-tight">Olá, {clientData.name}!</h1>
              <p className="text-white/80 text-sm mt-1">Cliente desde {clientData.memberSince}</p>
            </div>
            <button className="flex items-center gap-2 text-white/60 hover:text-red-400 text-sm font-bold transition-colors">
              <LogOut className="w-4 h-4" /> Sair da Conta
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Coluna da Esquerda: Histórico e Dados */}
        <div className="md:col-span-2 space-y-6">
          
          <section className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-[#0A1931] flex items-center gap-2">
                <Package className="w-6 h-6 text-[#FEDE00]" /> Meus Pedidos
              </h2>
            </div>
            
            <div className="space-y-4">
              {orderHistory.map((order, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white transition-colors gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-[#0A1931]">{order.id}</span>
                      <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {order.date}
                    </p>
                    <p className="text-sm text-gray-700">{order.items}</p>
                  </div>
                  <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2 shrink-0">
                    <span className="font-black text-[#0A1931]">{order.total}</span>
                    <button className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      Ver detalhes <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Coluna da Direita: Inteligência Artificial (Ofertas e Reposição) */}
        <div className="space-y-6">
          
          {/* Box de IA (Gatilho de Reposição) */}
          <div className="bg-gradient-to-br from-[#0A1931] to-blue-900 rounded-3xl p-6 border border-blue-800 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles className="w-24 h-24 text-[#FEDE00]" />
            </div>
            
            <div className="relative z-10">
              <span className="flex items-center gap-1.5 text-[10px] text-[#FEDE00] font-black uppercase tracking-widest mb-3 bg-[#FEDE00]/10 inline-flex px-3 py-1 rounded-full border border-[#FEDE00]/20">
                <Sparkles className="w-3 h-3" /> Sugestão Inteligente
              </span>
              <h3 className="text-white font-bold text-lg leading-tight mb-2">
                O seu Mel Natural está acabando?
              </h3>
              <p className="text-white/80 text-xs mb-5 leading-relaxed">
                Notamos que faz 40 dias desde a sua última compra de Mel (500g). Que tal repor seu estoque agora com frete grátis?
              </p>
              
              <button className="w-full py-3 bg-[#FEDE00] hover:bg-yellow-400 text-[#0A1931] font-black text-sm rounded-xl transition-all shadow-md">
                Repor Estoque Agora
              </button>
            </div>
          </div>

          {/* Fidelidade */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm text-center">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">Clube Mel Natural</p>
            <p className="text-3xl font-black text-[#0A1931]">{clientData.loyaltyPoints}</p>
            <p className="text-xs text-gray-500 mt-1 mb-4">pontos acumulados</p>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
              <div className="bg-[#FEDE00] h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-[10px] text-gray-400">Faltam 150 pontos para R$ 20 de desconto.</p>
          </div>

        </div>
      </main>
    </div>
  );
}