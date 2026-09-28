
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  MapPin,
  Ruler,
  Wrench,
} from "lucide-react";

import { projects } from "../../data/projects";

/* =========================================================
   PAGE DÉTAIL D'UNE RÉALISATION
========================================================= */

export default function ProjectDetail() {
  const { slug } = useParams();

  const projectIndex = projects.findIndex(
    (project) => project.slug === slug
  );

  const project = projects[projectIndex];

  /* ---------------------------------------------------------
     PROJET INTROUVABLE
  --------------------------------------------------------- */

  if (!project) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
        <div className="text-center">
          <Building2 className="mx-auto h-14 w-14 text-slate-300" />

          <h1 className="mt-6 text-3xl font-bold text-[#203558]">
            Projet introuvable
          </h1>

          <p className="mt-3 text-slate-500">
            Cette réalisation n'est pas disponible.
          </p>

          <Link
            to="/realisations"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#203558] px-6 py-3 font-semibold text-white transition hover:bg-[#3A9CD7]"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux réalisations
          </Link>
        </div>
      </main>
    );
  }

  /* ---------------------------------------------------------
     NAVIGATION
  --------------------------------------------------------- */

  const previousProject =
    projects[
      projectIndex === 0
        ? projects.length - 1
        : projectIndex - 1
    ];

  const nextProject =
    projects[
      projectIndex === projects.length - 1
        ? 0
        : projectIndex + 1
    ];

  return (
    <main className="bg-white text-slate-800">

      {/* =====================================================
          HERO PHOTO
      ===================================================== */}
      <section className="relative h-[650px] overflow-hidden bg-[#203558] lg:h-[760px]">

        {/* PHOTO */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[#203558]" />
        )}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#203558]/95 via-[#203558]/65 to-[#203558]/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#203558]/90 via-transparent to-[#203558]/20" />

        {/* CONTENU */}
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-between px-6 py-8 lg:px-8 lg:py-10">

          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Link
              to="/realisations"
              className="transition hover:text-white"
            >
              Réalisations
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="text-white">
              {project.title}
            </span>
          </div>

          {/* TITRE */}
          <div className="pb-28 lg:pb-32">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#3A9CD7]" />

              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3A9CD7]">
                Réalisation TECHBAT
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl">
              {project.title}
            </h1>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-white/80">

              {project.location && (
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#3A9CD7]" />
                  {project.location}
                </span>
              )}

              {project.year && (
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-[#3A9CD7]" />
                  {project.year}
                </span>
              )}

              {project.category && (
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-[#3A9CD7]" />
                  {project.category}
                </span>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INFOS FLOTTANTES
      ===================================================== */}
      <section className="relative z-20 -mt-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 sm:grid-cols-2 lg:grid-cols-4">

            {/* SURFACE */}
            {project.surface && (
              <div className="border-b border-slate-200 p-6 sm:border-r lg:border-b-0">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#203558] text-white">
                    <Ruler className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Surface
                    </p>

                    <p className="mt-1 text-xl font-bold text-[#203558]">
                      {project.surface}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* LOCALISATION */}
            <div className="border-b border-slate-200 p-6 lg:border-r lg:border-b-0">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3A9CD7] text-white">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Localisation
                  </p>

                  <p className="mt-1 text-xl font-bold text-[#203558]">
                    {project.location || "Belgique"}
                  </p>
                </div>
              </div>
            </div>

            {/* ANNÉE */}
            <div className="border-b border-slate-200 p-6 sm:border-r sm:border-b-0">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#203558] text-white">
                  <CalendarDays className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Année
                  </p>

                  <p className="mt-1 text-xl font-bold text-[#203558]">
                    {project.year || "—"}
                  </p>
                </div>
              </div>
            </div>

            {/* LOTS */}
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3A9CD7] text-white">
                  <Wrench className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Expertise
                  </p>

                  <p className="mt-1 text-xl font-bold text-[#203558]">
                    {project.services?.length || 0} lots
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LABEL */}
            <div>
              <div className="sticky top-28">

                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3A9CD7]">
                  Le projet
                </span>

                <h2 className="mt-4 text-4xl font-bold leading-tight text-[#203558] sm:text-5xl">
                  Une réalisation
                  <span className="block text-[#3A9CD7]">
                    technique exigeante.
                  </span>
                </h2>

              </div>
            </div>

            {/* TEXTE */}
            <div>
              <p className="text-xl leading-9 text-slate-600 lg:text-2xl lg:leading-10">
                {project.description ||
                  "TECHBAT intervient sur ce projet pour assurer la conception, la réalisation et la coordination des installations techniques du bâtiment."}
              </p>

              {project.services?.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-3">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-[#203558]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          NOTRE MISSION
      ===================================================== */}
      <section className="overflow-hidden bg-[#203558]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid lg:grid-cols-2">

            {/* GAUCHE */}
            <div className="flex items-center py-20 lg:py-28 lg:pr-20">

              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3A9CD7]">
                  Notre mission
                </span>

                <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
                  De l'étude
                  <span className="block text-[#3A9CD7]">
                    à la réception.
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                  Notre intervention couvre les différentes étapes
                  nécessaires à la bonne réalisation des installations
                  techniques du projet.
                </p>
              </div>

            </div>

            {/* DROITE */}
            <div className="border-t border-white/10 py-12 lg:border-l lg:border-t-0 lg:py-20 lg:pl-16">

              {project.missions?.length > 0 ? (
                <div className="space-y-0">
                  {project.missions.map((mission, index) => (
                    <div
                      key={mission.title}
                      className="group border-b border-white/10 py-7 first:pt-0 last:border-b-0"
                    >
                      <div className="flex gap-5">

                        <span className="pt-1 text-sm font-bold text-[#3A9CD7]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <h3 className="text-xl font-bold text-white transition group-hover:text-[#3A9CD7]">
                            {mission.title}
                          </h3>

                          <ul className="mt-4 space-y-2">
                            {mission.items?.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                              >
                                <Check className="mt-1 h-4 w-4 shrink-0 text-[#3A9CD7]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-300">
                  Études, coordination, réalisation et mise en service
                  des installations techniques.
                </p>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALERIE
      ===================================================== */}
      {project.gallery?.length > 0 && (
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3A9CD7]">
                  Galerie
                </span>

                <h2 className="mt-3 text-4xl font-bold text-[#203558] sm:text-5xl">
                  Le projet en images.
                </h2>
              </div>

              <span className="text-sm text-slate-400">
                {project.gallery.length} images
              </span>

            </div>

            <div className="grid gap-5 lg:grid-cols-12">

              {/* GRANDE IMAGE */}
              <div className="group overflow-hidden rounded-3xl lg:col-span-8">
                <img
                  src={project.gallery[0]}
                  alt={`${project.title} - vue principale`}
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-[1.03] lg:h-[650px]"
                />
              </div>

              {/* PETITES IMAGES */}
              <div className="grid gap-5 lg:col-span-4">

                {project.gallery.slice(1, 3).map((image, index) => (
                  <div
                    key={image}
                    className="group overflow-hidden rounded-3xl"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - vue ${index + 2}`}
                      className="h-[250px] w-full object-cover transition duration-700 group-hover:scale-[1.04] lg:h-full"
                    />
                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>
      )}

      {/* =====================================================
          EXPERTISES
      ===================================================== */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3A9CD7]">
                Expertise TECHBAT
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#203558] sm:text-5xl">
                Les techniques
                <span className="block">
                  au cœur du projet.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

              {project.services?.map((service, index) => (
                <div
                  key={service}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#3A9CD7]/50 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <Wrench className="h-5 w-5 text-[#3A9CD7]" />

                    <span className="text-xs font-bold text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-8 font-bold text-[#203558]">
                    {service}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROJETS PRÉCÉDENT / SUIVANT
      ===================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid md:grid-cols-2">

            {/* PRÉCÉDENT */}
            <Link
              to={`/realisations/${previousProject.slug}`}
              className="group border-b border-slate-200 py-12 md:border-b-0 md:border-r md:pr-12 lg:py-16"
            >
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-400">
                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                Projet précédent
              </div>

              <h3 className="mt-4 text-3xl font-bold text-[#203558] transition group-hover:text-[#3A9CD7]">
                {previousProject.title}
              </h3>
            </Link>

            {/* SUIVANT */}
            <Link
              to={`/realisations/${nextProject.slug}`}
              className="group py-12 md:pl-12 md:text-right lg:py-16"
            >
              <div className="flex items-center justify-start gap-3 text-sm font-semibold text-slate-400 md:justify-end">
                Projet suivant
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>

              <h3 className="mt-4 text-3xl font-bold text-[#203558] transition group-hover:text-[#3A9CD7]">
                {nextProject.title}
              </h3>
            </Link>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA FINAL
      ===================================================== */}
      <section className="bg-[#203558] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3A9CD7]">
            <Wrench className="h-7 w-7 text-white" />
          </div>

          <h2 className="mt-7 text-4xl font-bold text-white sm:text-5xl">
            Un projet similaire ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            TECHBAT vous accompagne dans vos projets de construction,
            rénovation et transformation de bâtiments.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-[#203558] transition hover:bg-[#3A9CD7] hover:text-white"
          >
            Parlons de votre projet
            <ArrowUpRight className="h-5 w-5" />
          </Link>

        </div>
      </section>

    </main>
  );
}