import { Download } from "lucide-react";
import ImageAdama from "../assets/ImageAdama.png";
import peaky from "../assets/peaky-frames-Aowg76xooEY-unsplash.jpg"
import cv from "../assets/copiecv Adama SOUMARE (2).pdf"

function Accueil() {
  return (
    <section id="accueil" className="px-4 py-20 md:p-8 theme-bg-main "
   >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen  gap-12 md:gap-0">
        <div className="ml-6 md:ml-16 gap-4 flex flex-col">
            <p className="text-sm font-semibold bg-violet-500/10
              text-violet-400 
              border-violet-500/30 rounded border mb-4 w-fit px-3 py-1"
                >JE SUIS DEVELOPPEUR FULL-STACK
            </p>
            <p className="font-bold  flex justify-start text-3xl md:text-4xl theme-text-main "
             
            >
                    Bonjour, je suis <span className="text-violet-400 ml-2"> Adama</span>
            </p>
            <p className="text-lg md:text-2xl font-semibold  theme-text-main  flex justify-start mb-2 text-start">
                Je crée des applications web, mobiles performantes et modernes. 
            </p>
            <p className="text-sm  theme-text-secondary mb-4 flex justify-start text-start">
                Je suis un développeur passionné par la création d'applications web et mobiles performantes et modernes. Avec une expertise en développement full-stack, je m'efforce de transformer les idées en solutions numériques innovantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <a className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 scroll-smooth"  href ="#projets">
            Voir mes projets
            </a>
            <a
              href={cv}
              download="CV-Adama.pdf"
              className=" hover:bg-violet-600  theme-text-main px-4 py-2 rounded border border-violet-400 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50"
            >
              Télécharger mon CV
              <Download className="inline ml-2" size={18} />
            </a>
            </div>
            <div className="mt-4">
            <p className="text-lg font-semibold  theme-text-main flex justify-start">
              LES TECHNOLOGIES QUE J'UTILISE
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/javascript-icon-svg-download-png-9632909.png?f=webp&w=128" alt="JavaScript" className="w-6 h-6 md:w-7 md:h-7 animate-bounce" />
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/react-icon-svg-download-png-9632875.png?f=webp&w=128" alt="React" className="w-6 h-6 md:w-7 md:h-7 animate-bounce" />
                <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png?f=webp&w=128" alt="Node.js" className="w-6 h-6 md:w-7 md:h-7 animate-bounce" />
                <img src="https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png?f=webp&w=128" alt="TypeScript" className="w-6 h-6 md:w-7 md:h-7 animate-bounce" />
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/django-icon-svg-download-png-9632949.png?f=webp&w=128" alt="Django" className="w-6 h-6 md:w-7 md:h-7 animate-bounce" />
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-nestjs-icon-svg-download-png-14549256.png?f=webp&w=128" alt="NestJS" className="w-6 h-6 md:w-7 md:h-7 animate-bounce" />
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/git-icon-svg-download-png-15350605.png?f=webp&w=128" alt="Git" className="w-6 h-6 md:w-7 md:h-7 animate-bounce" />
            </div>
            </div>
        </div>
        <div className="flex justify-center items-center">
        <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] flex justify-center items-end">

          {/* Cercle violet */}
          <div className="absolute w-[270px] h-[270px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-900 bottom-0 shadow-[0_0_80px_rgba(139,92,246,0.35)]"></div>

          {/* Photo */}
          <img
            src={ImageAdama}
            alt="Adama"
            className="relative z-10 w-[300px] md:w-[420px] h-auto"
          />
              <img
          src={peaky}
          alt="Code"
          className="absolute z-20 w-24 md:w-[140px] right-0 top-20 md:top-[140px] rounded-lg border border-gray-700 shadow-xl animate-pulse"
        />
        </div>
      </div>
      </div>
    </section>
  );
}
export default Accueil;
