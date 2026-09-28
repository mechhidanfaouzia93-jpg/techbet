
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  MapPin,
  Settings2,
  Wrench,
} from "lucide-react";

import { projects } from "../../data/projects";

/* =========================================================
   RÉFÉRENCES HISTORIQUES
========================================================= */

const historicalReferences = [
  {
    year: "2019",
    projects: [
      "Commissariat d’Evere",
      "iMAL centre d’art",
      "Administration communale de Molenbeek",
      "École De Mot Couvreur",
      "École Diderot",
    ],
  },
  {
    year: "2020",
    projects: [
      "Commission communautaire française – Ceria",
      "Administration communale de Molenbeek",
      "Administration communale de 1000 Bruxelles",
    ],
  },
  {
    year: "2021",
    projects: [
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
    projects: [
      "Eurostation – Phase 2",
      "Chaussée de Vleurgat",
      "Rue de l’Église",
      "Cabinet vétérinaire",
      "Stade Roi Baudouin",
    ],
  },
  {
    year: "2023",
    projects: [
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
    year: "2024–2025",
    projects: ["CAP SUD", "Eurostation – Phase 3"],
  },
  {
    year: "2026",
    projects: [
      "Parlement Européen – Spinelli 1",
      "Spinelli 2",
    ],
  },
];

/* =========================================================
   ÉTAPES D’INTERVENTION
========================================================= */

const interventionSteps = [
  {
    number: "01",
    title: "Analyser",
    text: "Comprendre les besoins, les contraintes du bâtiment et les exigences du projet.",
  },
  {
    number: "02",
    title: "Concevoir",
    text: "Développer des solutions techniques cohérentes, performantes et adaptées.",
  },
  {
    number: "03",
    title: "Coordonner",
    text: "Assurer la coordination entre les différents intervenants et les lots techniques.",
  },
  {
    number: "04",
    title: "Réaliser",
    text: "Accompagner l’exécution jusqu’aux essais, à la mise en service et à la réception.",
  },
];

/* =========================================================
   IMAGE PROJET
========================================================= */

function ProjectImage({ project }) {
  if (!project.image) {
    return (
      <div className="flex h-full min-h-[250px] items-center justify-center bg-[#203558]">
        <Building2 className="h-14 w-14 text-white/30" />
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      className="h-full min-h-[250px] w-full object-cover transition duration-500 group-hover:scale-105"
    />
  );
}

/* =========================================================
   META PROJET
========================================================= */

function ProjectMeta({ project }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
      {project.year && (
        <div className="flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4" />
          {project.year}
        </div>
      )}

      {project.location && (
        <div className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4" />
          {project.location}
        </div>
      )}

      {project.surface && (
        <div className="flex items-center gap-1.5">
          <Building2 className="h-4 w-4" />
          {project.surface}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   CAROUSEL PROJETS
========================================================= */

function ProjectCarousel() {
  const projectsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(
    projects.length / projectsPerPage
  );

  const startIndex = currentPage * projectsPerPage;

  const visibleProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const goPrevious = () => {
    setCurrentPage((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentPage((prev) =>
      prev === totalPages - 1 ? 0 : prev + 1
    );
  };

  return (
    <div>
      {/* PROJETS + FLÈCHES LATÉRALES */}
      <div className="flex items-center gap-4 lg:gap-6">

        {/* FLÈCHE GAUCHE */}
        <button
          type="button"
          onClick={goPrevious}
          aria-label="Projets précédents"
          className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#203558] shadow-sm transition hover:border-[#3A9CD7] hover:bg-[#3A9CD7] hover:text-white lg:flex"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* PROJETS */}
        <div className="grid min-w-0 flex-1 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visibleProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/realisations/${project.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#3A9CD7]/40 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <ProjectImage project={project} />

                <div className="absolute inset-0 bg-gradient-to-t from-[#203558]/80 via-transparent to-transparent opacity-70" />

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#203558] shadow-md transition group-hover:bg-[#3A9CD7] group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                {project.category && (
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#203558]">
                    {project.category}
                  </span>
                )}
              </div>

              {/* CONTENU */}
              <div className="p-5">
                <h3 className="mb-3 text-xl font-bold text-[#203558] transition group-hover:text-[#3A9CD7]">
                  {project.title}
                </h3>

                <ProjectMeta project={project} />

                {project.services?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#3A9CD7]">
                  Voir le projet
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* FLÈCHE DROITE */}
        <button
          type="button"
          onClick={goNext}
          aria-label="Projets suivants"
          className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#203558] shadow-sm transition hover:border-[#3A9CD7] hover:bg-[#3A9CD7] hover:text-white lg:flex"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* FLÈCHES MOBILE */}
      <div className="mt-6 flex justify-center gap-3 lg:hidden">
        <button
          type="button"
          onClick={goPrevious}
          aria-label="Projets précédents"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#203558] shadow-sm transition hover:bg-[#3A9CD7] hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Projets suivants"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#203558] shadow-sm transition hover:bg-[#3A9CD7] hover:text-white"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* PETITS INDICATEURS */}
      <div className="mt-7 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentPage(index)}
            aria-label={`Aller aux projets ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === currentPage
                ? "w-7 bg-[#3A9CD7]"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   PAGE RÉALISATIONS
========================================================= */

export default function Realisations() {
  const featuredProject = projects[0];

  return (
    <main className="bg-white text-slate-800">

      {/* =====================================================
          HERO TRÈS SOBRE
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#203558]">
        <div className="absolute inset-0">
          {featuredProject?.image && (
            <img
              src={featuredProject.image}
              alt=""
              className="h-full w-full object-cover opacity-20"
            />
          )}
        </div>

        <div className="absolute inset-0 bg-[#203558]/85" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#3A9CD7]">
              <span className="h-px w-8 bg-[#3A9CD7]" />
              Nos réalisations
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Des projets techniques
              <span className="block text-[#3A9CD7]">
                au service du bâtiment.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJETS — DIRECTEMENT APRÈS LE HERO
      ===================================================== */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3A9CD7]">
                Projets
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#203558] sm:text-4xl">
                Nos réalisations
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Découvrez quelques-unes de nos réalisations dans les domaines
              des techniques spéciales du bâtiment.
            </p>
          </div>

          <ProjectCarousel />
        </div>
      </section>

      {/* =====================================================
          NOTRE INTERVENTION
      ===================================================== */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3A9CD7]">
                Notre intervention
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#203558] sm:text-4xl">
                Une approche structurée,
                <span className="block">
                  de l’étude à la réception.
                </span>
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-slate-600">
                TECHBAT intervient sur l’ensemble du cycle technique d’un
                projet, avec une attention particulière portée à la
                coordination, à la qualité d’exécution et à la mise en service.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {interventionSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-[#3A9CD7]/40 hover:shadow-md"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-3xl font-bold text-[#3A9CD7]/30">
                      {step.number}
                    </span>

                    <Settings2 className="h-5 w-5 text-[#3A9CD7]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#203558]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          RÉFÉRENCES HISTORIQUES
      ===================================================== */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3A9CD7]">
              Références
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#203558] sm:text-4xl">
              Une expérience construite
              <span className="block">au fil des années.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Retrouvez ci-dessous une sélection de références historiques
              illustrant la diversité des projets sur lesquels nos équipes
              sont intervenues.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {historicalReferences.map((reference) => (
              <div
                key={reference.year}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#203558] text-sm font-bold text-white">
                    {reference.year.slice(0, 4)}
                  </div>

                  <h3 className="text-lg font-bold text-[#203558]">
                    {reference.year}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {reference.projects.map((project) => (
                    <li
                      key={project}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3A9CD7]" />
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#203558] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3A9CD7]">
                Votre projet
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Parlons de vos besoins techniques.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Notre équipe vous accompagne dans vos projets de construction,
                rénovation et transformation de bâtiments.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#3A9CD7] px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#203558]"
            >
              Nous contacter
              <ArrowUpRight className="h-5 w-5" />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
