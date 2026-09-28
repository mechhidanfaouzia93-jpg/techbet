
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "../../data/projects";

export default function Realisations() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#203558] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8CC53D]">
            Nos réalisations
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Des projets techniques réalisés avec exigence.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Découvrez quelques-unes des réalisations et références
            de TECHBAT dans les domaines des techniques spéciales.
          </p>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          {projects.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 p-10 text-center">
              <p className="text-[#58595B]">
                Aucun projet disponible pour le moment.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* IMAGE */}
                  <Link to={`/realisations/${project.slug}`}>
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100">

                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-slate-100 text-sm text-slate-400">
                          Photo à venir
                        </div>
                      )}

                    </div>
                  </Link>

                  {/* CONTENT */}
                  <div className="p-6">

                    <p className="text-xs font-semibold uppercase tracking-wider text-[#3A9CD7]">
                      {project.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-[#203558]">
                      {project.title}
                    </h2>

                    {/* LOCATION / YEAR */}
                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-[#58595B]">

                      {project.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin size={15} />
                          {project.location}
                        </span>
                      )}

                      {project.year && (
                        <span>
                          {project.year}
                        </span>
                      )}

                    </div>

                    {/* DESCRIPTION */}
                    {project.description && (
                      <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#58595B]">
                        {project.description}
                      </p>
                    )}

                    {/* SERVICES */}
                    {project.services?.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.services.slice(0, 4).map((service) => (
                          <span
                            key={service}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-[#203558]"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* LINK */}
                    <Link
                      to={`/realisations/${project.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3A9CD7] transition group-hover:text-[#203558]"
                    >
                      Voir le projet
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>

                  </div>
                </article>
              ))}

            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold text-[#203558]">
            Vous avez un projet ?
          </h2>

          <p className="mt-4 text-[#58595B]">
            Notre équipe peut vous accompagner dans vos projets
            de techniques spéciales.
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