import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import AdminLogin from './components/AdminLogin';

export default function App() {
  // Agora temos 4 telas possíveis
  const [view, setView] = useState<'landing' | 'catalog' | 'admin-login' | 'admin-dashboard'>('landing');

  // Roteamento simples
  if (view === 'catalog') {
    return <Catalog onBack={() => setView('landing')} />;
  }

  if (view === 'admin-login') {
    return (
      <AdminLogin 
        onBackToSite={() => setView('landing')} 
        onLoginSuccess={() => setView('admin-dashboard')} 
      />
    );
  }

  if (view === 'admin-dashboard') {
    return (
      <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
          <h2 className="text-2xl font-black text-[#0A1931] mb-4">Bem-vindo ao Painel do Operador!</h2>
          <p className="text-gray-600 mb-6">A tela de gerenciamento será construída aqui.</p>
          <button onClick={() => setView('landing')} className="px-6 py-2 bg-[#0A1931] text-[#FEDE00] rounded-lg font-bold">
            Sair
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f2f2f2] font-sans text-[#1a1a1a] selection:bg-[#FEDE00] selection:text-[#0A1931] flex flex-col overflow-x-hidden">
      <Header onNavigateToCatalog={() => setView('catalog')} />
      <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 auto-rows-max">
        <Hero />
        <Products onNavigateToCatalog={() => setView('catalog')} />
        <Categories />
        <Testimonials />
        <FAQ />
        <About />
      </main>
      
      {/* Rodapé atualizado com o atalho secreto */}
      <footer className="bg-[#0A1931] text-white py-8 mt-8 text-center relative">
        <p className="text-sm text-white/60">© 2026 Mel Natural Distribuidora. Todos os direitos reservados.</p>
        
        {/* ATALHO PARA O ADMIN: Um botão discreto no rodapé */}
        <button 
          onClick={() => setView('admin-login')}
          className="absolute bottom-4 right-4 text-[10px] text-white/20 hover:text-white/80 uppercase tracking-widest transition-colors"
        >
          Acesso Restrito
        </button>
      </footer>
    </div>
  );
}