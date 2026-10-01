import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [verificationRequired, setVerificationRequired] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [emailToVerify, setEmailToVerify] = useState("");
  const [verifying, setVerifying] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const data = {
      nom: form.get("nom"),
      prenom: form.get("prenom"),
      email: form.get("email"),
      telephone: form.get("telephone"),
      projet: form.get("projet"),
      message: form.get("message"),
    };

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("Réponse du serveur :", result);

      if (result.success && result.verificationRequired) {
        setEmailToVerify(data.email);
        setVerificationRequired(true);
        setVerificationError("");
      }
    } catch (error) {
      console.error("Erreur :", error);
    }
  }

  async function handleVerifyEmail(e) {
    e.preventDefault();

    setVerifying(true);
    setVerificationError("");

    try {
      const response = await fetch(
        `${API_URL}/api/verify-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailToVerify,
            code: verificationCode,
          }),
        }
      );

      const result = await response.json();

      console.log("Vérification :", result);

      if (result.success && result.verified) {
        setVerificationRequired(false);
        setSubmitted(true);
        setVerificationCode("");
      } else {
        setVerificationError(result.message);
      }
    } catch (error) {
      console.error("Erreur :", error);
      setVerificationError(
        "Impossible de contacter le serveur."
      );
    } finally {
      setVerifying(false);
    }
  }

  function resetForm() {
    setSubmitted(false);
    setVerificationRequired(false);
    setVerificationCode("");
    setVerificationError("");
    setEmailToVerify("");
  }

  return (
    <main className="min-h-screen bg-white text-[#203558]">

      {/* =========================================================
          HERO CONTACT
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">

        {/* Décoration */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#3A9CD7]/10" />
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#3A9CD7]/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

          {/* Fil conducteur */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#3A9CD7]" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3A9CD7]">
              Contact
            </p>
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-[#203558] sm:text-6xl lg:text-7xl">
            Parlons de votre
            <br />
            <span className="text-[#3A9CD7]">
              projet.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#58595B] md:text-xl">
            Une question, un projet ou un besoin technique ?
            Notre équipe est à votre écoute pour vous accompagner
            dans vos projets.
          </p>

          {/* Petit indicateur */}
          <div className="mt-10 flex items-center gap-3 text-sm font-medium text-[#203558]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#203558] text-white">
              ↓
            </span>

            <span>
              Envoyez-nous votre demande
            </span>
          </div>

        </div>
      </section>


      {/* =========================================================
          CONTACT PRINCIPAL
      ========================================================= */}

      <section className="px-6 py-20 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">

            {/* =====================================================
                INFORMATIONS
            ===================================================== */}

            <div className="lg:col-span-5">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                Nous contacter
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#203558] md:text-4xl">
                Une équipe à votre écoute.
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-[#58595B]">
                Décrivez-nous votre besoin, votre projet ou votre
                demande. Nous vous répondrons dans les meilleurs délais.
              </p>


              {/* COORDONNÉES */}

              <div className="mt-10 space-y-0">

                {/* TELEPHONE */}

                <a
                  href="tel:+324241140"
                  className="group flex items-start gap-5 border-t border-slate-200 py-6"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#203558] transition group-hover:bg-[#203558] group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-1.372a1.5 1.5 0 00-1.16-1.46l-2.78-.62a1.5 1.5 0 00-1.46.47l-.97 1.183a12.04 12.04 0 01-5.707-5.707l1.183-.97a1.5 1.5 0 00.47-1.46l-.62-2.78a1.5 1.5 0 00-1.46-1.16H3.75a1.5 1.5 0 00-1.5 1.5v2.25z"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Téléphone
                    </p>

                    <p className="mt-1 text-lg font-semibold text-[#203558] transition group-hover:text-[#3A9CD7]">
                      +32 424 11 40
                    </p>
                  </div>

                </a>


                {/* EMAIL */}

                <a
                  href="mailto:info@techbat.be"
                  className="group flex items-start gap-5 border-t border-slate-200 py-6"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#203558] transition group-hover:bg-[#203558] group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7.5A2.5 2.5 0 015.5 5h13A2.5 2.5 0 0121 7.5v9a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 16.5v-9z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.5 7l8.5 6 8.5-6"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      E-mail
                    </p>

                    <p className="mt-1 text-lg font-semibold text-[#203558] transition group-hover:text-[#3A9CD7]">
                      info@techbat.be
                    </p>
                  </div>

                </a>


                {/* ADRESSE */}

                <div className="flex items-start gap-5 border-t border-slate-200 py-6">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#203558]">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"
                      />

                      <circle
                        cx="12"
                        cy="9"
                        r="2.2"
                      />
                    </svg>

                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Adresse
                    </p>

                    <p className="mt-1 text-lg font-semibold leading-7 text-[#203558]">
                      Rue des Coteaux 128
                      <br />
                      1030 Schaerbeek
                      <br />
                      Belgique
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* =====================================================
                FORMULAIRE
            ===================================================== */}

            <div className="lg:col-span-7">

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_60px_-30px_rgba(32,53,88,0.25)] md:p-10 lg:p-12">

                {/* =================================================
                    MESSAGE ENVOYÉ / VÉRIFIÉ
                ================================================= */}

                {submitted ? (

                  <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#3A9CD7] text-2xl font-bold text-white">
                      ✓
                    </div>

                    <h2 className="mt-7 text-3xl font-semibold text-[#203558]">
                      Adresse e-mail vérifiée
                    </h2>

                    <p className="mt-4 max-w-md leading-7 text-[#58595B]">
                      Merci pour votre demande. Votre adresse e-mail
                      a bien été vérifiée. Notre équipe reviendra vers
                      vous dans les meilleurs délais.
                    </p>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-8 rounded-full border border-[#203558] px-6 py-3 font-semibold text-[#203558] transition hover:bg-[#203558] hover:text-white"
                    >
                      Envoyer un autre message
                    </button>

                  </div>


                ) : verificationRequired ? (

                  /* =================================================
                     VÉRIFICATION EMAIL
                  ================================================= */

                  <div className="flex min-h-[500px] flex-col justify-center">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#203558] text-white">
                      @
                    </div>

                    <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                      Vérification
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold text-[#203558]">
                      Vérifiez votre adresse e-mail
                    </h2>

                    <p className="mt-4 leading-7 text-[#58595B]">
                      Pour continuer, saisissez le code de vérification
                      affiché dans votre terminal Node.
                    </p>

                    <div className="mt-6 rounded-2xl bg-slate-50 p-5">

                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                        Adresse à vérifier
                      </p>

                      <p className="mt-2 break-all font-semibold text-[#203558]">
                        {emailToVerify}
                      </p>

                    </div>

                    <form
                      onSubmit={handleVerifyEmail}
                      className="mt-8"
                    >

                      <label
                        htmlFor="verificationCode"
                        className="text-sm font-semibold text-[#203558]"
                      >
                        Code de vérification
                      </label>

                      <input
                        id="verificationCode"
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        maxLength="6"
                        required
                        value={verificationCode}
                        onChange={(e) =>
                          setVerificationCode(
                            e.target.value.replace(/\D/g, "")
                          )
                        }
                        placeholder="000000"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-center text-2xl font-semibold tracking-[0.4em] text-[#203558] outline-none transition placeholder:text-slate-300 focus:border-[#3A9CD7] focus:bg-white focus:ring-2 focus:ring-[#3A9CD7]/10"
                      />

                      {verificationError && (
                        <p className="mt-3 text-center text-sm font-medium text-red-500">
                          {verificationError}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={verifying}
                        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#203558] px-6 py-4 font-semibold text-white transition hover:bg-[#3A9CD7] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {verifying
                          ? "Vérification..."
                          : "Vérifier mon e-mail"}

                        {!verifying && (
                          <span className="ml-3 text-lg">
                            →
                          </span>
                        )}
                      </button>

                    </form>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-5 text-center text-sm font-medium text-slate-400 transition hover:text-[#203558]"
                    >
                      ← Revenir au formulaire
                    </button>

                  </div>


                ) : (

                  /* =================================================
                     FORMULAIRE
                  ================================================= */

                  <>

                    <div className="mb-10">

                      <div className="flex items-center gap-3">

                        <span className="h-px w-8 bg-[#3A9CD7]" />

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                          Votre demande
                        </p>

                      </div>

                      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#203558]">
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
                            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[#203558] outline-none transition placeholder:text-slate-400 focus:border-[#3A9CD7] focus:bg-white focus:ring-2 focus:ring-[#3A9CD7]/10"
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
                            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[#203558] outline-none transition placeholder:text-slate-400 focus:border-[#3A9CD7] focus:bg-white focus:ring-2 focus:ring-[#3A9CD7]/10"
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
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[#203558] outline-none transition placeholder:text-slate-400 focus:border-[#3A9CD7] focus:bg-white focus:ring-2 focus:ring-[#3A9CD7]/10"
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
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[#203558] outline-none transition placeholder:text-slate-400 focus:border-[#3A9CD7] focus:bg-white focus:ring-2 focus:ring-[#3A9CD7]/10"
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
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[#203558] outline-none transition focus:border-[#3A9CD7] focus:bg-white focus:ring-2 focus:ring-[#3A9CD7]/10"
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
                          className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[#203558] outline-none transition placeholder:text-slate-400 focus:border-[#3A9CD7] focus:bg-white focus:ring-2 focus:ring-[#3A9CD7]/10"
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


      {/* =========================================================
          BANDEAU FINAL
      ========================================================= */}

      <section className="border-t border-slate-200 bg-[#203558] px-6 py-14 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3A9CD7]">
                TECHBAT
              </p>

              <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white md:text-3xl">
                Une expertise technique au service de vos projets.
              </h2>

            </div>

            <a
              href="mailto:info@techbat.be"
              className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 font-semibold text-[#203558] transition hover:bg-[#3A9CD7] hover:text-white"
            >
              Écrire un e-mail

              <span className="ml-3">
                →
              </span>

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;