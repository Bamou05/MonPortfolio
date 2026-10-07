import { useState, useEffect } from 'react';
import { CodeXml, Sun, Moon, Menu, X } from "lucide-react";



export default function Navbar() {


const [isDark, setIsDark] = useState(
  () => localStorage.getItem("theme") !== "light"
);

useEffect(() => {
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );
}, [isDark]);

useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    observer.disconnect();
  };
}, []);

const [activeSection, setActiveSection] = useState("#accueil");
const [isMenuOpen, setIsMenuOpen] = useState(false);

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];


  return (
    
    <nav className="flex justify-between items-center p-4 h-16 border-b-2 w-full fixed z-50"
    style={{
    backgroundColor: "var(--bg-navbar)",
    color: "var(--text-main)",
    borderColor: "var(--border-main)",
  }}
  >
      
      <div className="flex items-center gap-2 ml-17 font-semibold">
        <CodeXml className="w-5 h-5 text-blue-900" />
        <span>Bamou</span>
      </div>
      <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-violet-500/10 transition"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-violet-400" />
          ) : (
            <Menu className="w-6 h-6 text-violet-400" />
          )}
        </button>
      <ul className="hidden md:flex gap-4 font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={activeSection === link.href ? "border-b border-violet-400" : ""}
                >
                  {link.label}
                </a>
              </li>
            ))}
      </ul>
      {isMenuOpen && (
  <div
    className="absolute top-16 left-0 w-full md:hidden border-b-2 p-6"
    style={{
      backgroundColor: "var(--bg-navbar)",
      color: "var(--text-main)",
      borderColor: "var(--border-main)",
    }}
  >
    <ul className="flex flex-col gap-5 font-semibold">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={() => {
              setActiveSection(link.href);
              setIsMenuOpen(false);
            }}
            className={
              activeSection === link.href
                ? "text-violet-400"
                : ""
            }
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
    <div
  className="mt-6 pt-4 border-t flex items-center justify-between"
  style={{ borderColor: "var(--border-main)" }}
>
  {/* Mode sombre */}
  <button
    type="button"
    onClick={() => {
      const newTheme = !isDark;
      setIsDark(newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");
    }}
    className="p-2 rounded-full hover:bg-violet-500/10 transition"
    aria-label={
      isDark ? "Activer le mode clair" : "Activer le mode sombre"
    }
  >
    {isDark ? (
      <Moon className="w-5 h-5 text-violet-400" />
    ) : (
      <Sun className="w-5 h-5 text-violet-400" />
    )}
  </button>

  {/* Bouton contact */}
  <a
    href="https://wa.me/221786137815?text=Bonjour%20Adama%2C%20je%20viens%20de%20voir%20votre%20portfolio."
    target="_blank"
    rel="noopener noreferrer"
    className="bg-violet-600 hover:bg-indigo-500 font-semibold text-white py-2 px-4 rounded hover:transition-all duration-300 hover:-translate-y-1"
  >
    Me contacter
  </a>
</div>
  </div>
)}
        <div className=" hidden md:flex items-center gap-4">
        <button
          type="button"
          onClick={() => {
            const newTheme = !isDark;

            setIsDark(newTheme);
            localStorage.setItem(
              "theme",
              newTheme ? "dark" : "light"
            );
          }}
          className="p-2 rounded-full hover:bg-violet-500/10 transition"
          aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-violet-400" />
          ) : (
            <Sun className="w-5 h-5 text-violet-400" />
          )}
        </button>
      <a
        href="https://wa.me/221786137815?text=Bonjour%20Adama%2C%20je%20viens%20de%20voir%20votre%20portfolio."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-violet-600 hover:bg-indigo-500 font-semibold text-white py-2 px-2 rounded mr-16 hover:transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50"
      >
        Me contacter 
      </a>
      </div>
    </nav>
  
  );
}