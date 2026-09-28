import {
  Building2,
  Target,
  Users,
  ShieldCheck,
  Lightbulb,
  UserRound,
  PenTool,
  Calculator,
  Wrench,
  Zap,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  HardHat,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Précision",
    description:
      "Chaque projet est étudié avec attention afin de proposer des solutions adaptées aux contraintes techniques, fonctionnelles et réglementaires.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Nous privilégions une collaboration directe, une communication claire et une relation de confiance avec nos clients et partenaires.",
  },
  {
    icon: ShieldCheck,
    title: "Fiabilité",
    description:
      "La qualité, la sécurité et la durabilité des installations sont au cœur de notre manière de travailler.",
  },
  {
    icon: Lightbulb,
    title: "Solutions",
    description:
      "Notre expertise nous permet de rechercher des solutions techniques cohérentes, efficaces et adaptées à chaque environnement.",
  },
];

const objectives = [
  "Apporter des solutions techniques adaptées aux besoins de chaque projet.",
  "Assurer un suivi rigoureux de la conception jusqu'à la réalisation.",
  "Garantir la qualité et la conformité des installations.",
  "Construire une relation durable avec nos clients et partenaires.",
];

const expertise = [
  {
    icon: Wrench,
    title: "HVAC",
    description:
      "Conception et réalisation des installations de chauffage, ventilation et climatisation.",
  },
  {
    icon: Zap,
    title: "Électricité",
    description:
      "Installations électriques CFO/CFA, sécurité, contrôle d'accès et systèmes techniques.",
  },
  {
    icon: Building2,
    title: "Sanitaire",
    description:
      "Installations sanitaires, réseaux hydrauliques et équipements associés.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité incendie",
    description:
      "Solutions techniques liées à la détection incendie et aux équipements de sécurité.",
  },
];

const approach = [
  {
    number: "01",
    title: "Comprendre",
    text: "Analyse des besoins, des contraintes, du contexte et des objectifs du projet.",
  },
  {
    number: "02",
    title: "Concevoir",
    text: "Définition et dimensionnement des solutions techniques adaptées.",
  },
  {
    number: "03",
    title: "Coordonner",
    text: "Coordination des différents intervenants et des lots techniques.",
  },
  {
    number: "04",
    title: "Réaliser",
    text: "Mise en œuvre, suivi de chantier, contrôle qualité et conformité.",
  },
  {
    number: "05",
    title: "Mettre en service",
    text: "Essais, équilibrage, commissioning, réception et accompagnement.",
  },
];

