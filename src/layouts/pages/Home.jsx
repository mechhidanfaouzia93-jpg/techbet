function Home() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#203558]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:px-8 lg:py-32">

          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#3A9CD7]">
              TECHBAT
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Notre expérience
              <span className="block text-[#EE9E5C]">
                à votre service
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              TECHBAT est spécialisée dans les techniques spéciales
              du bâtiment et accompagne ses clients dans la conception
              et la réalisation de solutions techniques fiables et durables.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/realisations"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#203558] transition hover:bg-[#3A9CD7] hover:text-white"
              >
                Découvrir nos réalisations
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#203558]"
              >
                Nous contacter
              </a>
            </div>
          </div>

        </div>

        {/* Décoration inspirée du logo */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-[#3A9CD7]/20" />
        <div className="absolute -bottom-24 right-20 h-64 w-64 rounded-full border-[40px] border-[#8CC53D]/20" />
      </section>


      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
            Qui sommes-nous ?
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#203558] sm:text-4xl">
            Une expertise technique au service de vos projets
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#58595B]">
            TECHBAT met son expérience et son savoir-faire au service
            des projets de construction et de rénovation. Notre équipe
            intervient dans plusieurs domaines des techniques spéciales
            du bâtiment.
          </p>
        </div>

      </section>


      {/* NOS DOMAINES */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
              Notre savoir-faire
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#203558] sm:text-4xl">
              Nos domaines d'expertise
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[#58595B]">
              Des solutions techniques adaptées aux exigences de chaque projet.
            </p>
          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* HVAC */}
            <div className="group rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#3A9CD7]/10">
                <span className="text-2xl">❄</span>
              </div>

              <h3 className="text-xl font-bold text-[#203558]">
                HVAC
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#58595B]">
                Chauffage, ventilation et climatisation pour des
                environnements confortables et performants.
              </p>
            </div>


            {/* Électricité */}
            <div className="group rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EE287A]/10">
                <span className="text-2xl">⚡</span>
              </div>

              <h3 className="text-xl font-bold text-[#203558]">
                Électricité
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#58595B]">
                Des installations électriques adaptées aux besoins
                techniques et fonctionnels de vos bâtiments.
              </p>
            </div>


            {/* Sanitaire */}
            <div className="group rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#8CC53D]/10">
                <span className="text-2xl">💧</span>
              </div>

              <h3 className="text-xl font-bold text-[#203558]">
                Plomberie sanitaire
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#58595B]">
                Réseaux sanitaires et hydrauliques conçus pour répondre
                aux contraintes de chaque projet.
              </p>
            </div>


            {/* Incendie */}
            <div className="group rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EE9E5C]/10">
                <span className="text-2xl">🔥</span>
              </div>

              <h3 className="text-xl font-bold text-[#203558]">
                Détection incendie
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#58595B]">
                Des solutions de sécurité incendie intégrées aux
                installations techniques du bâtiment.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CHIFFRES */}
      <section className="bg-[#203558] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 text-center md:grid-cols-3">

            <div>
              <p className="text-4xl font-bold text-white">
                20+
              </p>

              <p className="mt-2 text-sm uppercase tracking-wider text-slate-300">
                Années d'expérience
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-white">
                4
              </p>

              <p className="mt-2 text-sm uppercase tracking-wider text-slate-300">
                Domaines techniques
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-white">
                100%
              </p>

              <p className="mt-2 text-sm uppercase tracking-wider text-slate-300">
                Engagement
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-slate-100 px-8 py-14 text-center sm:px-12">

          <div className="relative z-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
              Votre projet
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#203558] sm:text-4xl">
              Nous nous réjouissons de collaborer avec vous.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[#58595B]">
              Vous avez un projet de construction ou de rénovation ?
              Découvrez notre expertise et contactez notre équipe.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex rounded-full bg-[#203558] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3A9CD7]"
              >
                Contactez-nous
              </a>
            </div>

          </div>

          {/* Décorations */}
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#EE287A]/10" />
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#8CC53D]/10" />

        </div>

      </section>

    </div>
  );
}

export default Home;