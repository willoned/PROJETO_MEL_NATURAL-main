import React, { useState } from 'react';
import { DollarSign, ShoppingCart, ArrowUpRight, ArrowDownRight, Calendar, HelpCircle, TrendingUp, PackageOpen, BarChart2, Calculator, Settings2, AlertTriangle, Edit2, Check, X, Clock } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function SalesAnalytics() {
  // Controle de Abas Internas e Tempo
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'charts' | 'simulator'>('overview');
  const [dateFilter, setDateFilter] = useState(30);
  const multiplier = dateFilter / 30; 
  
  // Dados Principais
  const currentGrossRevenue = 12450 * multiplier;
  const currentNetRevenue = 8210 * multiplier;
  const currentTicket = 87.67; 
  const dailySalesCount = 14; // Nova métrica: Vendas no dia
  const dailySalesRevenue = 450.00; 

  // Estados da Meta Interativa
  const [monthlyTarget, setMonthlyTarget] = useState(17000);
  const [tempTarget, setTempTarget] = useState('17000');
  const [isEditingTarget, setIsEditingTarget] = useState(false);
  const [activeHelp, setActiveHelp] = useState<string | null>(null);

  const progressPercent = Math.min(Math.round((currentGrossRevenue / monthlyTarget) * 100), 100);
  const remainingValue = Math.max(monthlyTarget - currentGrossRevenue, 0);

  // Estados do Simulador e Gráficos
  const [simInvestment, setSimInvestment] = useState<number>(1000);
  const [simMargin, setSimMargin] = useState<number>(60);
  const projectedRevenue = simInvestment * (1 + (simMargin / 100));
  const projectedProfit = projectedRevenue - simInvestment;
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');
  const [chartMetric, setChartMetric] = useState<'revenue' | 'profit'>('revenue');

  // Funções de Ação
  const toggleHelp = (metric: string) => setActiveHelp(activeHelp === metric ? null : metric);
  const handleSaveTarget = () => {
    const parsed = parseFloat(tempTarget);
    if (!isNaN(parsed) && parsed > 0) {
      setMonthlyTarget(parsed);
      setIsEditingTarget(false);
    }
  };

  // Base de Dados de Produtos (Com valor de venda e alertas)
  const productPerformance = [
    { 
      name: 'Mel Natural Puro (500g)', 
      stock: 45, 
      sellPrice: 'R$ 45,00',
      revenue: 'R$ 5.580,00', 
      status: 'Saída Rápida',
      stockAlert: 'Normal',
      statusColor: 'bg-green-100 text-green-700 border-green-200'
    },
    { 
      name: 'Extrato de Própolis', 
      stock: 5, 
      sellPrice: 'R$ 35,00',
      revenue: 'R$ 1.435,00', 
      status: 'Saída Rápida',
      stockAlert: 'Estoque Baixo!',
      statusColor: 'bg-amber-100 text-amber-700 border-amber-200'
    },
    { 
      name: 'Sabonete Artesanal Aveia', 
      stock: 180, 
      sellPrice: 'R$ 15,00',
      revenue: 'R$ 675,00', 
      status: 'Produto Parado',
      stockAlert: 'Excesso (Promoção Recomendada)',
      statusColor: 'bg-red-100 text-red-700 border-red-200'
    },
    { 
      name: 'Mel Natural Puro (1kg)', 
      stock: 20, 
      sellPrice: 'R$ 70,00',
      revenue: 'R$ 4.760,00', 
      status: 'Saída Estável',
      stockAlert: 'Normal',
      statusColor: 'bg-blue-100 text-blue-700 border-blue-200'
    },
  ];

  const chartData = [
    { name: 'Semana 1', revenue: 3200 * multiplier, profit: 2100 * multiplier },
    { name: 'Semana 2', revenue: 2800 * multiplier, profit: 1800 * multiplier },
    { name: 'Semana 3', revenue: 4100 * multiplier, profit: 2900 * multiplier },
    { name: 'Semana 4', revenue: 2350 * multiplier, profit: 1410 * multiplier },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
        <div>
          <h2 className="text-xl font-black text-[#0A1931] uppercase tracking-wide">Inteligência Financeira</h2>
          <p className="text-xs text-gray-500 mt-0.5">Controle de caixa, projeções e análise gráfica.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl border border-gray-200">
            <Calendar className="w-4 h-4 text-blue-600" />
            <select 
              className="bg-transparent text-sm font-bold text-[#0A1931] focus:outline-none cursor-pointer"
              value={dateFilter}
              onChange={(e) => setDateFilter(Number(e.target.value))}
            >
              <option value={7}>Últimos 7 Dias</option>
              <option value={15}>Últimos 15 Dias</option>
              <option value={30}>Últimos 30 Dias</option>
            </select>
          </div>
        </div>
      </div>

      {/* Navegação de Abas */}
      <div className="flex space-x-2 bg-gray-200/50 p-1.5 rounded-2xl w-fit">
        <button onClick={() => setActiveSubTab('overview')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeSubTab === 'overview' ? 'bg-white text-[#0A1931] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}><DollarSign className="w-4 h-4" /> Resumo</button>
        <button onClick={() => setActiveSubTab('charts')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeSubTab === 'charts' ? 'bg-white text-[#0A1931] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}><BarChart2 className="w-4 h-4" /> Gráficos</button>
        <button onClick={() => setActiveSubTab('simulator')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeSubTab === 'simulator' ? 'bg-[#FEDE00] text-[#0A1931] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}><Calculator className="w-4 h-4" /> Simulador de Cenários</button>
      </div>

      {/* ABA 1: RESUMO COMPLETO (PREENCHENDO OS ESPAÇOS BRANCOS) */}
      {activeSubTab === 'overview' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          
          {/* Cartões do Topo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Receita Bruta', value: `R$ ${currentGrossRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, icon: DollarSign, color: 'bg-blue-500' },
              { title: 'Lucro Líquido', value: `R$ ${currentNetRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, icon: TrendingUp, color: 'bg-green-500' },
              { title: 'Estoque Atual', value: 'R$ 2.815,00', icon: PackageOpen, color: 'bg-amber-500' },
              { title: 'Ticket Médio', value: `R$ ${currentTicket.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, icon: ShoppingCart, color: 'bg-purple-500' },
            ].map((metric, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div className={`w-10 h-10 ${metric.color} text-white rounded-xl flex items-center justify-center shadow-md mb-4`}>
                  <metric.icon className="w-5 h-5" />
                </div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">{metric.title}</p>
                <p className="text-2xl font-black text-[#0A1931] mt-1">{metric.value}</p>
              </div>
            ))}
          </div>

          {/* Ocupando a Área em Branco: Tabela Detalhada e Metas */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            
            {/* Raio-X de Mercadorias (Esquerda) */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm xl:col-span-2 overflow-hidden flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-sm font-black text-[#0A1931] uppercase tracking-wider">Raio-X de Mercadorias</h3>
                  <p className="text-xs text-gray-500 mt-1">Acompanhamento unitário e status de movimentação.</p>
                </div>
              </div>

              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-gray-50 border-y border-gray-200 text-[10px] uppercase tracking-widest text-gray-500">
                      <th className="p-4 font-bold">Mercadoria</th>
                      <th className="p-4 font-bold">Valor Base</th>
                      <th className="p-4 font-bold text-center">Volume (Estoque)</th>
                      <th className="p-4 font-bold">Receita Gerada</th>
                      <th className="p-4 font-bold text-center">Status Comercial</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    {productPerformance.map((product, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors">
                        <td className="p-4 font-bold text-[#0A1931]">{product.name}</td>
                        <td className="p-4 font-medium text-gray-600">{product.sellPrice} <span className="text-[10px] text-gray-400 font-normal">/un</span></td>
                        <td className="p-4 text-center">
                          <p className="font-black text-[#0A1931]">{product.stock} un.</p>
                          <p className={`text-[9px] font-bold mt-0.5 uppercase tracking-wider ${product.stockAlert.includes('Baixo') || product.stockAlert.includes('Excesso') ? 'text-red-500' : 'text-gray-400'}`}>
                            {product.stockAlert}
                          </p>
                        </td>
                        <td className="p-4 font-black text-green-600">{product.revenue}</td>
                        <td className="p-4 text-center">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border ${product.statusColor}`}>
                            {product.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Painel Lateral Direito: Metas e Vendas do Dia */}
            <div className="space-y-6">
              
              {/* Card: Pulso Diário (Vendas de Hoje) */}
              <div className="bg-gradient-to-br from-[#0A1931] to-blue-900 p-6 rounded-3xl border border-blue-800 shadow-md text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[#FEDE00]" />
                  <h3 className="text-sm font-black uppercase tracking-wider">Vendas Hoje</h3>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-4xl font-black">{dailySalesCount} <span className="text-sm text-white/60 font-medium">pedidos</span></p>
                    <p className="text-sm font-bold text-green-400 mt-1">+ R$ {dailySalesRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                  </div>
                </div>
              </div>

              {/* Card: Meta Global Interativa */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-sm font-black text-[#0A1931] uppercase tracking-wider">Meta Global ({dateFilter} Dias)</h3>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-6">
                  {isEditingTarget ? (
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">R$</span>
                        <input 
                          type="number"
                          className="w-full bg-white border border-gray-200 rounded-xl py-2 pl-9 pr-3 text-sm font-bold text-[#0A1931] focus:outline-none focus:border-blue-500"
                          value={tempTarget}
                          onChange={(e) => setTempTarget(e.target.value)}
                          autoFocus
                        />
                      </div>
                      <button onClick={handleSaveTarget} className="p-2 bg-green-500 text-white rounded-xl hover:bg-green-600"><Check className="w-4 h-4" /></button>
                      <button onClick={() => { setIsEditingTarget(false); setTempTarget(monthlyTarget.toString()); }} className="p-2 bg-gray-200 text-gray-600 rounded-xl hover:bg-gray-300"><X className="w-4 h-4" /></button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Alvo Configurado</p>
                        <p className="text-lg font-black text-[#0A1931]">R$ {monthlyTarget.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                      </div>
                      <button onClick={() => setIsEditingTarget(true)} className="p-2 bg-white hover:bg-gray-100 text-gray-500 hover:text-[#0A1931] rounded-xl border border-gray-200 transition-all flex items-center gap-1.5 text-xs font-bold shadow-sm">
                        <Edit2 className="w-3.5 h-3.5" /> Ajustar
                      </button>
                    </div>
                  )}
                </div>

                {/* Barra de Progresso */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-gray-600 mb-2">
                      <span>Atingido</span>
                      <span className="text-[#0A1931]">{progressPercent}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div className="bg-[#FEDE00] h-3 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    {remainingValue > 0 ? (
                      <>Faltam <strong>R$ {remainingValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> para bater a meta.</>
                    ) : (
                      <span className="text-green-600 font-bold">🎉 Meta superada!</span>
                    )}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* ABA 2: GRÁFICOS INTERATIVOS */}
      {activeSubTab === 'charts' && (
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm animate-in fade-in duration-300">
           {/* ... MANTIDO EXATAMENTE IGUAL AO ANTERIOR ... */}
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h3 className="text-lg font-black text-[#0A1931]">Análise Visual de Performance</h3>
              <p className="text-xs text-gray-500">Cruze variáveis para identificar padrões de vendas.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 bg-gray-50 p-2 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2 px-2">
                <Settings2 className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-bold text-gray-600 uppercase">Estilo:</span>
                <select className="bg-white border border-gray-200 rounded-lg text-xs font-bold px-2 py-1" value={chartType} onChange={(e) => setChartType(e.target.value as any)}>
                  <option value="bar">Barras</option>
                  <option value="line">Linha</option>
                </select>
              </div>
              <div className="w-px h-6 bg-gray-200"></div>
              <div className="flex items-center gap-2 px-2">
                <span className="text-xs font-bold text-gray-600 uppercase">Variável:</span>
                <select className="bg-white border border-gray-200 rounded-lg text-xs font-bold px-2 py-1" value={chartMetric} onChange={(e) => setChartMetric(e.target.value as any)}>
                  <option value="revenue">Receita Bruta</option>
                  <option value="profit">Lucro Líquido</option>
                </select>
              </div>
            </div>
          </div>

          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === 'bar' ? (
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dx={-10} tickFormatter={(val) => `R$ ${val}`} />
                  <Tooltip cursor={{fill: '#F3F4F6'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                  <Legend wrapperStyle={{paddingTop: '20px'}} />
                  <Bar dataKey={chartMetric} name={chartMetric === 'revenue' ? 'Receita Bruta' : 'Lucro Líquido'} fill={chartMetric === 'revenue' ? '#3B82F6' : '#22C55E'} radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              ) : (
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dx={-10} tickFormatter={(val) => `R$ ${val}`} />
                  <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                  <Legend wrapperStyle={{paddingTop: '20px'}} />
                  <Line type="monotone" dataKey={chartMetric} name={chartMetric === 'revenue' ? 'Receita Bruta' : 'Lucro Líquido'} stroke={chartMetric === 'revenue' ? '#3B82F6' : '#22C55E'} strokeWidth={4} dot={{r: 6, strokeWidth: 2}} activeDot={{r: 8}} />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* ABA 3: SIMULADOR DE CENÁRIOS */}
      {activeSubTab === 'simulator' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-300">
          {/* ... MANTIDO EXATAMENTE IGUAL AO ANTERIOR ... */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FEDE00] rounded-xl flex items-center justify-center shadow-lg shadow-yellow-200">
                <Calculator className="w-6 h-6 text-[#0A1931]" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#0A1931]">Projeção de Estoque</h3>
                <p className="text-xs text-gray-500">Simule compras para prever o retorno financeiro.</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#0A1931] uppercase tracking-wider mb-2">1. Investimento em mercadoria</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">R$</span>
                  <input type="number" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 font-black text-lg text-[#0A1931] focus:outline-none focus:border-blue-500 transition-colors" value={simInvestment} onChange={(e) => setSimInvestment(Number(e.target.value))} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A1931] uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>2. Margem de lucro pretendida</span>
                  <span className="text-blue-600">{simMargin}%</span>
                </label>
                <input type="range" min="10" max="200" step="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" value={simMargin} onChange={(e) => setSimMargin(Number(e.target.value))} />
                <div className="flex justify-between text-[10px] text-gray-400 font-bold mt-2">
                  <span>Mínima (10%)</span>
                  <span>Máxima (200%)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0A1931] p-6 md:p-8 rounded-3xl border border-blue-900 shadow-xl text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10"><TrendingUp className="w-32 h-32 text-[#FEDE00]" /></div>
            <div className="relative z-10">
              <h4 className="text-xs font-bold text-[#FEDE00] uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Resultado da Projeção</h4>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest font-medium mb-1">Receita Total Estimada</p>
                  <p className="text-3xl font-black text-white">R$ {projectedRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-xs text-white/60 uppercase tracking-widest font-medium mb-1 flex items-center gap-2"><DollarSign className="w-4 h-4 text-green-400" /> Lucro Líquido Previsto</p>
                  <p className="text-4xl font-black text-green-400">R$ {projectedProfit.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}