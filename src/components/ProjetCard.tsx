
type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  technologies: string[];
  link?: string;
};

 export function ProjetCard({
  number,
  title,
  description,
  image,
  video,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="w-full overflow-hidden rounded-2xl theme-border theme-bg-card  transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50">
      
      {/* Média et numéro du projet */}
      <div className="relative h-44 sm:h-50 overflow-hidden theme-bg-media">

        {image ? (
          <img
            src={image}
            alt={`Capture du projet ${title}`}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <video
            src={video}
            controls
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}

      <span className="absolute left-3 top-3 rounded bg-gray-950/80 px-2 py-1 text-xs text-white">
        {number}
      </span>

    </div>

      {/* Informations */}
      <div className="p-5">

        <p className="mb-2 text-lg font-semibold theme-text-main transition-colors duration-300">
          {title}
        </p>

        <p className="mb-3 text-sm theme-text-secondary">
          {description}
        </p>

        {/* Technologies utilisées */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded bg-violet-950 px-2 py-1 text-xs text-violet-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Lien du projet */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-violet-400 hover:text-violet-300"
          >
            Voir le projet ↗
          </a>
        )}

      </div>
    </article>
  );
}

export default ProjetCard;