import { Hexagon, Phone, Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A1931] border-t-2 border-[#FEDE00] py-6 px-6 lg:px-10 text-white mt-8">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="text-[#FEDE00] text-lg">📞</span>
            <span>(86) 99876-5432 / (66) 91234-5678</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="text-[#FEDE00] text-lg">📸</span>
            <span>@melnaturalteresina</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium opacity-80 text-center md:text-right">
          <span className="text-[#FEDE00] text-lg">📍</span>
          <span>Rua Félix Pacheco, 931 - Centro, Teresina.</span>
        </div>

      </div>
    </footer>
  );
}
