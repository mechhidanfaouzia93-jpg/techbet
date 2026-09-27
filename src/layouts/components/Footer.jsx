import { Link } from "react-router-dom";
import logo from "../assets/logo-techbat.png";

function Footer() {
  return (
    <footer className="bg-[#203558] text-white">

      {/* Partie principale */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo + présentation */}
          <div className="lg:col-span-2">

            <div className="mb-6 inline-block rounded-lg bg-white px-5 py-3">
              <img
                src={logo}
                alt="TECHBAT"
                className="h-16 w-auto"
              />
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-200">
              TECHBAT est spécialisée dans les techniques spéciales
              du bâtiment : HVAC, électricité, plomberie sanitaire
              et détection incendie.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Notre expérience et notre expertise nous permettent
              d'accompagner nos clients dans la conception et la
              réalisation de solutions techniques fiables et durables.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 transition hover:text-white"
                >
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-slate-300 transition hover:text-white"
                >
                  Qui sommes-nous ?
                </Link>
              </li>

              <li>
                <Link
                  to="/expertise"
                  className="text-slate-300 transition hover:text-white"
                >
                  Notre savoir-faire
                </Link>
              </li>

              <li>
                <Link
                  to="/realisations"
                  className="text-slate-300 transition hover:text-white"
                >
                  Nos réalisations
                </Link>
              </li>

              <li>
                <Link
                  to="/references"
                  className="text-slate-300 transition hover:text-white"
                >
                  Nos références
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="text-slate-300 transition hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <span className="mb-1 block text-xs uppercase tracking-wide text-slate-400">
                  Téléphone
                </span>

                <a
                  href="tel:024241140"
                  className="text-slate-200 transition hover:text-white"
                >
                  02 424 11 40
                </a>
              </li>

              <li>
                <span className="mb-1 block text-xs uppercase tracking-wide text-slate-400">
                  Email
                </span>

                <a
                  href="mailto:info@techbat.be"
                  className="text-slate-200 transition hover:text-white"
                >
                  info@techbat.be
                </a>
              </li>

              <li>
                <span className="mb-1 block text-xs uppercase tracking-wide text-slate-400">
                  Adresse
                </span>

                <span className="leading-6 text-slate-200">
                  Rue des Coteaux 128
                  <br />
                  1030 Schaerbeek
                </span>
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* Ligne colorée */}
      <div className="flex h-1">
        <div className="w-1/5 bg-[#EE287A]" />
        <div className="w-1/5 bg-[#B857CC]" />
        <div className="w-1/5 bg-[#3A9CD7]" />
        <div className="w-1/5 bg-[#8CC53D]" />
        <div className="w-1/5 bg-[#EE9E5C]" />
      </div>

      {/* Copyright */}
      <div className="bg-[#172944]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} TECHBAT. Tous droits réservés.
          </p>

          <p>
            Our Experience at Your Service
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;