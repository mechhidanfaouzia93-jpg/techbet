const references = [
  "Construction",
  "Rénovation",
  "Immobilier",
  "Tertiaire",
  "Commerce",
  "Bâtiments publics",
];

function References() {
  return (
    <div className="bg-white">
      <section className="bg-[#203558] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
            Ils nous font confiance
          </p>

          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Nos références
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Une expérience construite au fil de projets dans différents
            secteurs du bâtiment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#203558]">
            Des projets dans différents secteurs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#58595B]">
            Notre savoir-faire nous permet d'intervenir sur des projets aux
            contraintes et aux usages variés.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {references.map((reference, index) => (
            <div
              key={reference}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#3A9CD7] text-sm font-bold text-white">
                {index + 1}
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#203558]">
                {reference}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#203558]">
            Une expérience au service de vos projets
          </h2>

          <p className="mt-5 leading-8 text-[#58595B]">
            Chaque projet est l'occasion de mettre notre expertise technique
            au service d'une réalisation durable et fonctionnelle.
          </p>
        </div>
      </section>
    </div>
  );
}

export default References;