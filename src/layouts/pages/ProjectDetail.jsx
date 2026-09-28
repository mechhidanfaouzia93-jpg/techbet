
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { projects } from "../../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#203558]">
            Projet introuvable
          </h1>

          <Link
            to="/realisations"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#3A9CD7] px-5 py-3 font-semibold text-white"
          >
            <ArrowLeft size={18} />
            Retour aux réalisations
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#203558] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          <Link
            to="/realisations"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Retour aux réalisations
          </Link>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8CC53D]">
              {project.category}
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {project.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
              {project.location && <span>{project.location}</span>}
              {project.year && <span>{project.year}</span>}
              {project.surface && <span>{project.surface}</span>}
            </div>
          </div>

        </div>
      </section>

      {/* IMAGE */}
      {project.image && (
        <section className="px-6 py-10">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-[300px] w-full object-cover md:h-[500px]"
              />
            </div>
          </div>
        </section>
      )}

      {/* CONTENT */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_320px]">

          {/* MAIN */}
          <div>

            <p className="text-lg leading-8 text-[#58595B]">
              {project.description}
            </p>

            {/* SERVICES */}
            {project.services?.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#203558]">
                  Nos interventions
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 p-4"
                    >
                      <CheckCircle2
                        size={20}
                        className="shrink-0 text-[#8CC53D]"
                      />

                      <span className="font-medium text-[#203558]">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MISSIONS */}
            {project.missions?.length > 0 && (
              <div className="mt-14">
                <h2 className="text-2xl font-bold text-[#203558]">
                  Notre mission
                </h2>

                <div className="mt-8 space-y-8">
                  {project.missions.map((mission) => (
                    <div key={mission.title}>
                      <h3 className="text-lg font-semibold text-[#203558]">
                        {mission.title}
                      </h3>

                      <ul className="mt-3 space-y-2">
                        {mission.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-[#58595B]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3A9CD7]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* SIDEBAR */}
          <aside>
            <div className="sticky top-24 rounded-2xl bg-slate-50 p-6">

              <h2 className="text-lg font-bold text-[#203558]">
                Projet
              </h2>

              <div className="mt-6 space-y-5">

                {project.location && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#58595B]">
                      Localisation
                    </p>
                    <p className="mt-1 font-medium text-[#203558]">
                      {project.location}
                    </p>
                  </div>
                )}

                {project.year && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#58595B]">
                      Année
                    </p>
                    <p className="mt-1 font-medium text-[#203558]">
                      {project.year}
                    </p>
                  </div>
                )}

                {project.surface && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#58595B]">
                      Surface
                    </p>
                    <p className="mt-1 font-medium text-[#203558]">
                      {project.surface}
                    </p>
                  </div>
                )}

              </div>

            </div>
          </aside>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold text-[#203558]">
            Un projet technique ?
          </h2>

          <p className="mt-4 text-[#58595B]">
            Parlons de votre projet et de vos besoins techniques.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-lg bg-[#3A9CD7] px-6 py-3 font-semibold text-white transition hover:bg-[#203558]"
          >
            Nous contacter
          </Link>

        </div>
      </section>

    </main>
  );
}
