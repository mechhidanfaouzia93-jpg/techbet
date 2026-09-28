const questions = [
  {
    question: "Quels types de projets réalisez-vous ?",
    answer:
      "TECHBAT intervient sur des projets de construction, de rénovation et de transformation dans différents secteurs du bâtiment.",
  },
  {
    question: "Quels sont vos domaines d'expertise ?",
    answer:
      "Nos principaux domaines sont le HVAC, l'électricité, la plomberie sanitaire et la détection incendie.",
  },
  {
    question: "Pouvez-vous intervenir sur un projet existant ?",
    answer:
      "Oui. Nous pouvons intervenir dans le cadre de rénovations, de modernisations ou d'adaptations d'installations existantes.",
  },
  {
    question: "Comment demander une offre ?",
    answer:
      "Vous pouvez nous contacter via notre page Contact en présentant votre projet et vos besoins. Notre équipe pourra ensuite vous accompagner.",
  },
  {
    question: "Intervenez-vous sur des projets professionnels ?",
    answer:
      "Oui, notre expertise s'adresse notamment aux projets résidentiels, tertiaires, commerciaux et aux bâtiments publics.",
  },
];

function Faq() {
  return (
    <div className="bg-white">
      <section className="bg-[#203558] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
            Questions fréquentes
          </p>

          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            FAQ
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Retrouvez les réponses aux questions les plus fréquentes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="space-y-5">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white p-6"
            >
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[#203558]">
                {item.question}
              </summary>

              <p className="mt-4 leading-7 text-[#58595B]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Faq;