function About() {
  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#203558] px-6 py-24 text-white lg:px-8 lg:py-32">

        <div className="absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full border-[80px] border-[#3A9CD7]/10" />

        <div className="absolute bottom-[-180px] left-[35%] h-[420px] w-[420px] rounded-full border-[70px] border-[#8CC53D]/10" />

        <div className="absolute right-[18%] top-[30%] h-2 w-2 rounded-full bg-[#EE287A]" />
        <div className="absolute right-[25%] top-[45%] h-2 w-2 rounded-full bg-[#8CC53D]" />
        <div className="absolute left-[42%] bottom-[25%] h-2 w-2 rounded-full bg-[#EE9E5C]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8CC53D]">
            Qui sommes-nous ?
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Une expertise technique
            <span className="block text-[#3A9CD7]">
              au service du bâtiment.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            TECHBAT accompagne ses clients dans leurs projets de techniques
            spéciales en associant expertise, coordination, qualité et
            proximité.
          </p>

        </div>
      </section>


      {/* =====================================================
          PRESENTATION
      ===================================================== */}
      <section className="px-6 py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                L'entreprise
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#203558] sm:text-4xl lg:text-5xl">
                Une entreprise spécialisée dans les techniques spéciales.
              </h2>

              <div className="mt-7 space-y-5 text-[#58595B]">

                <p className="leading-8">
                  TECHBAT intervient dans le domaine des techniques spéciales
                  du bâtiment et accompagne ses clients dans la conception,
                  la coordination et la réalisation de leurs installations.
                </p>

                <p className="leading-8">
                  Notre approche repose sur une compréhension précise des
                  besoins de chaque projet afin de proposer des solutions
                  techniques adaptées, fiables et durables.
                </p>

                <p className="leading-8">
                  Nous travaillons en collaboration avec les différents
                  intervenants afin de garantir une intégration cohérente
                  des installations techniques et un suivi rigoureux des
                  différentes phases du projet.
                </p>

              </div>

            </div>


            <div className="relative">

              <div className="rounded-3xl bg-[#203558] p-8 sm:p-10 lg:p-12">

                <Building2
                  size={52}
                  strokeWidth={1.2}
                  className="text-[#3A9CD7]"
                />

                <p className="mt-8 text-4xl font-bold text-white sm:text-5xl">
                  TECHBAT
                </p>

                <div className="mt-5 h-[2px] w-16 bg-[#8CC53D]" />

                <p className="mt-6 leading-7 text-white/65">
                  Une organisation technique capable d'intervenir sur
                  différents environnements de construction, de rénovation
                  et d'aménagement.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-4">

                  <div className="border-l border-white/15 pl-4">
                    <p className="text-2xl font-bold text-white">
                      HVAC
                    </p>
                    <p className="mt-1 text-xs text-white/50">
                      Techniques climatiques
                    </p>
                  </div>

                  <div className="border-l border-white/15 pl-4">
                    <p className="text-2xl font-bold text-white">
                      ELEC
                    </p>
                    <p className="mt-1 text-xs text-white/50">
                      Installations électriques
                    </p>
                  </div>

                  <div className="border-l border-white/15 pl-4">
                    <p className="text-2xl font-bold text-white">
                      SANI
                    </p>
                    <p className="mt-1 text-xs text-white/50">
                      Réseaux sanitaires
                    </p>
                  </div>

                  <div className="border-l border-white/15 pl-4">
                    <p className="text-2xl font-bold text-white">
                      FIRE
                    </p>
                    <p className="mt-1 text-xs text-white/50">
                      Sécurité incendie
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          VISION
      ===================================================== */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                Notre vision
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#203558] sm:text-4xl">
                Transformer les contraintes techniques en solutions concrètes.
              </h2>

            </div>

            <div className="space-y-5 text-[#58595B]">

              <p className="leading-8">
                Un bâtiment performant repose sur la cohérence de ses
                installations techniques. Notre rôle est d'apporter cette
                cohérence à chaque étape du projet.
              </p>

              <p className="leading-8">
                Nous cherchons à associer maîtrise technique, organisation
                et capacité d'adaptation afin de répondre aux exigences
                spécifiques de chaque opération.
              </p>

            </div>

          </div>


          {/* VISION CARDS */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <BarChart3 className="text-[#3A9CD7]" size={28} />
              <h3 className="mt-5 text-xl font-bold text-[#203558]">
                Performance
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#58595B]">
                Rechercher des installations cohérentes et performantes
                adaptées aux objectifs du bâtiment.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <ShieldCheck className="text-[#8CC53D]" size={28} />
              <h3 className="mt-5 text-xl font-bold text-[#203558]">
                Fiabilité
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#58595B]">
                Accorder une attention particulière à la qualité,
                à la sécurité et à la conformité.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <Users className="text-[#EE9E5C]" size={28} />
              <h3 className="mt-5 text-xl font-bold text-[#203558]">
                Collaboration
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#58595B]">
                Travailler avec les différents acteurs pour assurer
                une coordination efficace du projet.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OBJECTIFS
      ===================================================== */}
      <section className="px-6 py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                Nos objectifs
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#203558] sm:text-4xl">
                Une même exigence à chaque projet.
              </h2>

              <p className="mt-5 leading-7 text-[#58595B]">
                Notre objectif est de proposer une réponse technique
                pertinente tout en assurant une réalisation maîtrisée
                et un accompagnement de proximité.
              </p>

            </div>


            <div className="grid gap-4">

              {objectives.map((objective, index) => (
                <div
                  key={objective}
                  className="flex gap-5 border-b border-slate-200 py-5"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#203558] text-xs font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="pt-1 text-base font-medium leading-7 text-[#203558]">
                    {objective}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          VALEURS
      ===================================================== */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
              Nos valeurs
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#203558] sm:text-4xl">
              Ce qui guide notre travail.
            </h2>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#203558] text-white transition group-hover:bg-[#3A9CD7]">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#203558]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#58595B]">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          ORGANIGRAMME
      ===================================================== */}
      <section className="px-6 py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
              Notre organisation
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#203558] sm:text-4xl">
              Une équipe structurée autour de vos projets.
            </h2>

            <p className="mt-5 leading-7 text-[#58595B]">
              Une organisation qui associe gestion de projet, expertise
              technique, assistance et équipes spécialisées afin d'assurer
              un suivi cohérent de chaque réalisation.
            </p>

          </div>


          {/* PROJECT MANAGER */}
          <div className="mt-14 flex justify-center">

            <div className="w-full max-w-md rounded-2xl bg-[#203558] p-7 text-center shadow-xl">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#3A9CD7] text-white">
                <UserRound size={27} />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8CC53D]">
                Project Manager
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                ZIZI NACER Hicham
              </h3>

            </div>

          </div>


          {/* PROJECT TEAM */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
              <Wrench className="mx-auto text-[#3A9CD7]" size={25} />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#3A9CD7]">
                Ingénieur de projets
              </p>
              <h3 className="mt-2 font-bold text-[#203558]">
                GHEORGHE ILIUTA George
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
              <PenTool className="mx-auto text-[#8CC53D]" size={25} />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#8CC53D]">
                Dessinatrice
              </p>
              <h3 className="mt-2 font-bold text-[#203558]">
                ALWISH Aliaa
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
              <Users className="mx-auto text-[#EE9E5C]" size={25} />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#EE9E5C]">
                Assistante technique
              </p>
              <h3 className="mt-2 font-bold text-[#203558]">
                SENHAJI Rajae
              </h3>
              <p className="mt-2 text-xs text-[#58595B]">
                Aide administrative : ASSIME Hakima
              </p>
            </div>

          </div>


          {/* TECHNICAL TEAMS */}
          <div className="mt-14 grid gap-6 lg:grid-cols-2">

            {/* ELECTRICITY */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="bg-[#203558] p-6">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3A9CD7] text-white">
                    <Zap size={22} />
                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-[#8CC53D]">
                      Électricité
                    </p>

                    <h3 className="mt-1 font-bold text-white">
                      BENCHAOU Soufiane
                    </h3>

                    <p className="text-xs text-white/50">
                      Chef d'équipe
                    </p>

                  </div>

                </div>

              </div>


              <div className="p-6">

                <div className="grid grid-cols-2 gap-3">

                  {[
                    "Aichoub",
                    "Hugo",
                    "El Mahfoud",
                    "Mohammed",
                    "El Maati",
                  ].map((person) => (
                    <div
                      key={person}
                      className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-[#203558]"
                    >
                      {person}
                    </div>
                  ))}

                </div>

              </div>

            </div>


            {/* HVAC / SANITAIRE */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="bg-[#203558] p-6">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8CC53D] text-white">
                    <Wrench size={22} />
                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-[#8CC53D]">
                      HVAC / Sanitaire
                    </p>

                    <h3 className="mt-1 font-bold text-white">
                      ZAHIR Moustafa
                    </h3>

                    <p className="text-xs text-white/50">
                      Chef d'équipe
                    </p>

                  </div>

                </div>

              </div>


              <div className="p-6">

                <div className="grid gap-3 sm:grid-cols-2">

                  <div className="rounded-lg bg-slate-50 p-4">

                    <p className="text-xs font-semibold uppercase tracking-wider text-[#3A9CD7]">
                      HVAC
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#203558]">
                      Allali
                    </p>

                  </div>

                  <div className="rounded-lg bg-slate-50 p-4">

                    <p className="text-xs font-semibold uppercase tracking-wider text-[#8CC53D]">
                      Sanitaire
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#203558]">
                      Maurice
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* FIELD TEAM */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3A9CD7]">
                  Équipe terrain
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#203558]">
                  Main-d'œuvre
                </h3>

              </div>

              <div className="flex flex-wrap gap-2">

                {[
                  "Adnan",
                  "Moussa",
                  "Matteo",
                  "Hamid",
                ].map((person) => (
                  <span
                    key={person}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#203558]"
                  >
                    {person}
                  </span>
                ))}

              </div>

            </div>

          </div>


          {/* ACCOUNTING */}
          <div className="mt-6 flex justify-center">

            <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">

              <Calculator
                className="mx-auto text-[#EE287A]"
                size={25}
              />

              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#EE287A]">
                Fonction support
              </p>

              <h3 className="mt-2 font-bold text-[#203558]">
                Comptabilité
              </h3>

              <p className="mt-1 text-sm text-[#58595B]">
                ZGHIRI Zakia
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          EXPERTISE
      ===================================================== */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                Nos domaines d'expertise
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#203558] sm:text-4xl">
                Les techniques au cœur de notre métier.
              </h2>

            </div>

            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3A9CD7] hover:text-[#203558]"
            >
              Découvrir notre savoir-faire
              <ArrowRight size={17} />
            </Link>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <Icon
                    size={29}
                    strokeWidth={1.5}
                    className="text-[#3A9CD7]"
                  />

                  <h3 className="mt-6 text-xl font-bold text-[#203558]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#58595B]">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          APPROCHE
      ===================================================== */}
      <section className="px-6 py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                Notre méthode
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#203558] sm:text-4xl">
                De l'analyse à la réalisation.
              </h2>

              <p className="mt-6 leading-7 text-[#58595B]">
                Chaque projet possède ses propres contraintes. Notre rôle
                est de les comprendre, de coordonner les différentes
                compétences et de construire une réponse technique adaptée.
              </p>

            </div>


            <div>

              {approach.map((step, index) => (

                <div
                  key={step.number}
                  className={`flex gap-6 py-7 ${
                    index !== approach.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#203558] text-xs font-bold text-white">
                    {step.number}
                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-[#203558]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#58595B]">
                      {step.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ENGAGEMENT QUALITÉ
      ===================================================== */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-24">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl bg-[#203558] px-8 py-12 md:px-12 md:py-14">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8CC53D]">
                  Notre engagement
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  Une exigence constante à chaque étape.
                </h2>

              </div>


              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  "Qualité des installations",
                  "Respect des exigences techniques",
                  "Coordination des intervenants",
                  "Suivi et accompagnement",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                  >

                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-[#3A9CD7]"
                    />

                    <span className="text-sm text-white/80">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-24">

        <div className="mx-auto max-w-6xl">

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-8 py-12 md:px-12 md:py-14">

            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#3A9CD7]/10 to-transparent" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div className="max-w-2xl">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                  Votre projet
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#203558] md:text-4xl">
                  Construisons ensemble votre solution technique.
                </h2>

                <p className="mt-4 leading-7 text-[#58595B]">
                  Un projet de construction, de rénovation ou d'aménagement ?
                  Notre équipe vous accompagne dans vos besoins techniques.
                </p>

              </div>

              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#3A9CD7] px-6 py-3.5 font-semibold text-white transition hover:bg-[#203558]"
              >
                Nous contacter

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default About;