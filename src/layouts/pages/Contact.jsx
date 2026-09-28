import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-white text-[#203558]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#203558]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3A9CD7]">
            Parlons de votre projet
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Construisons ensemble
            <br />
            votre solution technique.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Une question, un projet ou un besoin technique ? Échangeons
            directement avec notre équipe.
          </p>

        </div>
      </section>

      {/* CONTACT PRINCIPAL */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-12">

            {/* INFORMATIONS */}
            <div className="lg:col-span-5">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3A9CD7]">
                Nous contacter
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#203558] md:text-5xl">
                Parlons de votre projet.
              </h2>

              <p className="mt-7 max-w-lg text-lg leading-8 text-[#58595B]">
                Décrivez-nous votre besoin, votre projet ou votre demande.
                Notre équipe vous répondra dans les meilleurs délais.
              </p>

              {/* COORDONNÉES */}
              <div className="mt-12 space-y-8">

                {/* TELEPHONE */}
                <a
                  href="tel:+324241140"
                  className="group block border-t border-slate-200 pt-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Téléphone
                  </p>

                  <p className="mt-2 text-xl font-semibold text-[#203558] transition group-hover:text-[#3A9CD7]">
                    +32 424 11 40
                  </p>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:info@techbat.be"
                  className="group block border-t border-slate-200 pt-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    E-mail
                  </p>

                  <p className="mt-2 text-xl font-semibold text-[#203558] transition group-hover:text-[#3A9CD7]">
                    info@techbat.be
                  </p>
                </a>

                {/* ADRESSE */}
                <div className="border-t border-slate-200 pt-6">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Adresse
                  </p>

                  <p className="mt-2 text-xl font-semibold leading-8 text-[#203558]">
                    Rue des Coteaux 128
                    <br />
                    1030 Schaerbeek
                    <br />
                    Belgique
                  </p>

                </div>

              </div>

            </div>

            {/* FORMULAIRE */}
            <div className="lg:col-span-7">

              <div className="rounded-3xl bg-slate-50 p-8 md:p-10 lg:p-12">

                {submitted ? (
                  <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#3A9CD7] text-2xl font-bold text-white">
                      ✓
                    </div>

                    <h2 className="mt-7 text-3xl font-semibold text-[#203558]">
                      Message envoyé
                    </h2>

                    <p className="mt-4 max-w-md leading-7 text-[#58595B]">
                      Merci pour votre message. Notre équipe reviendra vers
                      vous dans les meilleurs délais.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-8 rounded-full border border-[#203558] px-6 py-3 font-semibold text-[#203558] transition hover:bg-[#203558] hover:text-white"
                    >
                      Envoyer un autre message
                    </button>

                  </div>
                ) : (
                  <>
                    <div className="mb-10">

                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                        Votre demande
                      </p>

                      <h2 className="mt-3 text-3xl font-semibold text-[#203558]">
                        Décrivez-nous votre projet
                      </h2>

                      <p className="mt-4 leading-7 text-[#58595B]">
                        Quelques informations suffisent pour nous permettre
                        de mieux comprendre votre demande.
                      </p>

                    </div>

                    <form onSubmit={handleSubmit}>

                      {/* NOM / PRENOM */}
                      <div className="grid gap-6 md:grid-cols-2">

                        <div>
                          <label
                            htmlFor="nom"
                            className="text-sm font-semibold text-[#203558]"
                          >
                            Nom
                          </label>

                          <input
                            id="nom"
                            name="nom"
                            type="text"
                            required
                            placeholder="Votre nom"
                            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#203558] outline-none transition placeholder:text-slate-400 focus:border-[#3A9CD7] focus:ring-2 focus:ring-[#3A9CD7]/10"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="prenom"
                            className="text-sm font-semibold text-[#203558]"
                          >
                            Prénom
                          </label>

                          <input
                            id="prenom"
                            name="prenom"
                            type="text"
                            required
                            placeholder="Votre prénom"
                            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#203558] outline-none transition placeholder:text-slate-400 focus:border-[#3A9CD7] focus:ring-2 focus:ring-[#3A9CD7]/10"
                          />
                        </div>

                      </div>

                      {/* EMAIL */}
                      <div className="mt-6">

                        <label
                          htmlFor="email"
                          className="text-sm font-semibold text-[#203558]"
                        >
                          Adresse e-mail
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="vous@exemple.be"
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#203558] outline-none transition placeholder:text-slate-400 focus:border-[#3A9CD7] focus:ring-2 focus:ring-[#3A9CD7]/10"
                        />

                      </div>

                      {/* TELEPHONE */}
                      <div className="mt-6">

                        <label
                          htmlFor="telephone"
                          className="text-sm font-semibold text-[#203558]"
                        >
                          Téléphone
                        </label>

                        <input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          placeholder="+32 ..."
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#203558] outline-none transition placeholder:text-slate-400 focus:border-[#3A9CD7] focus:ring-2 focus:ring-[#3A9CD7]/10"
                        />

                      </div>

                      {/* TYPE DE PROJET */}
                      <div className="mt-6">

                        <label
                          htmlFor="projet"
                          className="text-sm font-semibold text-[#203558]"
                        >
                          Type de projet
                        </label>

                        <select
                          id="projet"
                          name="projet"
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#203558] outline-none transition focus:border-[#3A9CD7] focus:ring-2 focus:ring-[#3A9CD7]/10"
                        >
                          <option value="">
                            Sélectionnez un domaine
                          </option>

                          <option value="hvac">
                            HVAC
                          </option>

                          <option value="electricite">
                            Électricité
                          </option>

                          <option value="plomberie">
                            Plomberie sanitaire
                          </option>

                          <option value="incendie">
                            Détection incendie
                          </option>

                          <option value="autre">
                            Autre demande
                          </option>
                        </select>

                      </div>

                      {/* MESSAGE */}
                      <div className="mt-6">

                        <label
                          htmlFor="message"
                          className="text-sm font-semibold text-[#203558]"
                        >
                          Votre message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          rows="6"
                          required
                          placeholder="Décrivez votre projet, vos besoins ou votre demande..."
                          className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#203558] outline-none transition placeholder:text-slate-400 focus:border-[#3A9CD7] focus:ring-2 focus:ring-[#3A9CD7]/10"
                        />

                      </div>

                      {/* BOUTON */}
                      <button
                        type="submit"
                        className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#203558] px-6 py-4 font-semibold text-white transition hover:bg-[#3A9CD7]"
                      >
                        Envoyer ma demande
                        <span className="ml-3 text-lg">
                          →
                        </span>
                      </button>

                      <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                        Vos informations sont utilisées uniquement pour
                        répondre à votre demande.
                      </p>

                    </form>
                  </>
                )}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BANDEAU FINAL */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-16 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3A9CD7]">
                TECHBAT
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#203558] md:text-3xl">
                Une expertise technique au service de vos projets.
              </h2>

            </div>

            <a
              href="mailto:info@techbat.be"
              className="inline-flex w-fit items-center rounded-full border border-[#203558] px-6 py-3 font-semibold text-[#203558] transition hover:bg-[#203558] hover:text-white"
            >
              Écrire un e-mail
              <span className="ml-3">→</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;