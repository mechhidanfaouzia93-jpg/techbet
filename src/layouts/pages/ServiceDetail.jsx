import { Link, useParams } from "react-router-dom";

const servicesData = {
  hvac: {
    number: "01",
    title: "HVAC",
    subtitle: "Chauffage, ventilation et climatisation",

    description:
      "Nous concevons et réalisons des installations HVAC adaptées aux exigences de chaque bâtiment. Notre approche vise à garantir le confort des occupants, la performance énergétique et la fiabilité des équipements.",

    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=85",

    prestations: [
      "Étude et conception des installations",
      "Systèmes de chauffage",
      "Ventilation et traitement de l'air",
      "Climatisation",
      "Régulation et optimisation énergétique",
      "Maintenance des installations",
    ],
  },

  electricite: {
    number: "02",
    title: "Électricité",
    subtitle: "Des installations électriques fiables et performantes",

    description:
      "Nous réalisons des installations électriques adaptées aux besoins des bâtiments professionnels, résidentiels et industriels, avec une attention particulière portée à la sécurité, à la performance et à la conformité.",

    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1800&q=85",

    prestations: [
      "Installations électriques basse tension",
      "Distribution électrique",
      "Tableaux électriques",
      "Éclairage intérieur et extérieur",
      "Alimentation des équipements techniques",
      "Maintenance et dépannage",
    ],
  },

  "plomberie-sanitaire": {
    number: "03",
    title: "Plomberie sanitaire",
    subtitle: "Des réseaux fiables et durables",

    description:
      "Nous assurons la conception et la réalisation des réseaux de plomberie et sanitaires afin de garantir une distribution fiable de l'eau, une évacuation efficace et un confort durable pour les occupants.",

    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1800&q=85",

    prestations: [
      "Réseaux d'alimentation en eau",
      "Réseaux d'évacuation",
      "Installations sanitaires",
      "Production et distribution d'eau chaude",
      "Équipements sanitaires",
      "Maintenance des réseaux",
    ],
  },

  "detection-incendie": {
    number: "04",
    title: "Détection incendie",
    subtitle: "La sécurité des personnes et des bâtiments",

    description:
      "Nous intégrons des solutions de détection incendie adaptées aux caractéristiques de chaque bâtiment afin de contribuer à une détection rapide des situations à risque et à la protection des occupants.",

    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=85",

    prestations: [
      "Systèmes de détection incendie",
      "Détecteurs automatiques",
      "Déclencheurs manuels",
      "Alarmes et signalisation",
      "Installation et mise en service",
      "Maintenance et vérification",
    ],
  },
};

export default function ServiceDetail() {
  const { service } = useParams();

  const currentService = servicesData[service];

  if (!currentService) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white px-6">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-5">
            TECHBAT
          </p>

          <h1 className="text-4xl font-semibold text-[#203558] mb-6">
            Service introuvable
          </h1>

          <Link
            to="/services"
            className="inline-flex items-center px-7 py-4 bg-[#203558] text-white rounded-full hover:bg-[#162944] transition"
          >
            ← Retour aux services
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative min-h-[550px] flex items-end overflow-hidden">

        <img
          src={currentService.image}
          alt={currentService.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#203558]/80" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20 md:py-28 text-white">

          <Link
            to="/services"
            className="inline-flex items-center text-sm text-slate-300 hover:text-white transition mb-12"
          >
            ← Tous nos services
          </Link>

          <p className="text-sm tracking-[0.3em] text-slate-300">
            {currentService.number}
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-semibold tracking-tight">
            {currentService.title}
          </h1>

          <p className="mt-7 max-w-3xl text-xl md:text-2xl text-slate-200 leading-relaxed">
            {currentService.subtitle}
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-12 gap-10">

            <div className="md:col-span-4">

              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                Notre expertise
              </p>

            </div>

            <div className="md:col-span-7 md:col-start-6">

              <p className="text-2xl md:text-3xl text-[#203558] leading-relaxed">
                {currentService.description}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PRESTATIONS */}
      <section className="bg-slate-50 py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-14">

            <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-5">
              Nos prestations
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-[#203558] max-w-3xl">
              Une expertise adaptée à chaque projet.
            </h2>

          </div>

          <div className="border-t border-slate-200">

            {currentService.prestations.map((prestation, index) => (

              <div
                key={prestation}
                className="flex items-center gap-6 py-7 border-b border-slate-200"
              >

                <span className="text-sm font-semibold text-slate-400 w-8">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-lg md:text-xl text-[#203558]">
                  {prestation}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* APPROCHE */}
      <section className="py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-5">
                Notre approche
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold text-[#203558] leading-tight">
                La technique au service de la performance.
              </h2>

              <p className="mt-7 text-lg text-slate-600 leading-relaxed">
                Chaque installation est pensée en fonction des
                caractéristiques du bâtiment, de ses usages et des
                contraintes du projet.
              </p>

            </div>

            <div className="relative h-[400px] overflow-hidden rounded-2xl">

              <img
                src={currentService.image}
                alt=""
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-[#203558] rounded-3xl p-10 md:p-16 text-white">

            <p className="text-sm uppercase tracking-[0.25em] text-slate-300 mb-6">
              Votre projet
            </p>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">

              <h2 className="text-4xl md:text-5xl font-semibold max-w-2xl leading-tight">
                Parlons de vos besoins techniques.
              </h2>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-4 bg-white text-[#203558] rounded-full font-medium hover:bg-slate-100 transition whitespace-nowrap"
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