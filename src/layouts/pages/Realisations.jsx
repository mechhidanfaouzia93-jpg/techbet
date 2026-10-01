
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Wrench,
} from "lucide-react";

import { projects } from "../../data/projects";

const historicalReferences = [
  {
    year: "2019",
    items: [
      "Commissariat d’Evere",
      "iMAL centre d’art",
      "Administration communale de Molenbeek",
      "École De Mot Couvreur",
      "École Diderot",
    ],
  },
  {
    year: "2020",
    items: [
      "Commission communautaire française – Ceria",
      "Administration communale de Molenbeek",
      "Administration communale de 1000 Bruxelles",
    ],
  },
  {
    year: "2021",
    items: [
      "Bâtiment Atrium",
      "Eurostation – Phase 1",
      "Cabinet Surlet",
      "École Mérinos la Sagesse",
      "Hôpital militaire",
      "FWB – Rue de Serbie, Liège",
    ],
  },
  {
    year: "2022",
    items: [
      "Eurostation – Phase 2",
      "Chaussée de Vleurgat",
      "Rue de l’Église",
      "Cabinet vétérinaire",
      "Stade Roi Baudouin",
    ],
  },
  {
    year: "2023",
    items: [
      "Commission communautaire française – Ceria",
      "Administration communale de Molenbeek",
      "Administration communale de 1000 Bruxelles",
      "Eurostation – Phase 2",
      "Chaussée de Vleurgat",
      "Rue de l’Église",
      "Cabinet vétérinaire",
      "Stade Roi Baudouin",
      "Tour Paradis Express",
      "Bâtiment Cauchy-Namur",
      "Bâtiment Léopold II (FWB)",
    ],
  },
  {
    year: "2024-2025",
    items: ["CAP SUD", "Eurostation – Phase 3"],
  },
  {
    year: "2026",
    items: [
      "Parlement Européen – Spinelli 1",
      "Parlement Européen – Spinelli 2",
    ],
  },
];

const interventionSteps = [
  {
    number: "01",
    title: "Étudier",
    text: "Analyse des besoins, contraintes du bâtiment et exigences techniques.",
  },
  {
    number: "02",
    title: "Concevoir",
    text: "Dimensionnement, études techniques, plans et coordination des systèmes.",
  },
  {
    number: "03",
    title: "Réaliser",
    text: "Suivi de chantier, coordination des intervenants et contrôle de la qualité.",
  },
  {
    number: "04",
    title: "Mettre en service",
    text: "Essais, équilibrage, commissioning, DOE et accompagnement à la réception.",
  },
];

