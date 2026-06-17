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
import ClientDashboard from './components/ClientDashboard';
import AdminDashboard from './components/AdminDashboard';
import BrandsMarquee from './components/BrandsMarquee';

export default function App() {
  const [view, setView] = useState<'landing' | 'catalog' | 'admin-login' | 'admin-dashboard' | 'client-dashboard'>('landing');

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
   return <AdminDashboard onLogout={() => setView('landing')} />;
  }

  if (view === 'client-dashboard') {
    return <ClientDashboard onBackToSite={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-[#f2f2f2] font-sans text-[#1a1a1a] selection:bg-[#FEDE00] selection:text-[#0A1931] flex flex-col overflow-x-hidden">
      <Header 
        onNavigateToCatalog={() => setView('catalog')} 
        onNavigateToClient={() => setView('client-dashboard')}
      />
      
      {/* A MÁGICA ACONTECE AQUI: Trocamos o grid restrito por flex-col para os blocos esticarem */}
      <main className="flex-1 w-full flex flex-col gap-12 md:gap-16 pb-12">
        <Hero />
        <BrandsMarquee />
        <Products onNavigateToCatalog={() => setView('catalog')} />
        <Categories />
        <Testimonials />
        <FAQ />
        <About />
      </main>
      
      <footer className="bg-[#0A1931] text-white py-8 mt-8 text-center relative">
        <p className="text-sm text-white/60">© 2026 Mel Natural Distribuidora. Todos os direitos reservados.</p>
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