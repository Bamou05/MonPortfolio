import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";


function Contact() {
  return (
    <section
      id="contact"
      className="theme-bg-main  py-7"
    >
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <p className="text-sm text-violet-400 uppercase">
            Contact
          </p>

          <p className="text-3xl font-bold theme-text-main mt-2">
            Travaillons ensemble
          </p>

          <p className="theme-text-secondary mt-3">
            Une idée, un projet ou une opportunité ?
            N'hésitez pas à me contacter.
          </p>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  
  {/* Informations */}
<div className="flex flex-col justify-between">
  <div>
    <p className="text-2xl font-semibold theme-text-main mb-4">
      Parlons de votre projet
    </p>

    <p className="theme-text-secondary mb-8 leading-7">
      Vous avez un projet, une idée ou une opportunité ?
      Je serais ravi d'échanger avec vous et de voir comment
      nous pouvons travailler ensemble.
      <p>« Le succès, c’est quand la préparation rencontre l’opportunité. » — Sénèque</p>
    </p>
  </div>

  <div className="space-y-4">

    <div className="group flex items-center gap-4 rounded-xl border theme-border theme-bg-section p-4 cursor-pointer transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 hover:scale-[1.02]">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-600/15 transition-all duration-300 group-hover:bg-violet-600 group-hover:shadow-md group-hover:shadow-violet-500/30 group-hover:scale-110 ">
        <Mail className="w-5 h-5 text-violet-400 transition-colors duration-300 group-hover:text-white" />
      </div>

      <div>
        <p className="text-xs theme-text-secondary  uppercase tracking-wider transition-colors duration-300 group-hover:text-violet-400">Email</p>
        <p className="theme-text-main font-medium">bamou6649@gmail.com.com</p>
      </div>
    </div>

    <div className="group flex items-center gap-4 rounded-xl border theme-border theme-bg-section p-4 cursor-pointer transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 hover:scale-[1.02]">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-600/15 transition-all duration-300 group-hover:bg-violet-600 group-hover:shadow-md group-hover:shadow-violet-500/30 group-hover:scale-110">
        <Phone className="w-5 h-5 text-violet-400 transition-colors duration-300 group-hover:text-white" />
      </div>

      <div>
        <p className="text-xs theme-text-secondary uppercase tracking-wider transition-colors duration-300 group-hover:text-violet-400">Téléphone</p>
        <p className="theme-text-main font-medium">+221 78 613 78 15</p>
      </div>
    </div>

    <div className="group flex items-center gap-4 rounded-xl border theme-border theme-bg-section p-4 cursor-pointer transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 hover:scale-[1.02]">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-600/15 transition-all duration-300 group-hover:bg-violet-600 group-hover:shadow-md group-hover:shadow-violet-500/30 group-hover:scale-110">
        <MapPin className="w-5 h-5 text-violet-400 transition-colors duration-300 group-hover:text-white" />
      </div>

      <div>
        <p className="text-xs theme-text-secondary uppercase tracking-wider transition-colors duration-300 group-hover:text-violet-400">Localisation</p>
        <p className="theme-text-main font-medium">Dakar, Sénégal</p>
      </div>
    </div>

  </div>
</div>

  {/* Formulaire */}
 <div className="rounded-2xl border theme-border theme-bg-card p-6">
  <p className="text-xl font-semibold theme-text-main mb-6">
    Envoyez-moi un message
  </p>
    <form className="space-y-5">

            <input
        type="text"
        placeholder="Votre nom"
        className="w-full rounded-lg border theme-border theme-bg-section p-3 theme-text-main theme-placeholder outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
        />

        <input
        type="text"
        placeholder="Votre email"
        className="w-full rounded-lg border theme-border theme-bg-section p-3 theme-text-main theme-placeholder outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
        />

            <input
        type="text"
        placeholder="Sujet "
        className="w-full rounded-lg border theme-border theme-bg-section p-3 theme-text-main theme-placeholder outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
        />

        <textarea
        placeholder="Votre message"
        rows={6}
        className="w-full resize-none rounded-lg border theme-border theme-bg-section p-3 theme-text-main theme-placeholder outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
    />

            <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
        >
        Envoyer le message
        <Send className="w-4 h-4" />
        </button>

    </form>
  </div>

    </div>

      </div>
    </section>
  );
}

export default Contact;