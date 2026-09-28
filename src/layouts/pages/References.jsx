const sectors = [
  {
    number: "01",
    title: "Construction",
    description:
      "Accompagnement technique des projets de construction neuve, de la conception à la réalisation.",
  },
  {
    number: "02",
    title: "Rénovation",
    description:
      "Adaptation et modernisation des installations techniques dans les bâtiments existants.",
  },
  {
    number: "03",
    title: "Immobilier",
    description:
      "Solutions techniques adaptées aux immeubles résidentiels et aux projets immobiliers.",
  },
  {
    number: "04",
    title: "Tertiaire",
    description:
      "Installations techniques pour bureaux, sièges sociaux et bâtiments professionnels.",
  },
  {
    number: "05",
    title: "Commerce",
    description:
      "Des solutions pensées pour les espaces commerciaux, leurs usages et leurs contraintes.",
  },
  {
    number: "06",
    title: "Bâtiments publics",
    description:
      "Interventions techniques adaptées aux exigences spécifiques des infrastructures publiques.",
  },
];

const stats = [
  {
    value: "20+",
    label: "Années d'expérience",
  },
  {
    value: "4",
    label: "Domaines techniques",
  },
  {
    value: "6",
    label: "Secteurs d'intervention",
  },
  {
    value: "100%",
    label: "Engagement projet",
  },
];

function References() {
  return (
    <main className="bg-white text-[#203558]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#203558]">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/30" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">

          <div className="max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3A9CD7]">
              Notre expérience
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Des références
              <br />
              qui témoignent
              <br />
              de notre savoir-faire.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Au fil des années, TECHBAT a développé son expertise à travers
              des projets aux environnements, usages et contraintes techniques
              variés.
            </p>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-6 py-10 md:px-10 md:py-14 ${
                index !== 0 ? "border-l border-slate-200" : ""
              }`}
            >
              <p className="text-4xl font-semibold tracking-tight text-[#203558] md:text-5xl">
                {stat.value}
              </p>

              <p className="mt-3 text-sm uppercase tracking-[0.15em] text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* INTRO */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-12">

            <div className="lg:col-span-4">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3A9CD7]">
                Une expertise diversifiée
              </p>

            </div>

            <div className="lg:col-span-7 lg:col-start-6">

              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#203558] md:text-5xl">
                Des environnements différents,
                <br />
                une même exigence technique.
              </h2>

              <p className="mt-8 text-lg leading-8 text-[#58595B]">
                Chaque bâtiment possède ses propres contraintes, ses usages
                et ses exigences. Notre expérience dans différents secteurs
                nous permet d'adapter nos solutions aux réalités de chaque
                projet.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SECTEURS */}
      <section className="bg-slate-50 px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3A9CD7]">
              Nos secteurs
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#203558] md:text-5xl">
              Une expertise qui s'adapte à chaque contexte.
            </h2>

          </div>

          <div className="mt-16 border-t border-slate-200">

            {sectors.map((sector) => (
              <div
                key={sector.number}
                className="group grid gap-6 border-b border-slate-200 py-10 md:grid-cols-[100px_1fr_1.5fr] md:items-center md:py-12"
              >

                <span className="text-sm font-semibold text-slate-400">
                  {sector.number}
                </span>

                <h3 className="text-2xl font-semibold text-[#203558] transition-colors group-hover:text-[#3A9CD7] md:text-3xl">
                  {sector.title}
                </h3>

                <p className="max-w-xl text-base leading-7 text-[#58595B]">
                  {sector.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROJECT APPROACH */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* VISUAL */}
            <div className="relative">

              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-[#203558]">

                <div className="flex h-full flex-col justify-between p-8 md:p-12">

                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-[#3A9CD7]">
                      TECHBAT
                    </p>
                  </div>

                  <div>
                    <p className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
                      20+
                    </p>

                    <p className="mt-3 max-w-xs text-lg leading-7 text-slate-300">
                      années d'expérience au service des projets techniques.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* TEXT */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3A9CD7]">
                Notre approche
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#203558] md:text-5xl">
                Une référence ne se limite pas à un projet terminé.
              </h2>

              <p className="mt-7 text-lg leading-8 text-[#58595B]">
                Pour nous, chaque réalisation représente une expérience,
                une collaboration et une exigence de qualité. Nous cherchons
                à construire des solutions techniques fiables, durables et
                adaptées aux besoins réels de nos clients.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3A9CD7] text-xs font-bold text-white">
                    ✓
                  </span>

                  <p className="text-[#203558]">
                    Une approche adaptée aux contraintes du projet
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3A9CD7] text-xs font-bold text-white">
                    ✓
                  </span>

                  <p className="text-[#203558]">
                    Une coordination entre les différents domaines techniques
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3A9CD7] text-xs font-bold text-white">
                    ✓
                  </span>

                  <p className="text-[#203558]">
                    Une attention portée à la durabilité des installations
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8 lg:pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-3xl bg-[#203558] px-8 py-16 md:px-16 md:py-20">

            <div className="relative z-10 max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3A9CD7]">
                Votre projet
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Vous avez un projet technique ?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Échangeons sur vos besoins et construisons ensemble une
                solution adaptée à votre bâtiment.
              </p>

              <a
                href="/contact"
                className="mt-9 inline-flex items-center rounded-full bg-white px-7 py-4 font-semibold text-[#203558] transition hover:bg-slate-100"
              >
                Parlons de votre projet
                <span className="ml-3">→</span>
              </a>

            </div>

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

          </div>

        </div>

      </section>

    </main>
  );
}

export default References;