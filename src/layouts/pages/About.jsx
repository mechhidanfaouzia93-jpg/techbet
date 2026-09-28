import {
  Building2,
  Target,
  Users,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Précision",
    description:
      "Chaque projet est étudié avec attention afin de proposer des solutions adaptées aux contraintes techniques.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Nous privilégions une collaboration directe et une communication claire avec nos clients.",
  },
  {
    icon: ShieldCheck,
    title: "Fiabilité",
    description:
      "Nous accordons une importance particulière à la qualité, à la sécurité et à la durabilité de nos installations.",
  },
  {
    icon: Lightbulb,
    title: "Solutions",
    description:
      "Notre expertise nous permet de rechercher des solutions techniques cohérentes et efficaces.",
  },
];

function About() {
  return (
    <div className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#203558] px-6 py-24 lg:px-8 lg:py-32">

        {/* Décoration */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[70px] border-[#3A9CD7]/10" />

        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full border-[60px] border-[#8CC53D]/10" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3A9CD7]">
            L'entreprise
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Une expertise technique
            <span className="block text-[#3A9CD7]">
              au service du bâtiment
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
            TECHBAT accompagne ses clients dans leurs projets en mettant
            l'expertise technique, la qualité et la proximité au cœur de
            chaque réalisation.
          </p>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* TEXTE */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
              Qui sommes-nous ?
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#203558] sm:text-4xl">
              Une entreprise spécialisée dans les techniques spéciales
            </h2>

            <div className="mt-7 space-y-5 text-[#58595B]">

              <p className="leading-8">
                TECHBAT intervient dans le domaine des techniques spéciales
                du bâtiment et accompagne ses clients dans la conception et
                la réalisation de leurs installations.
              </p>

              <p className="leading-8">
                Notre approche repose sur une compréhension précise des
                besoins de chaque projet, afin de proposer des solutions
                techniques adaptées, fiables et durables.
              </p>

              <p className="leading-8">
                Nous travaillons en collaboration avec les différents
                intervenants du projet afin de garantir une intégration
                cohérente des installations techniques.
              </p>

            </div>

          </div>


          {/* BLOC VISUEL */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-3xl bg-[#203558] p-10 lg:p-12">

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[30px] border-[#3A9CD7]/20" />

              <div className="relative">

                <Building2
                  size={54}
                  strokeWidth={1.3}
                  className="text-[#3A9CD7]"
                />

                <p className="mt-8 text-5xl font-bold text-white">
                  TECHBAT
                </p>

                <div className="mt-5 h-[2px] w-16 bg-[#8CC53D]" />

                <p className="mt-6 max-w-sm leading-7 text-slate-300">
                  Des compétences techniques complémentaires pour répondre
                  aux exigences des bâtiments d'aujourd'hui et de demain.
                </p>

              </div>
            </div>

            {/* Petit bloc flottant */}
            <div className="absolute -bottom-6 -left-5 rounded-2xl bg-white p-5 shadow-xl sm:-left-8">

              <p className="text-xs font-semibold uppercase tracking-wider text-[#3A9CD7]">
                Notre engagement
              </p>

              <p className="mt-1 text-lg font-bold text-[#203558]">
                Qualité & précision
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALEURS
      ===================================================== */}
      <section className="bg-slate-50 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
              Nos valeurs
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#203558] sm:text-4xl">
              Ce qui guide notre travail
            </h2>

            <p className="mt-5 leading-7 text-[#58595B]">
              Notre manière de travailler repose sur des principes simples :
              comprendre, proposer, réaliser et accompagner.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#203558] text-white transition-colors group-hover:bg-[#3A9CD7]">
                    <Icon
                      size={26}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#203558]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#58595B]">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERTISE / APPROCHE
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* TITRE */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
              Notre approche
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#203558] sm:text-4xl">
              De l'analyse à la réalisation
            </h2>

            <p className="mt-6 leading-7 text-[#58595B]">
              Chaque projet possède ses propres contraintes. Notre rôle est
              de les comprendre afin de construire une réponse technique
              adaptée.
            </p>

          </div>


          {/* ÉTAPES */}
          <div className="space-y-0">

            <div className="flex gap-6 border-b border-slate-200 py-7">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3A9CD7] text-sm font-bold text-white">
                01
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#203558]">
                  Comprendre
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#58595B]">
                  Analyse des besoins, des contraintes et des objectifs
                  du projet.
                </p>
              </div>

            </div>


            <div className="flex gap-6 border-b border-slate-200 py-7">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8CC53D] text-sm font-bold text-white">
                02
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#203558]">
                  Concevoir
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#58595B]">
                  Recherche et définition des solutions techniques
                  adaptées.
                </p>
              </div>

            </div>


            <div className="flex gap-6 border-b border-slate-200 py-7">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EE9E5C] text-sm font-bold text-white">
                03
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#203558]">
                  Réaliser
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#58595B]">
                  Mise en œuvre des installations dans le respect des
                  exigences du projet.
                </p>
              </div>

            </div>


            <div className="flex gap-6 py-7">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EE287A] text-sm font-bold text-white">
                04
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#203558]">
                  Accompagner
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#58595B]">
                  Rester disponible et assurer un suivi attentif du
                  projet.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-6 pb-24 lg:px-8">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#203558] px-8 py-16 text-center sm:px-12">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
            Votre projet
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            Vous avez un projet technique ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Échangeons sur vos besoins et découvrons ensemble les solutions
            adaptées à votre projet.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#203558] transition hover:bg-[#3A9CD7] hover:text-white"
          >
            Nous contacter
          </a>

        </div>

      </section>

    </div>
  );
}

export default About;