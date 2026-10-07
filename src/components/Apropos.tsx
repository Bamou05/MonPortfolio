import { 
  Briefcase,
  GraduationCap,
CodeXml,
Languages } from "lucide-react";

function Apropos() {
  return (
    <section id="a-propos" className="apropos theme-bg-section p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start mb-10">
        <div className="gap-4 flex flex-col md:ml-16">
            <p className="text-sm font-semibold bg-violet-500/10 text-violet-400 border-violet-500/30 rounded border w-fit px-3 py-1 ">
              À PROPOS
            </p>
            <p className=" theme-text-main text-2xl flex justify-start font-semibold text-start"> 
              Je suis un développeur passionné par la création d'applications performantes et modernes.
            </p>
            <p className="text-sm theme-text-secondary mb-4 flex justify-start text-start">
              Titulaire d'un diplôme de licence en génie informatique spécialité développement web et mobile, j'ai acquis une solide expérience dans la conception et le développement d'applications web et mobiles .Durant mes trois années d'apprentissage j'ai travaillé sur divers projets en alternance et en stage, ce qui m'a permis de développer mes compétences techniques et professionnelles. Mon objectif, transformer les idées en solutions numériques innovantes. 
            </p>
            <p className="text-2xl font-semibold theme-text-main  flex justify-start mb-4 text-start">
            </p>
            
            
        </div>
        <div className="justify-center grid grid-rows-2 grid-cols-2 divide-gray-800 w-full">
            <div className="p-5 border-r border-b theme-border">
                <div className="bg-violet-600 hover:bg-violet-800 rounded-md w-fit p-2 mb-3">
                  <Briefcase className="text-white w-5 h-5" />
                </div>
                <p className="theme-text-main text-2xl font-bold">+2 Stages</p>
                <p className="theme-text-secondary text-sm mt-1">Expérience</p>
              </div>
              <div className="p-5 border-b theme-border">
              <div  className="bg-violet-600 hover:bg-violet-800 rounded-md w-fit p-2 mb-3">
                  < GraduationCap className="text-white w-5 h-5"/>
              </div>

              <p className="theme-text-main text-2xl font-bold">
                Education
              </p>

              <p className="theme-text-secondary text-sm mt-1">
                Bac +3 
              </p>
            </div>
            <div className=" p-5 border-r theme-border">
              <div className="bg-violet-600 hover:bg-violet-800 rounded-md w-fit p-2 mb-3">
                 <CodeXml className="text-white w-5 h-5" />
              </div>

              <p className="theme-text-main text-2xl font-semibold">
                + 10 projets
              </p>

              <p className="theme-text-secondary text-sm mt-1">
                Scolaire & Professionnel
              </p>
            </div>
            <div className="p-5 ">
              <div className="bg-violet-600 hover:bg-violet-800 rounded-md w-fit p-2 mb-3">
                <Languages className="text-white w-5 h-5" />
              </div>
              <p className="theme-text-main text-2xl font-semibold">
                Langues
              </p>

              <p className="theme-text-secondary text-sm mt-1">
                Français, Anglais(notions)
              </p>
            </div>
        </div>
      </div>

    </section>
  );
}
export default Apropos;