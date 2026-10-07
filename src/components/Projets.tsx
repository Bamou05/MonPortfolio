import { useRef, useState, useEffect } from "react";

import { ProjetCard } from "./ProjetCard";

import ImageKanban from "../assets/CaptureEcranKanban.png";
import CaptureMeto from "../assets/CaptureMeteo.png";
import CaptureQuiz from "../assets/CaptureQuiz.png";
import CaptureTodo from "../assets/CaptureTodo.png";
import SenDepanneimg from "../assets/SenDepanneimg.png";

function Projets() {
  const [activeProject, setActiveProject] = useState(0);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLElement>(null);

  // Permet de contrôler l'intervalle de défilement automatique
  const intervalRef = useRef<number | undefined>(undefined);

  // Permet de savoir si l'auto-scroll est toujours autorisé
  const autoScrollRef = useRef(true);

  // --------------------------------------------------
  // Détection du projet actuellement visible
  // --------------------------------------------------

  useEffect(() => {
    const container = projectsContainerRef.current;

    if (!container) return;

    const cards = container.children;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(cards).indexOf(entry.target);

            if (index !== -1) {
              setActiveProject(index);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.6,
      }
    );

    Array.from(cards).forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // --------------------------------------------------
  // Apparition de la section + défilement automatique
  // --------------------------------------------------

  useEffect(() => {
    const section = projectsSectionRef.current;
    const container = projectsContainerRef.current;

    if (!section || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // La section devient visible
        if (entry.isIntersecting) {
          setIsProjectsVisible(true);

          // On démarre l'auto-scroll seulement
          // s'il est encore autorisé
          if (
            autoScrollRef.current &&
            intervalRef.current === undefined
          ) {
            intervalRef.current = window.setInterval(() => {
              const maxScroll =
                container.scrollWidth - container.clientWidth;

              console.log("Position :", container.scrollLeft);
              console.log("Maximum :", maxScroll);

              // Si on est arrivé à la fin
              if (container.scrollLeft >= maxScroll) {
                console.log("🎯 FIN DU CAROUSEL");

                container.scrollTo({
                  left: 0,
                  behavior: "smooth",
                });
              } else {
                // Sinon on avance
                container.scrollBy({
                  left: 400,
                  behavior: "smooth",
                });
              }
            }, 3000);
          }
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();

      if (intervalRef.current !== undefined) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }
    };
  }, []);

  // --------------------------------------------------
  // Liste des projets
  // --------------------------------------------------

  const projects = [
    {
      number: "01",
      title: "Application météo",
      description:
        "Recherche d'une ville et consultation de la température, du vent et des coordonnées géographiques.",
      image: CaptureMeto,
      video: undefined,
      technologies: ["React", "TypeScript", "Open-Meteo"],
      link: "https://app-meteo-khaki.vercel.app/",
    },

    {
      number: "02",
      title: "Mini Kanban",
      description:
        "Application de gestion de tâches avec déplacement des tâches entre différentes colonnes.",
      image: ImageKanban,
      video: undefined,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://kanban-three-rho.vercel.app/",
    },

    {
      number: "03",
      title: "App Quiz",
      description:
        "Application interactive de quiz permettant de tester ses connaissances à travers des questions à choix multiples, avec un système de score pour suivre ses résultats.",
      image: CaptureQuiz,
      video: undefined,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://app-quiz-77vc.vercel.app/",
    },

    {
      number: "04",
      title: "App Todo",
      description:
        "Application de gestion de tâches permettant d'ajouter, d'organiser et de suivre ses tâches selon leur état d'avancement, grâce à une interface simple et intuitive.",
      image: CaptureTodo,
      video: undefined,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://app-todo-beta.vercel.app/",
    },

    {
      number: "05",
      title: "SenDepanne",
      description:
        "Projet de licence permettant de mettre en relation des artisans et des particuliers avec un système de géolocalisation et de suivi en temps réel.",
      image: SenDepanneimg,
      video: undefined,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
        "JWT",
      ],
      link: undefined,
    },
  ];

  return (
    <section
      id="projets"
      className="theme-bg-section py-12"
      ref={projectsSectionRef}
    >
      <div className="container mx-auto px-4">

        {/* En-tête de la section */}

        <div className="text-center mb-10">
          <p className="text-xs text-violet-400 uppercase mb-2">
            Projets à la une
          </p>

          <p className="text-3xl font-bold theme-text-main mb-2">
            Quelques-uns de mes projets récents
          </p>

          {/* Petite ligne animée */}

          <div
            className={`mx-auto mt-3 h-1 rounded-full bg-violet-400 transition-all duration-700 ${
              isProjectsVisible
                ? "w-20 opacity-100"
                : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Zone des projets */}

        <div
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          ref={projectsContainerRef}
        >
          {projects.map((project) => (
            <div
              key={project.number}
              className="w-[85vw] sm:w-[380px] shrink-0 snap-start"
            >
              <ProjetCard
                number={project.number}
                title={project.title}
                description={project.description}
                image={project.image}
                video={project.video}
                technologies={project.technologies}
                link={project.link}
              />
            </div>
          ))}
        </div>

        {/* Indicateurs */}

        <div className="flex justify-center gap-2 mt-6">
          {projects.map((project, index) => (
            <button
              key={project.number}
              onClick={() => {
                // Arrêter définitivement l'auto-scroll
                autoScrollRef.current = false;

                if (intervalRef.current !== undefined) {
                  window.clearInterval(intervalRef.current);
                  intervalRef.current = undefined;
                }

                const container = projectsContainerRef.current;

                if (!container) return;

                const card =
                  container.children[index] as HTMLElement;

                card.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "start",
                });
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeProject === index
                  ? "bg-violet-400 scale-125"
                  : "bg-gray-600"
              }`}
              aria-label={`Afficher le projet ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projets;

