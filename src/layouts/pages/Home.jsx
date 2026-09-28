
function Home() {
  const services = [
    {
      number: "01",
      title: "HVAC",
      description:
        "Chauffage, ventilation et climatisation pour des bâtiments confortables, performants et économes en énergie.",
      color: "#3A9CD7",
    },
    {
      number: "02",
      title: "Électricité",
      description:
        "Des installations électriques conçues pour répondre aux exigences techniques, fonctionnelles et réglementaires.",
      color: "#EE287A",
    },
    {
      number: "03",
      title: "Plomberie sanitaire",
      description:
        "Des réseaux sanitaires et hydrauliques fiables, pensés pour la durabilité et la performance.",
      color: "#8CC53D",
    },
    {
      number: "04",
      title: "Détection incendie",
      description:
        "Des solutions de sécurité incendie intégrées pour protéger efficacement les personnes et les bâtiments.",
      color: "#EE9E5C",
    },
  ];

  return (
    <main className="bg-white text-[#203558]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#203558]">

        {/* Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90"
            alt="Architecture moderne"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#12233d]/85" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#203558] via-[#203558]/90 to-[#203558]/35" />
        </div>

        {/* Decorative lines */}
        <div className="absolute right-0 top-0 h-full w-[38%] border-l border-white/10 opacity-40" />
        <div className="absolute right-[12%] top-0 h-full w-px bg-white/10" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 lg:px-8">

          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#3A9CD7]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#3A9CD7]">
                Techniques spéciales du bâtiment
              </span>
            </div>


            {/* Title */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">

              L'expertise technique

              <span className="block">
                au service de
              </span>

              <span className="block text-[#EE9E5C]">
                vos projets.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              TECHBAT accompagne les projets de construction et de
              rénovation dans la conception et la réalisation de
              solutions techniques fiables, performantes et durables.
            </p>


            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="/realisations"
                className="group inline-flex items-center gap-4 bg-white px-7 py-4 text-sm font-bold text-[#203558] transition-all duration-300 hover:bg-[#3A9CD7] hover:text-white"
              >
                Découvrir nos réalisations

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/contact"
                className="group inline-flex items-center gap-4 border border-white/40 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#203558]"
              >
                Parlons de votre projet

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

            </div>


            {/* Bottom information */}
            <div className="mt-16 flex flex-wrap gap-10 border-t border-white/15 pt-7">

              <div>
                <p className="text-3xl font-bold text-white">20+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                  années d'expérience
                </p>
              </div>

              <div className="h-12 w-px bg-white/15" />

              <div>
                <p className="text-3xl font-bold text-white">04</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                  domaines techniques
                </p>
              </div>

              <div className="h-12 w-px bg-white/15" />

              <div>
                <p className="text-3xl font-bold text-white">
                  100<span className="text-[#3A9CD7]">%</span>
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                  engagement
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* Vertical label */}
        <div className="absolute bottom-10 right-8 hidden rotate-90 text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 lg:block">
          TECHBAT — Engineering & Building
        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">

            {/* Left */}
            <div>

              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#3A9CD7]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#3A9CD7]">
                  À propos de TECHBAT
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-[#203558] sm:text-5xl">
                La technique n'est
                <span className="block text-[#3A9CD7]">
                  jamais un détail.
                </span>
              </h2>

            </div>


            {/* Right */}
            <div>

              <p className="text-xl leading-9 text-[#58595B]">
                Nous mettons notre expérience et notre savoir-faire
                technique au service de projets exigeants, en construction
                comme en rénovation.
              </p>

              <p className="mt-6 leading-8 text-[#58595B]">
                Notre approche repose sur une compréhension globale du
                bâtiment et une coordination précise des différentes
                techniques spéciales. Chaque installation est pensée pour
                être fiable, performante et durable.
              </p>

              <a
                href="/a-propos"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#203558]"
              >
                En savoir plus

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="bg-[#F5F7F9] py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <div className="max-w-2xl">

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#3A9CD7]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#3A9CD7]">
                Notre expertise
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-bold text-[#203558] sm:text-5xl">
              Des solutions techniques
              <span className="block text-[#3A9CD7]">
                pensées pour durer.
              </span>
            </h2>

          </div>


          {/* Services */}
          <div className="mt-16">

            {services.map((service, index) => (
              <a
                href="/services"
                key={service.number}
                className="group relative flex flex-col gap-6 border-t border-slate-300 py-8 transition-all duration-300 hover:px-5 md:flex-row md:items-center md:gap-12"
              >

                {/* Number */}
                <div className="w-16 shrink-0">
                  <span
                    className="text-sm font-bold"
                    style={{ color: service.color }}
                  >
                    {service.number}
                  </span>
                </div>


                {/* Title */}
                <div className="md:w-[30%]">

                  <h3 className="text-2xl font-bold text-[#203558] transition-colors duration-300 group-hover:text-[#3A9CD7] sm:text-3xl">
                    {service.title}
                  </h3>

                </div>


                {/* Description */}
                <div className="flex-1">

                  <p className="max-w-xl text-sm leading-7 text-[#58595B]">
                    {service.description}
                  </p>

                </div>


                {/* Arrow */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 text-[#203558] transition-all duration-300 group-hover:border-[#3A9CD7] group-hover:bg-[#3A9CD7] group-hover:text-white">
                  →
                </div>

              </a>
            ))}

            <div className="border-t border-slate-300" />

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURE / IMAGE
      ========================================================= */}
      <section className="py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid overflow-hidden bg-[#203558] lg:grid-cols-2">

            {/* Image */}
            <div className="relative min-h-[450px]">

              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
                alt="Projet architectural TECHBAT"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#203558]/35" />

              <div className="absolute bottom-8 left-8">

                <div className="bg-white px-6 py-5">

                  <p className="text-3xl font-bold text-[#203558]">
                    20+
                  </p>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#58595B]">
                    Années d'expérience
                  </p>

                </div>

              </div>

            </div>


            {/* Content */}
            <div className="flex items-center p-10 sm:p-14 lg:p-16">

              <div>

                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#EE9E5C]" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EE9E5C]">
                    Notre approche
                  </span>
                </div>


                <h2 className="mt-6 text-4xl font-bold leading-tight text-white">
                  Une vision globale
                  <span className="block text-[#3A9CD7]">
                    de votre bâtiment.
                  </span>
                </h2>


                <p className="mt-7 leading-8 text-slate-300">
                  Les techniques spéciales sont au cœur du fonctionnement
                  d'un bâtiment. Leur conception et leur coordination
                  doivent donc être pensées dès les premières étapes
                  du projet.
                </p>


                <div className="mt-8 space-y-4">

                  <div className="flex gap-4">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3A9CD7]" />

                    <p className="text-sm leading-7 text-slate-300">
                      Une expertise multidisciplinaire
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8CC53D]" />

                    <p className="text-sm leading-7 text-slate-300">
                      Des solutions adaptées à chaque projet
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#EE9E5C]" />

                    <p className="text-sm leading-7 text-slate-300">
                      Une exigence constante de qualité
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          REALISATIONS
      ========================================================= */}
      <section className="bg-white pb-24 lg:pb-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#3A9CD7]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#3A9CD7]">
                  Nos réalisations
                </span>
              </div>

              <h2 className="mt-5 text-4xl font-bold text-[#203558] sm:text-5xl">
                Des projets qui parlent
                <span className="block text-[#3A9CD7]">
                  pour notre savoir-faire.
                </span>
              </h2>

            </div>


            <a
              href="/realisations"
              className="group inline-flex items-center gap-3 text-sm font-bold text-[#203558]"
            >
              Toutes nos réalisations

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>

          </div>


          {/* Projects */}
          <div className="mt-14 grid gap-5 md:grid-cols-12">

            <a
              href="/realisations"
              className="group relative min-h-[480px] overflow-hidden md:col-span-7"
            >

              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=85"
                alt="Projet TECHBAT"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#203558] via-[#203558]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3A9CD7]">
                  Projet technique
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  Construction & rénovation
                </h3>

                <p className="mt-3 max-w-lg text-sm text-slate-200">
                  Des solutions techniques intégrées au service
                  de bâtiments performants.
                </p>

              </div>

            </a>


            <a
              href="/realisations"
              className="group relative min-h-[480px] overflow-hidden bg-[#162845] md:col-span-5"
            >

              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85"
                alt="Chantier TECHBAT"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#203558]/60" />

              <div className="absolute bottom-0 left-0 p-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EE9E5C]">
                  Expertise
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  Une approche sur mesure
                </h3>

                <div className="mt-5 flex items-center gap-3 text-sm font-bold text-white">
                  Découvrir

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>

              </div>

            </a>

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-6 pb-24 lg:px-8">

        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#203558] px-8 py-16 sm:px-14 lg:px-20 lg:py-20">

          {/* Decorations */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[60px] border-[#3A9CD7]/10" />

          <div className="absolute -bottom-32 right-[30%] h-80 w-80 rounded-full border-[50px] border-[#8CC53D]/5" />


          <div className="relative z-10 max-w-3xl">

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#EE9E5C]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EE9E5C]">
                Votre projet
              </span>
            </div>


            <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Construisons ensemble
              <span className="block text-[#3A9CD7]">
                la solution adaptée.
              </span>
            </h2>


            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Vous avez un projet de construction ou de rénovation ?
              Notre équipe est à votre écoute pour étudier vos besoins
              et vous accompagner dans sa réalisation.
            </p>


            <div className="mt-9">

              <a
                href="/contact"
                className="group inline-flex items-center gap-4 bg-white px-8 py-4 text-sm font-bold text-[#203558] transition duration-300 hover:bg-[#3A9CD7] hover:text-white"
              >
                Nous contacter

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;
