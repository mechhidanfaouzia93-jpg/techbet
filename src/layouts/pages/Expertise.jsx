
import {
  Wind,
  Zap,
  Droplets,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Settings2,
  FileCheck2,
  HardHat,
  Gauge,
} from "lucide-react";
import { Link } from "react-router-dom";

const expertise = [
  {
    number: "01",
    title: "HVAC",
    subtitle: "Chauffage · Ventilation · Climatisation",
    description:
      "Solutions de chauffage, ventilation et climatisation adaptées aux exigences techniques, énergétiques et fonctionnelles de chaque bâtiment.",
    icon: Wind,
    color: "#3A9CD7",
    details: [
      "Chauffage",
      "Ventilation",
      "Climatisation",
      "Régulation climatique",
    ],
  },
  {
    number: "02",
    title: "Électricité",
    subtitle: "CFO · CFA · Sécurité",
    description:
      "Conception et réalisation d'installations électriques fiables et performantes, adaptées aux besoins spécifiques de chaque projet.",
    icon: Zap,
    color: "#EE287A",
    details: [
      "Courants forts",
      "Courants faibles",
      "Contrôle d'accès",
      "CCTV & systèmes techniques",
    ],
  },
  {
    number: "03",
    title: "Plomberie sanitaire",
    subtitle: "Sanitaire · Hydraulique · RIA",
    description:
      "Conception et réalisation des réseaux sanitaires et hydrauliques dans le respect des contraintes techniques et réglementaires du bâtiment.",
    icon: Droplets,
    color: "#8CC53D",
    details: [
      "Réseaux sanitaires",
      "Réseaux hydrauliques",
      "RIA",
      "Équipements sanitaires",
    ],
  },
  {
    number: "04",
    title: "Détection incendie",
    subtitle: "Protection · Détection · Sécurité",
    description:
      "Solutions techniques liées à la détection incendie et aux systèmes de sécurité afin de contribuer à la protection des personnes et des bâtiments.",
    icon: ShieldCheck,
    color: "#EE9E5C",
    details: [
      "Détection incendie",
      "Systèmes de sécurité",
      "Coordination technique",
      "Mise en service",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Analyser",
    description:
      "Comprendre les besoins, les contraintes du bâtiment et les objectifs du projet.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "Concevoir",
    description:
      "Définir et dimensionner des solutions techniques cohérentes et adaptées.",
    icon: Settings2,
  },
  {
    number: "03",
    title: "Coordonner",
    description:
      "Assurer la coordination entre les différents lots et intervenants.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Réaliser",
    description:
      "Accompagner la mise en œuvre, le suivi de chantier et le contrôle qualité.",
    icon: HardHat,
  },
];

function Expertise() {
  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#203558] px-6 py-24 text-white lg:px-8 lg:py-32">

        {/* Décor */}
        <div className="absolute right-[-160px] top-[-180px] h-[500px] w-[500px] rounded-full border-[90px] border-[#3A9CD7]/10" />

        <div className="absolute bottom-[-220px] left-[30%] h-[450px] w-[450px] rounded-full border-[70px] border-[#8CC53D]/10" />

        <div className="absolute right-[24%] top-[35%] h-2 w-2 rounded-full bg-[#EE287A]" />
        <div className="absolute right-[18%] top-[55%] h-2 w-2 rounded-full bg-[#8CC53D]" />
        <div className="absolute left-[40%] bottom-[22%] h-2 w-2 rounded-full bg-[#EE9E5C]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8CC53D]">
            Notre savoir-faire
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Les techniques spéciales
            <span className="block text-[#3A9CD7]">
              au cœur du bâtiment.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            TECHBAT rassemble plusieurs compétences techniques pour
            accompagner les projets de construction, de rénovation et
            d'aménagement avec une approche globale et coordonnée.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["HVAC", "Électricité", "Sanitaire", "Sécurité incendie"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm"
                >
                  {item}
                </span>
              )
            )}
          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                Notre expertise
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#203558] sm:text-4xl lg:text-5xl">
                Une approche globale des techniques du bâtiment.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-[#58595B]">
                Chaque installation technique doit fonctionner en
                cohérence avec les autres. Notre rôle est de comprendre
                cette interaction afin de proposer des solutions adaptées
                aux contraintes de chaque projet.
              </p>
            </div>

          </div>

          {/* Ligne de séparation */}
          <div className="mt-14 h-px bg-slate-200" />

        </div>
      </section>


      {/* =====================================================
          DOMAINES D'EXPERTISE
      ===================================================== */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 lg:grid-cols-2">

            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl lg:p-10"
                >

                  {/* Accent vertical */}
                  <div
                    className="absolute left-0 top-0 h-full w-1.5"
                    style={{ backgroundColor: item.color }}
                  />

                  {/* Numéro */}
                  <div className="flex items-start justify-between gap-6">

                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      <Icon size={32} strokeWidth={1.5} />
                    </div>

                    <span
                      className="text-5xl font-bold leading-none opacity-[0.08]"
                      style={{ color: item.color }}
                    >
                      {item.number}
                    </span>

                  </div>

                  <div className="mt-8">

                    <p
                      className="text-xs font-bold uppercase tracking-[0.16em]"
                      style={{ color: item.color }}
                    >
                      {item.subtitle}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-[#203558] lg:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-xl leading-7 text-[#58595B]">
                      {item.description}
                    </p>

                  </div>

                  {/* Détails */}
                  <div className="mt-7 grid gap-2 sm:grid-cols-2">

                    {item.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5"
                      >
                        <CheckCircle2
                          size={16}
                          strokeWidth={2}
                          style={{ color: item.color }}
                        />

                        <span className="text-sm font-medium text-[#203558]">
                          {detail}
                        </span>
                      </div>
                    ))}

                  </div>

                  {/* Ligne */}
                  <div
                    className="mt-8 h-[2px] w-10 transition-all duration-500 group-hover:w-20"
                    style={{ backgroundColor: item.color }}
                  />

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          APPROCHE
      ===================================================== */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            {/* Texte */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                Notre approche
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#203558] sm:text-4xl">
                Une vision technique qui dépasse chaque spécialité.
              </h2>

              <p className="mt-6 leading-8 text-[#58595B]">
                HVAC, électricité, sanitaire et sécurité incendie doivent
                être pensés ensemble. Cette coordination permet de limiter
                les incohérences et d'assurer une meilleure intégration des
                installations dans le bâtiment.
              </p>

              <p className="mt-4 leading-8 text-[#58595B]">
                Notre intervention peut accompagner différentes phases du
                projet, de l'analyse initiale jusqu'à la réalisation et la
                mise en service.
              </p>

            </div>


            {/* Étapes */}
            <div className="rounded-3xl bg-[#203558] p-8 lg:p-10">

              <div className="space-y-1">

                {process.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className={`group flex gap-5 py-6 ${
                        index !== process.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }`}
                    >

                      <div className="relative">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#3A9CD7] transition-colors duration-300 group-hover:bg-[#3A9CD7] group-hover:text-white">
                          <Icon size={21} strokeWidth={1.7} />
                        </div>

                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold tracking-wider text-[#8CC53D]">
                            {step.number}
                          </span>

                          <h3 className="font-semibold text-white">
                            {step.title}
                          </h3>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-white/55">
                          {step.description}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CE QUE NOUS APPORTONS
      ===================================================== */}
      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
              Notre engagement
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#203558] sm:text-4xl">
              Une expertise au service de la performance du projet.
            </h2>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3A9CD7]/10 text-[#3A9CD7]">
                <Settings2 size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#203558]">
                Cohérence technique
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#58595B]">
                Rechercher une intégration cohérente des différentes
                installations techniques dans le bâtiment.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8CC53D]/10 text-[#8CC53D]">
                <CheckCircle2 size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#203558]">
                Qualité & conformité
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#58595B]">
                Porter une attention particulière à la qualité des
                installations et au respect des exigences techniques.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EE9E5C]/10 text-[#EE9E5C]">
                <HardHat size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#203558]">
                Accompagnement
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#58595B]">
                Assurer un accompagnement adapté aux différentes étapes
                de la réalisation du projet.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl">

          <div className="relative overflow-hidden rounded-3xl bg-[#203558] px-8 py-12 md:px-12 md:py-14">

            {/* Décor */}
            <div className="absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full border-[55px] border-[#3A9CD7]/10" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div className="max-w-2xl">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8CC53D]">
                  Votre projet
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  Un besoin en techniques spéciales ?
                </h2>

                <p className="mt-4 leading-7 text-white/60">
                  Parlons de votre projet et des solutions techniques
                  adaptées à votre bâtiment.
                </p>

              </div>

              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#3A9CD7] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#203558]"
              >
                Nous contacter

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Expertise;