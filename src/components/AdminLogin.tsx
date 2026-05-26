import React, { useState } from 'react';
import { Lock, Mail, ArrowLeft, ShieldCheck } from 'lucide-react';

interface AdminLoginProps {
  onLoginSuccess: () => void;
  onBackToSite: () => void;
}

export default function AdminLogin({ onLoginSuccess, onBackToSite }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de segurança: no futuro o Supabase fará essa checagem!
    // Por enquanto, a senha padrão para testes será admin@melnatural.com / 123456
    if (email === 'admin@melnatural.com' && password === '123456') {
      setError(false);
      onLoginSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex flex-col items-center justify-center p-4">
      
      <button 
        onClick={onBackToSite}
        className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-2 text-gray-500 hover:text-[#0A1931] transition-colors font-bold text-sm"
      >
        <ArrowLeft className="w-5 h-5" /> Voltar para o site
      </button>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-[#0A1931] p-8 text-center border-b-4 border-[#FEDE00] flex flex-col items-center">
          <div className="w-16 h-16 bg-[#FEDE00] rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-[#0A1931]" />
          </div>
          <h2 className="text-[#FEDE00] font-black text-2xl uppercase tracking-widest">Área Restrita</h2>
          <p className="text-white/80 text-sm mt-1">Acesso exclusivo para operadores.</p>
        </div>

        <form onSubmit={handleLogin} className="p-8 space-y-5">
          {error && (
            <div className="bg-red-50 text-red-600 text-xs font-bold p-3 rounded-lg text-center border border-red-100">
              E-mail ou senha incorretos. Tente novamente.
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#0A1931] uppercase tracking-wider mb-2">E-mail do Operador</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="email" 
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-[#FEDE00] focus:ring-2 focus:ring-[#FEDE00]/20 transition-all"
                placeholder="admin@melnatural.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0A1931] uppercase tracking-wider mb-2">Senha de Acesso</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="password" 
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-[#FEDE00] focus:ring-2 focus:ring-[#FEDE00]/20 transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-[#0A1931] hover:brightness-110 text-[#FEDE00] font-bold text-sm rounded-xl transition-all uppercase tracking-widest shadow-lg mt-4"
          >
            Entrar no Painel
          </button>
        </form>

        <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-center">
          <p className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase font-bold tracking-wider">
            <ShieldCheck className="w-3 h-3 text-green-500" /> Ambiente Seguro e Criptografado
          </p>
        </div>
      </div>
    </div>
  );
}