import React, { useState } from 'react';
import { LayoutDashboard, Users, Brain, Package, LogOut, TrendingUp, AlertCircle, MessageCircle, ChevronRight } from 'lucide-react';
import SalesAnalytics from './SalesAnalytics';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  // Estado para controlar qual menu está ativo no momento
  const [activeTab, setActiveTab] = useState<'overview' | 'clients' | 'ai'>('overview');

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex flex-col md:flex-row font-sans">
      
      {/* Menu Lateral (Sidebar) */}
      <aside className="w-full md:w-64 bg-[#0A1931] text-white flex flex-col shrink-0 md:min-h-screen sticky top-0 z-50">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FEDE00] rounded-xl flex items-center justify-center font-bold text-xl text-[#0A1931]">🐝</div>
          <div>
            <h2 className="font-black text-[#FEDE00] leading-tight tracking-widest uppercase">Admin</h2>
            <p className="text-[10px] text-white/60 uppercase tracking-widest">Painel do Operador</p>
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'overview' ? 'bg-[#FEDE00] text-[#0A1931]' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
          >
            <LayoutDashboard className="w-5 h-5" /> Visão Geral
          </button>
          
          <button 
            onClick={() => setActiveTab('clients')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'clients' ? 'bg-[#FEDE00] text-[#0A1931]' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
          >
            <Users className="w-5 h-5" /> CRM de Clientes
          </button>

          <button 
            onClick={() => setActiveTab('ai')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all relative ${activeTab === 'ai' ? 'bg-blue-600 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
          >
            <Brain className="w-5 h-5" /> Agente IA
            <span className="absolute top-3 right-3 w-2 h-2 bg-[#FEDE00] rounded-full animate-pulse"></span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-white/70 hover:bg-white/10 hover:text-white transition-all">
            <Package className="w-5 h-5" /> Produtos
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-5 h-5" /> Encerrar Sessão
          </button>
        </div>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        
        {/* TAB 1: VISÃO GERAL */}
        {activeTab === 'overview' && (
          <SalesAnalytics />
        )}

        {/* TAB 2: CRM DE CLIENTES */}
        {activeTab === 'clients' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-8 flex justify-between items-end">
              <div>
                <h1 className="text-2xl font-black text-[#0A1931]">Gestão de Clientes</h1>
                <p className="text-sm text-gray-500">Base de dados e histórico de compras.</p>
              </div>
            </header>

            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-widest text-gray-500">
                    <th className="p-4 font-bold">Cliente</th>
                    <th className="p-4 font-bold hidden md:table-cell">Região</th>
                    <th className="p-4 font-bold">Última Compra</th>
                    <th className="p-4 font-bold text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {/* Linha de Tabela Fictícia */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <p className="font-bold text-[#0A1931]">João da Silva</p>
                      <p className="text-xs text-gray-500">+55 (86) 9999-9999</p>
                    </td>
                    <td className="p-4 hidden md:table-cell text-gray-600">Teresina, PI</td>
                    <td className="p-4 text-gray-600">Há 40 dias</td>
                    <td className="p-4 text-right">
                      <button className="text-blue-600 font-bold text-xs hover:underline">Ver Perfil</button>
                    </td>
                  </tr>
                   {/* Linha de Tabela Fictícia 2 */}
                   <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <p className="font-bold text-[#0A1931]">Maria Oliveira</p>
                      <p className="text-xs text-gray-500">+55 (86) 9888-8888</p>
                    </td>
                    <td className="p-4 hidden md:table-cell text-gray-600">Teresina, PI</td>
                    <td className="p-4 text-gray-600">Ontem</td>
                    <td className="p-4 text-right">
                      <button className="text-blue-600 font-bold text-xs hover:underline">Ver Perfil</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: AGENTE DE INTELIGÊNCIA (IA) */}
        {activeTab === 'ai' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <header className="mb-8">
              <h1 className="text-2xl font-black text-[#0A1931] flex items-center gap-2">
                <Brain className="w-8 h-8 text-blue-600" /> Agente Inteligente
              </h1>
              <p className="text-sm text-gray-500">Sugestões automatizadas com base em análise de dados.</p>
            </header>

            <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6 md:p-8">
              <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">Oportunidade de Venda</span>
              <h3 className="text-xl font-bold text-[#0A1931] mb-2">Padrão de Recompra Detetado</h3>
              <p className="text-gray-700 text-sm mb-6 max-w-2xl leading-relaxed">
                A Inteligência Artificial detetou que o cliente <strong>João da Silva</strong> tem um ciclo de consumo de Mel (500g) de aproximadamente 40 dias. A sua última compra foi há exatamente 40 dias. Existe uma alta probabilidade de conversão se o contactarmos agora.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md">
                  <MessageCircle className="w-5 h-5" /> Enviar Oferta pelo WhatsApp
                </button>
                <button className="bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-xl font-bold text-sm transition-colors">
                  Ignorar Sugestão
                </button>
              </div>
            </div>

          </div>
        )}

      </main>
    </div>
  );
}