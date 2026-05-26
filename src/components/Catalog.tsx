import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, ArrowLeft } from 'lucide-react';
import PreCheckoutModal from './PreCheckoutModal'; // IMPORTAMOS O MODAL AQUI!

const ALL_PRODUCTS = [
  { id: 1, name: 'Mel Natural Puro (500g)', price: 45.00, category: 'Mel', image: 'https://images.unsplash.com/photo-1587049352851-8d4e891347ad?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'Extrato de Própolis Verde', price: 28.50, category: 'Fitoterápicos', image: 'https://images.unsplash.com/photo-1608528577891-eb05eb20d75a?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'Sabonete de Mel e Aveia', price: 18.00, category: 'Cosméticos', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400&auto=format&fit=crop' },
  { id: 4, name: 'Maca Peruana Cápsulas', price: 65.00, category: 'Suplementos', image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=400&auto=format&fit=crop' },
  { id: 5, name: 'Açafrão da Terra Puro', price: 15.50, category: 'Especiarias', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop' },
  { id: 6, name: 'Geleia Real', price: 120.00, category: 'Mel', image: 'https://images.unsplash.com/photo-1620189507195-68309c04c4d0?q=80&w=400&auto=format&fit=crop' },
];

const CATEGORIES = ['Todos', 'Mel', 'Fitoterápicos', 'Cosméticos', 'Suplementos', 'Especiarias'];

export default function Catalog({ onBack }: { onBack: () => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  // ESTADOS DO MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Função que abre o modal quando clica em comprar
  const handleBuyClick = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] w-full pb-20 relative">
      
      {/* O Modal invisível fica aguardando ser chamado */}
      <PreCheckoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={selectedProduct} 
      />

      <header className="bg-[#0A1931] border-b-4 border-[#FEDE00] sticky top-0 z-40 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center w-full md:w-auto justify-between">
            <button onClick={onBack} className="flex items-center gap-2 text-white/80 hover:text-[#FEDE00] transition-colors font-bold text-sm">
              <ArrowLeft className="w-5 h-5" /> Voltar
            </button>
            <h1 className="text-[#FEDE00] font-black text-xl uppercase tracking-widest md:ml-8">Catálogo Mel Natural</h1>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Buscar produtos..." 
              className="w-full bg-white/10 border border-white/20 rounded-full py-2.5 pl-10 pr-4 text-white placeholder-white/50 focus:outline-none focus:border-[#FEDE00]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-8 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm sticky top-28">
            <h3 className="font-bold text-[#0A1931] mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
              <Filter className="w-4 h-4 text-[#FEDE00]" /> Categorias
            </h3>
            <ul className="space-y-2">
              {CATEGORIES.map(category => (
                <li key={category}>
                  <button 
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${activeCategory === category ? 'bg-[#0A1931] text-[#FEDE00]' : 'text-gray-600 hover:bg-gray-100 hover:text-[#0A1931]'}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="flex-1">
          <div className="mb-6 flex justify-between items-end">
            <h2 className="text-2xl font-black text-[#0A1931]">{activeCategory === 'Todos' ? 'Todos os Produtos' : activeCategory}</h2>
            <p className="text-sm text-gray-500 font-medium">{filteredProducts.length} itens encontrados</p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-[#FEDE00] text-[#0A1931] text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full shadow-sm">{product.category}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-[#0A1931] leading-tight mb-2 flex-1">{product.name}</h3>
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                      <span className="text-lg font-black text-[#0A1931]">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                      
                      {/* BOTAO QUE ABRE O MODAL */}
                      <button 
                        onClick={() => handleBuyClick(product.name)}
                        className="w-10 h-10 bg-[#0A1931] rounded-full flex items-center justify-center text-[#FEDE00] hover:scale-110 transition-transform shadow-md"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
             <div className="bg-white rounded-3xl p-12 text-center border border-gray-200">
               <p className="text-gray-500 text-lg">Nenhum produto encontrado para "{searchTerm}".</p>
             </div>
          )}
        </div>
      </main>
    </div>
  );
}