function FeaturedProjects() {
  const [index, setIndex] = useState(0);

  const featured = projects.slice(0, 4);

  const next = () => {
    setIndex((current) => (current + 1) % featured.length);
  };

  const previous = () => {
    setIndex(
      (current) => (current - 1 + featured.length) % featured.length
    );
  };

  const visible = [
    featured[index],
    featured[(index + 1) % featured.length],
    featured[(index + 2) % featured.length],
    featured[(index + 3) % featured.length],
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#3A9CD7]">
              Sélection TECHBAT
            </p>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-[#203558] md:text-5xl">
              Des réalisations techniques pensées pour durer.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Projet précédent"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[#203558] transition hover:border-[#3A9CD7] hover:bg-[#3A9CD7] hover:text-white"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Projet suivant"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#203558] text-white transition hover:bg-[#3A9CD7]"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visible.map((project, cardIndex) => (
            <Link
              key={`${project.slug}-${cardIndex}`}
              to={`/realisations/${project.slug}`}
              className={`group relative overflow-hidden bg-[#203558] ${
                cardIndex === 0
                  ? "min-h-[520px] md:min-h-[600px]"
                  : "min-h-[430px] md:min-h-[600px]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101e35] via-[#203558]/25 to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2">
                <span className="bg-white/95 px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#203558]">
                  {project.year}
                </span>

                <span className="bg-[#3A9CD7] px-3 py-2 text-xs font-bold uppercase tracking-wider text-white">
                  {project.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                <div className="mb-3 flex items-center gap-2 text-sm text-white/80">
                  <MapPin size={15} />
                  {project.location}
                </div>

                <h3 className="max-w-[90%] text-2xl font-bold text-white md:text-3xl">
                  {project.title}
                </h3>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.services?.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="border border-white/25 bg-white/10 px-2.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#203558] transition group-hover:bg-[#3A9CD7] group-hover:text-white">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-7 flex justify-center gap-2">
          {featured.map((project, dotIndex) => (
            <button
              key={project.slug}
              type="button"
              aria-label={`Afficher ${project.title}`}
              onClick={() => setIndex(dotIndex)}
              className={`h-1.5 rounded-full transition-all ${
                dotIndex === index
                  ? "w-8 bg-[#3A9CD7]"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPortfolio() {
  const years = useMemo(() => {
    const values = projects.map((project) => String(project.year));
    return ["Tous", ...new Set(values)];
  }, []);

  const [selectedYear, setSelectedYear] = useState("Tous");

  const filteredProjects =
    selectedYear === "Tous"
      ? projects
      : projects.filter(
          (project) => String(project.year) === selectedYear
        );

  return (
    <section className="bg-[#f5f7fa] py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#3A9CD7]">
              Portfolio
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#203558] md:text-5xl">
              Toutes nos réalisations
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Découvrez l’ensemble des projets présentés par TECHBAT, de
              l’étude technique à la réalisation et à la mise en service.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={`px-5 py-2.5 text-sm font-semibold transition ${
                  selectedYear === year
                    ? "bg-[#203558] text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#3A9CD7] hover:text-[#203558]"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Link
                key={`${project.slug}-${project.year}-${index}`}
                to={`/realisations/${project.slug}`}
                className="group relative overflow-hidden bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#203558]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#10203a]/80 via-transparent to-transparent opacity-80" />

                  <div className="absolute left-4 top-4">
                    <span className="bg-white px-3 py-2 text-xs font-bold tracking-wider text-[#203558]">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#203558] opacity-0 translate-y-2 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="border-x border-b border-slate-200 bg-white p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    <MapPin size={14} className="text-[#3A9CD7]" />
                    {project.location}
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold leading-tight text-[#203558] transition group-hover:text-[#3A9CD7]">
                      {project.title}
                    </h3>

                    {project.surface && (
                      <span className="shrink-0 text-xs font-semibold text-slate-400">
                        {project.surface}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.services?.map((service) => (
                      <span
                        key={service}
                        className="border border-slate-200 px-2.5 py-1.5 text-[11px] font-medium text-slate-600"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#203558]">
                      Voir le projet
                    </span>

                    <ArrowRight
                      size={17}
                      className="text-[#3A9CD7] transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-slate-500">
              Aucun projet disponible pour cette période.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function HistoricalReferences() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#3A9CD7]">
              Références
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#203558] md:text-5xl">
              Une expérience construite dans le temps.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Nos références couvrent différents environnements techniques :
              bâtiments administratifs, bureaux, infrastructures publiques,
              équipements spécialisés et grands projets.
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {historicalReferences.map((group) => (
              <div
                key={group.year}
                className="grid gap-5 py-7 md:grid-cols-[130px_1fr]"
              >
                <div className="flex items-start gap-3">
                  <CalendarDays
                    size={18}
                    className="mt-0.5 text-[#3A9CD7]"
                  />

                  <span className="text-lg font-bold text-[#203558]">
                    {group.year}
                  </span>
                </div>

                <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={`${group.year}-${item}`}
                      className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3A9CD7]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InterventionSection() {
  return (
    <section className="bg-[#203558] py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#3A9CD7]">
              Notre intervention
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Une approche technique de bout en bout.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-white/70">
              De la conception à la réception, TECHBAT accompagne les projets
              avec une vision globale des techniques spéciales du bâtiment.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {interventionSteps.map((step) => (
              <div
                key={step.number}
                className="bg-[#203558] p-7 transition hover:bg-[#29446c] md:p-9"
              >
                <span className="text-sm font-bold tracking-widest text-[#3A9CD7]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Realisations() {
  return (
    <main className="bg-white">
      {/* HERO TRÈS COURT : les projets arrivent rapidement */}
      <section className="relative overflow-hidden bg-[#203558] py-14 md:py-20">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#3A9CD7]/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-[#3A9CD7]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#3A9CD7]">
              Nos réalisations
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Des projets techniques au service de bâtiments exigeants.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Une sélection de projets réalisés et accompagnés par TECHBAT
              dans les domaines HVAC, électricité, sanitaire et sécurité
              incendie.
            </p>
          </div>
        </div>
      </section>

      {/* PROJETS MIS EN AVANT */}
      <FeaturedProjects />

      {/* TOUS LES PROJETS */}
      <ProjectPortfolio />

      {/* RÉFÉRENCES HISTORIQUES */}
      <HistoricalReferences />

      {/* MÉTHODE */}
      <InterventionSection />

      {/* CTA */}
      <section className="bg-[#f5f7fa] py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#203558] text-white">
            <Wrench size={24} />
          </div>

          <h2 className="text-3xl font-bold text-[#203558] md:text-5xl">
            Vous avez un projet technique ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Parlons de vos besoins et construisons ensemble une solution
            technique adaptée à votre bâtiment.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#203558] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#3A9CD7]"
          >
            Nous contacter
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}