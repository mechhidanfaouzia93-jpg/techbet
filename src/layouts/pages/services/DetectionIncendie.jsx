
import {
  ShieldCheck,
  ArrowRight,
  BellRing,
  ShieldAlert,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DetectionIncendie() {
  const prestations = [
    {
      icon: ShieldCheck,
      title: "Conception",
      text: "Intégration des solutions de sécurité incendie dans la conception globale des installations techniques.",
    },
    {
      icon: BellRing,
      title: "Détection & alerte",
      text: "Des systèmes permettant de contribuer à la détection et à la protection des occupants et du bâtiment.",
    },
    {
      icon: Settings,
      title: "Intégration technique",
      text: "Coordination des équipements de sécurité incendie avec les autres techniques du bâtiment.",
    },
  ];

  const domaines = [
    "Détection incendie",
    "Systèmes d'alarme",
    "RIA",
    "Sécurité des occupants",
    "Coordination technique",
    "Mise en service",
  ];

  return (
    <main className="bg-white text-[#203558]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#203558]">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-full w-[40%] border-l border-white/10" />
          <div className="absolute right-[12%] top-0 h-full w-px bg-white/10" />
          <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#EE9E5C]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">

            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#EE9E5C]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EE9E5C]">
                Expertise 04
              </span>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5">
                <ShieldCheck size={30} className="text-[#EE9E5C]" />
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Détection incendie
              </h1>
            </div>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Des solutions de sécurité incendie intégrées pour protéger
              efficacement les personnes et les bâtiments.
            </p>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#EE9E5C]" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EE9E5C]">
                  Notre approche
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                La sécurité incendie
                <span className="block text-[#EE9E5C]">
                  au cœur du projet.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-xl leading-9 text-[#58595B]">
                TECHBAT intègre les systèmes de sécurité incendie dans une
                approche globale des techniques spéciales du bâtiment.
              </p>

              <p className="mt-6 leading-8 text-[#58595B]">
                L'objectif est de garantir une cohérence entre les
                différents équipements techniques et les exigences de
                sécurité du bâtiment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DOMAINES */}
      <section className="bg-[#F5F7F9] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#EE9E5C]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EE9E5C]">
                Nos domaines d'intervention
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
              Des systèmes intégrés
              <span className="block text-[#EE9E5C]">
                au bâtiment.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-0 border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-3">
            {domaines.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 border-b border-slate-300 p-7 transition-all hover:bg-white"
              >
                <span className="text-sm font-bold text-[#EE9E5C]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-lg font-semibold">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-3">
            {prestations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border-t-2 border-[#EE9E5C] bg-[#F5F7F9] p-8"
                >
                  <Icon size={28} className="text-[#EE9E5C]" />

                  <h3 className="mt-7 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#58595B]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl bg-[#203558] px-8 py-16 sm:px-14 lg:px-20">

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EE9E5C]">
              Votre projet
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
              Parlons de vos besoins
              <span className="block text-[#EE9E5C]">
                en sécurité incendie.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Notre équipe peut vous accompagner dans l'intégration des
              solutions de sécurité incendie de votre projet.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-white px-7 py-4 text-sm font-bold text-[#203558] transition hover:bg-[#EE9E5C] hover:text-white"
            >
              Nous contacter
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}