import {
  Wind,
  Zap,
  Droplets,
  ShieldCheck,
} from "lucide-react";

const expertise = [
  {
    title: "HVAC",
    description:
      "Solutions de chauffage, ventilation et climatisation adaptées aux exigences techniques et énergétiques de chaque bâtiment.",
    icon: Wind,
    color: "#3A9CD7",
  },
  {
    title: "Électricité",
    description:
      "Conception et réalisation d'installations électriques fiables, performantes et adaptées aux besoins de chaque projet.",
    icon: Zap,
    color: "#EE287A",
  },
  {
    title: "Plomberie sanitaire",
    description:
      "Conception et réalisation des réseaux sanitaires et hydrauliques dans le respect des contraintes techniques du bâtiment.",
    icon: Droplets,
    color: "#8CC53D",
  },
  {
    title: "Détection incendie",
    description:
      "Solutions de détection et de sécurité incendie conçues pour assurer la protection des personnes et des bâtiments.",
    icon: ShieldCheck,
    color: "#EE9E5C",
  },
];

function Expertise() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#203558] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
            Notre savoir-faire
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Des solutions techniques
            <span className="block text-[#3A9CD7]">
              pensées pour vos projets
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Notre expertise couvre plusieurs domaines des techniques
            spéciales du bâtiment afin de proposer des installations
            cohérentes, fiables et performantes.
          </p>

        </div>
      </section>


      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
            Notre expertise
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#203558] sm:text-4xl">
            La maîtrise des techniques spéciales
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#58595B]">
            TECHBAT intervient dans différents domaines techniques du
            bâtiment. Notre objectif est de proposer des solutions adaptées
            aux besoins fonctionnels, énergétiques et réglementaires de
            chaque projet.
          </p>

        </div>


        {/* EXPERTISE CARDS */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Accent */}
                <div
                  className="absolute left-0 top-0 h-full w-1"
                  style={{ backgroundColor: item.color }}
                />

                <div className="flex items-start gap-6">

                  {/* ICON */}
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* CONTENT */}
                  <div>

                    <h3 className="text-xl font-bold text-[#203558]">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#58595B]">
                      {item.description}
                    </p>

                    <div
                      className="mt-5 h-[2px] w-10 transition-all duration-300 group-hover:w-16"
                      style={{ backgroundColor: item.color }}
                    />

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </section>


      {/* APPROCHE */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                Notre approche
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#203558] sm:text-4xl">
                Une vision globale des techniques du bâtiment
              </h2>

              <p className="mt-6 leading-8 text-[#58595B]">
                Au-delà de chaque spécialité, nous accordons une attention
                particulière à la coordination entre les différentes
                installations techniques.
              </p>

              <p className="mt-4 leading-8 text-[#58595B]">
                Cette approche permet de rechercher des solutions cohérentes,
                durables et adaptées aux contraintes spécifiques de chaque
                bâtiment.
              </p>

            </div>


            {/* POINTS */}
            <div className="rounded-3xl bg-[#203558] p-8 lg:p-10">

              <div className="space-y-7">

                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3A9CD7] text-sm font-bold text-white">
                    01
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Analyse du projet
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Comprendre les besoins et les contraintes techniques.
                    </p>
                  </div>
                </div>


                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8CC53D] text-sm font-bold text-white">
                    02
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Conception des solutions
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Définir les installations adaptées au projet.
                    </p>
                  </div>
                </div>


                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EE9E5C] text-sm font-bold text-white">
                    03
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Réalisation
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Mettre en œuvre les solutions avec précision.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Expertise;