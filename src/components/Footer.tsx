import { FaGithub, FaLinkedin , FaInstagram , FaArrowUp } from "react-icons/fa";
import { CodeXml } from 'lucide-react';

function Footer() {
  return (
    <footer className="border theme-border theme-bg-card ">
      <div className="container mx-auto px-4 py-10">

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">

          {/* Logo / présentation */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 font-semibold text-xl justify-center sm:justify-start">
        <CodeXml className="w-5 h-5 text-blue-900 text-xl" />
        <span>Bamou</span>
      </div>

            <p className="text-sm theme-text-secondary mt-2">
              Développeur Full-Stack
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/Bamou05"
                target="_blank"
                rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-800 text-gray-400 hover:text-violet-400  cursor-pointer transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/adama-soumare-1285982aa"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-800 text-gray-400 hover:text-violet-400  cursor-pointer transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/bamou05?stkn=MWJiODlrcHRwZHZwZA%3D%3D&utm_source=qr"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-800 text-gray-400 hover:text-violet-400  cursor-pointer transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <FaInstagram className="w-5 h-5" />
            </a>

          </div>

          {/* Retour en haut */}
          <a
            href="#accueil"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-violet-600 text-white hover:bg-violet-500 transition delay-150 duration-300 ease-in-out"
          >
            <FaArrowUp className="w-5 h-5" />
          </a>

        </div>

        <div className="border-t theme-border mt-8 pt-6 text-center">
          <p className="text-sm theme-text-secondary">
            © 2026 Bamou. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;