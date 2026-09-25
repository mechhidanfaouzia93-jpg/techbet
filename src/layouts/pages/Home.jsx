import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "HVAC",
    description:
      "Chauffage, ventilation et climatisation pour des installations performantes et durables.",
  },
  {
    number: "02",
    title: "Électricité",
    description:
      "Conception et réalisation d'installations électriques adaptées aux exigences de chaque projet.",
  },
  {
    number: "03",
    title: "Sanitaire",
    description:
      "Plomberie, réseaux hydrauliques et installations sanitaires pour bâtiments professionnels.",
  },
  {
    number: "04",
    title: "Incendie",
    description:
      "Solutions de détection incendie et systèmes de sécurité pour protéger les occupants et les bâtiments.",
  },
];

const projects = [
  {
    title: "EUROSTATION",
    location: "Bruxelles",
    surface: "± 20 000 m²",
    image: "/images/eurostation.jpg",
  },
  {
    title: "CAP SUD",
    location: "Bruxelles",
    surface: "± 16 000 m²",
    image: "/images/cap-sud.jpg",
  },
  {
    title: "NAMUR-CAUCHY",
    location: "Namur",
    surface: "± 21 000 m²",
    image: "/images/namur-cauchy.jpg",
  },
];

function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950">
        {/* Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/hero.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <p className="mb-6 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              <span className="h-px w-10 bg-blue-400" />
              Techniques spéciales du bâtiment
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Notre expérience
              <br />
              <span className="text-blue-400">à votre service.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              TECHBAT accompagne ses clients dans la conception et la
              réalisation de solutions techniques fiables, performantes et
              durables.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/realisations"
                className="rounded-full bg-blue-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-400"
              >
                Découvrir nos réalisations
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom information */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-6 lg:grid-cols-4 lg:px-8">
            <div className="border-white/10 px-4 lg:border-r">
              <p className="text-2xl font-bold text-white">HVAC</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                Chauffage · Ventilation · Climatisation
              </p>
            </div>

            <div className="border-white/10 px-4 lg:border-r">
              <p className="text-2xl font-bold text-white">ELEC</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                Électricité
              </p>
            </div>

            <div className="border-white/10 px-4 lg:border-r">
              <p className="text-2xl font-bold text-white">SANI</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                Sanitaire
              </p>
            </div>

            <div className="px-4">
              <p className="text-2xl font-bold text-white">FIRE</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                Sécurité incendie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Qui sommes-nous ?
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Une expertise technique au service de projets ambitieux.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              TECHBAT est une entreprise spécialisée dans les techniques
              spéciales du bâtiment. Nous intervenons dans les domaines du
              HVAC, de l'électricité, du sanitaire et de la détection
              incendie.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 font-bold text-slate-900 transition hover:text-blue-600"
            >
              Découvrir TECHBAT
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-100 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Notre savoir-faire
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Des solutions techniques fiables et durables.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl bg-slate-300 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="group bg-white p-8 transition hover:bg-slate-950 hover:text-white"
              >
                <div className="mb-16 flex items-start justify-between">
                  <span className="text-sm font-bold text-blue-600">
                    {service.number}
                  </span>

                  <span className="text-xl transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="text-2xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-7 text-slate-600 group-hover:text-slate-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-950 px-6 py-24 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Notre expérience
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Des réalisations à la hauteur des exigences de nos clients.
            </h2>
          </div>

          <div className="grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-5xl font-bold">20+</p>
              <p className="mt-3 text-slate-400">Projets réalisés</p>
            </div>

            <div>
              <p className="text-5xl font-bold">40 000</p>
              <p className="mt-3 text-slate-400">m² — référence RTBF</p>
            </div>

            <div>
              <p className="text-5xl font-bold">4</p>
              <p className="mt-3 text-slate-400">Domaines d'expertise</p>
            </div>

            <div>
              <p className="text-5xl font-bold">2020—26</p>
              <p className="mt-3 text-slate-400">Projets présentés</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Nos réalisations
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Des projets qui témoignent
                <br className="hidden sm:block" />
                de notre expertise.
              </h2>
            </div>

            <Link
              to="/realisations"
              className="font-bold text-slate-900 hover:text-blue-600"
            >
              Voir tous les projets →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                to="/realisations"
                key={project.title}
                className="group overflow-hidden rounded-2xl bg-slate-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm text-slate-300">
                      {project.location}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5">
                  <span className="text-sm text-slate-500">
                    {project.surface}
                  </span>

                  <span className="font-bold transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-blue-600 px-6 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
              Notre engagement
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Construire aujourd'hui les solutions techniques de demain.
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-200">
                Notre mission
              </p>

              <p className="leading-7 text-blue-50">
                Offrir des solutions techniques fiables et durables,
                adaptées aux besoins de nos clients et aux exigences de
                chaque projet.
              </p>
            </div>

            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-200">
                Notre vision
              </p>

              <p className="leading-7 text-blue-50">
                Devenir un acteur clé des techniques spéciales grâce à
                l'innovation, la qualité et l'engagement durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Un projet ?
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Parlons-en.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Vous avez un projet de construction, de rénovation ou
            d'aménagement ? Notre équipe est à votre écoute.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white transition hover:bg-blue-600"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;