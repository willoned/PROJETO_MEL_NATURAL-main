import React from 'react';

interface HeaderProps {
  onNavigateToCatalog: () => void;
}

export default function Header({ onNavigateToCatalog }: HeaderProps) {
  return (
    <header className="bg-[#0A1931] border-b-4 border-[#FEDE00] sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-[80px]">
          
          {/* Logo */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="flex items-center justify-center w-14 h-14 bg-[#FEDE00] rounded-full border-2 border-white shadow-lg">
              <span className="text-[#0A1931] text-2xl">🐝</span>
            </div>
            <div>
              <h1 className="text-[#FEDE00] font-bold text-2xl tracking-tight leading-tight uppercase">Mel Natural</h1>
              <p className="text-white text-[10px] tracking-widest uppercase opacity-80 mt-1">Distribuidora • Teresina</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center">
             <ul className="flex space-x-8 text-sm font-medium text-white/80">
               <li><a href="#" className="hover:text-[#FEDE00] transition-colors">Início</a></li>
               <li><a href="#sobre" className="hover:text-[#FEDE00] transition-colors">A Loja</a></li>
               {/* Mudamos de link (a) para botão (button) */}
               <li>
                 <button onClick={onNavigateToCatalog} className="hover:text-[#FEDE00] transition-colors cursor-pointer">
                   Produtos
                 </button>
               </li>
               <li><a href="#depoimentos" className="hover:text-[#FEDE00] transition-colors">Depoimentos</a></li>
               <li><a href="#faq" className="hover:text-[#FEDE00] transition-colors">Dúvidas</a></li>
             </ul>
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center">
             {/* Mudamos de link (a) para botão (button) */}
             <button 
               onClick={onNavigateToCatalog} 
               className="px-5 py-2.5 bg-[#FEDE00] hover:bg-yellow-400 text-[#0A1931] text-sm font-bold rounded-full uppercase tracking-wider shadow-md transition-colors cursor-pointer"
             >
               Comprar Agora
             </button>
          </div>

        </div>
      </div>
    </header>
  );
}