function Contact() {
    return (
        <div className="bg-white">
            <section className="bg-[#203558] px-6 py-24 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                        Parlons de votre projet
                    </p>

                    <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
                        Contactez-nous
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                        Vous avez un projet ou une question ? Notre équipe est à votre
                        disposition.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A9CD7]">
                            Une question ?
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-[#203558]">
                            Parlons ensemble de votre projet
                        </h2>

                        <p className="mt-6 leading-8 text-[#58595B]">
                            Décrivez-nous votre projet, vos besoins ou votre demande.
                            Nous reviendrons vers vous dans les meilleurs délais.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-[#3A9CD7]">
                                    Téléphone
                                </p>
                                <p className="mt-1 text-lg font-semibold text-[#203558]">
                                    +32 424 11 40
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-[#3A9CD7]">
                                    E-mail
                                </p>
                                <p className="mt-1 text-lg font-semibold text-[#203558]">
                                    info@techbat.be
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-[#3A9CD7]">
                                    Adresse
                                </p>
                                <p className="mt-1 text-lg font-semibold text-[#203558]">
                                    Rue des Coteaux 128
                                    1030 Schaerbeek
                                </p>
                            </div>
                        </div>
                    </div>

                    <form className="rounded-3xl bg-slate-50 p-8 lg:p-10">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label className="text-sm font-semibold text-[#203558]">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#3A9CD7]"
                                    placeholder="Votre nom"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-[#203558]">
                                    Prénom
                                </label>
                                <input
                                    type="text"
                                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#3A9CD7]"
                                    placeholder="Votre prénom"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="text-sm font-semibold text-[#203558]">
                                E-mail
                            </label>
                            <input
                                type="email"
                                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#3A9CD7]"
                                placeholder="vous@exemple.be"
                            />
                        </div>

                        <div className="mt-6">
                            <label className="text-sm font-semibold text-[#203558]">
                                Sujet
                            </label>
                            <input
                                type="text"
                                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#3A9CD7]"
                                placeholder="Sujet de votre demande"
                            />
                        </div>

                        <div className="mt-6">
                            <label className="text-sm font-semibold text-[#203558]">
                                Message
                            </label>
                            <textarea
                                rows="6"
                                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#3A9CD7]"
                                placeholder="Décrivez votre projet..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-6 w-full rounded-xl bg-[#203558] px-6 py-3.5 font-semibold text-white transition hover:bg-[#3A9CD7]"
                        >
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;