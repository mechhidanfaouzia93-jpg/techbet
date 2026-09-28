import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "HVAC",
    subtitle: "Chauffage, ventilation et climatisation",
    description:
      "Des solutions HVAC pensées pour garantir le confort des occupants, optimiser les performances énergétiques et assurer la fiabilité des installations.",
    link: "/services/hvac",
  },
  {
    number: "02",
    title: "Électricité",
    subtitle: "Installations électriques",
    description:
      "Des installations électriques fiables et performantes, conçues selon les besoins du bâtiment et les exigences techniques et réglementaires.",
    link: "/services/electricite",
  },
  {
    number: "03",
    title: "Plomberie sanitaire",
    subtitle: "Réseaux sanitaires et hydrauliques",
    description:
      "Des réseaux conçus pour offrir fiabilité, durabilité et confort, de l'alimentation en eau jusqu'à l'évacuation.",
    link: "/services/plomberie-sanitaire",
  },
  {
    number: "04",
    title: "Détection incendie",
    subtitle: "Sécurité incendie",
    description:
      "Des systèmes de détection incendie intégrés pour contribuer à la protection des personnes, des équipements et des bâtiments.",
    link: "/services/detection-incendie",
  },
];

export default function Services() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#203558] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">

          <p className="text-sm uppercase tracking-[0.3em] text-slate-300 mb-6">
            Nos expertises
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight max-w-5xl">
            Des solutions techniques
            <br />
            pensées pour durer.
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">
            TECHBAT accompagne ses clients dans la conception,
            l'installation et la maintenance de leurs équipements
            techniques du bâtiment.
          </p>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-12 gap-10">

            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                Notre savoir-faire
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#203558] leading-tight">
                Une approche globale pour des bâtiments plus performants.
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Nous réunissons plusieurs expertises techniques afin
                d'apporter des solutions cohérentes, fiables et adaptées
                aux contraintes de chaque projet.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="border-t border-slate-200">

            {services.map((service) => (
              <Link
                key={service.number}
                to={service.link}
                className="group block border-b border-slate-200 py-10 md:py-14 transition-all duration-300 hover:bg-slate-50 hover:px-5"
              >
                <div className="grid md:grid-cols-[100px_1fr_80px] gap-6 md:gap-10 items-center">

                  {/* NUMERO */}
                  <div>
                    <span className="text-sm font-semibold text-slate-400">
                      {service.number}
                    </span>
                  </div>

                  {/* CONTENU */}
                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-3">
                      {service.subtitle}
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold text-[#203558] group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h2>

                    <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                  </div>

                  {/* FLECHE */}
                  <div className="flex justify-end">

                    <span className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 text-xl text-[#203558] group-hover:bg-[#203558] group-hover:text-white group-hover:border-[#203558] transition-all duration-300">
                      →
                    </span>

                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-[#203558] rounded-3xl p-10 md:p-16 text-white">

            <p className="text-sm uppercase tracking-[0.25em] text-slate-300 mb-6">
              Votre projet
            </p>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">

              <h2 className="text-4xl md:text-5xl font-semibold max-w-2xl leading-tight">
                Une question sur votre projet technique ?
              </h2>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-4 bg-white text-[#203558] rounded-full font-medium hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                Nous contacter →
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}