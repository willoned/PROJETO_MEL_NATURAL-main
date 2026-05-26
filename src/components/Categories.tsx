import { ShieldCheck, Leaf, Sparkles, Zap, Wheat } from 'lucide-react';

export default function Categories() {
  const categories = [
    {
      icon: "🍯",
      title: 'Mel Premium',
      description: 'Pureza garantida',
    },
    {
      icon: "🌿",
      title: 'Fitoterápicos',
      description: 'O poder das plantas',
    },
    {
      icon: "🧴",
      title: 'Cosméticos',
      description: 'Beleza natural',
    },
    {
      icon: "💪",
      title: 'Suplementos',
      description: 'Mais energia',
    },
    {
      icon: "🌶️",
      title: 'Especiarias',
      description: 'Tempero natural',
    },
  ];

  return (
    <section className="col-span-1 lg:col-span-8 lg:row-span-1 bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col justify-center">
      <span className="text-[#0A1931] font-bold text-xs uppercase tracking-widest mb-4">Nossas Linhas</span>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 h-full items-center">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4 bg-[#f9f9f9] rounded-2xl border border-gray-100 hover:border-[#FEDE00] hover:bg-[#FEDE00]/5 transition-colors text-center h-full">
            <span className="text-3xl mb-3">{category.icon}</span>
            <h3 className="text-[11px] md:text-xs font-bold uppercase text-[#0A1931]">{category.title}</h3>
            <p className="text-[10px] text-gray-500 mt-1">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
