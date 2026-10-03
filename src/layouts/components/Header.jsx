
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Qui sommes-nous ?", path: "/about" },
    { name: "Notre savoir-faire", path: "/expertise" },
    { name: "Nos réalisations", path: "/realisations" },
    { name: "Nos références", path: "/references" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_4px_20px_rgba(32,53,88,0.06)]">

      {/* =====================================================
          TOPBAR
      ===================================================== */}
      <div className="hidden bg-[#203558] lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 lg:px-8">

          <div className="flex items-center gap-6 text-[12px] font-medium tracking-wide text-white/75">
            <span className="text-white/90">
              Solutions techniques pour vos bâtiments
            </span>

            <span className="h-3.5 w-px bg-white/20" />

            <span className="flex items-center gap-1.5">
              <MapPin size={13} strokeWidth={1.8} />
              Bruxelles & Belgique
            </span>
          </div>

          <div className="flex items-center gap-6 text-[12px] font-medium">
            <a
              href="tel:+324241140"
              className="flex items-center gap-2 text-white/75 transition-colors duration-300 hover:text-white"
            >
              <Phone size={13} strokeWidth={1.8} />
              +32 424 11 40
            </a>

            <a
              href="mailto:info@techbat.be"
              className="flex items-center gap-2 text-white/75 transition-colors duration-300 hover:text-white"
            >
              <Mail size={13} strokeWidth={1.8} />
              info@techbat.be
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          NAVIGATION PRINCIPALE
      ===================================================== */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex shrink-0 items-center"
          >
            <img
              src="/logo-techbat.png"
              alt="TECHBAT"
              className="h-[60px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] lg:h-[66px]"
            />
          </Link>

          {/* =================================================
              NAV DESKTOP
          ================================================= */}
          <nav className="hidden items-center lg:flex">

            <div className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `group relative rounded-lg px-3 py-3 text-[15px] font-semibold tracking-[-0.01em] transition-all duration-300 xl:px-3.5 ${
                      isActive
                        ? "text-[#203558]"
                        : "text-[#58595B] hover:bg-slate-50 hover:text-[#203558]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>

                      {/* Indicateur actif */}
                      <span
                        className={`absolute bottom-[3px] left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#3A9CD7] transition-all duration-300 ${
                          isActive
                            ? "w-[65%] opacity-100"
                            : "w-0 opacity-0 group-hover:w-[50%] group-hover:opacity-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CONTACT */}
            <Link
              to="/contact"
              className="group ml-5 inline-flex items-center gap-2.5 rounded-xl bg-[#203558] px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_18px_rgba(32,53,88,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3A9CD7] hover:shadow-[0_10px_24px_rgba(58,156,215,0.25)]"
            >
              <span>Contact</span>

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </nav>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 lg:hidden ${
              menuOpen
                ? "border-[#203558] bg-[#203558] text-white"
                : "border-slate-200 bg-white text-[#203558] hover:border-[#3A9CD7] hover:text-[#3A9CD7]"
            }`}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={24} strokeWidth={1.8} />
            ) : (
              <Menu size={24} strokeWidth={1.8} />
            )}
          </button>
        </div>

        {/* =================================================
            MENU MOBILE
        ================================================= */}
        <div
          className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[650px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto max-w-7xl px-6 pb-6 pt-3">
            <div className="flex flex-col">

              {navLinks.map((link, index) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center justify-between border-b border-slate-100 px-2 py-4 text-[16px] font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-[#203558]"
                        : "text-[#58595B] hover:pl-4 hover:text-[#203558]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-center gap-3">
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-all ${
                            isActive
                              ? "bg-[#3A9CD7]"
                              : "bg-slate-200 group-hover:bg-[#3A9CD7]"
                          }`}
                        />

                        {link.name}
                      </span>

                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-[#8CC53D]" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* CONTACT MOBILE */}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="group mt-5 flex items-center justify-center gap-3 rounded-xl bg-[#203558] px-6 py-4 text-[16px] font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#3A9CD7]"
              >
                Nous contacter

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* CONTACT INFO MOBILE */}
              <div className="mt-5 grid grid-cols-1 gap-2 border-t border-slate-100 pt-5 text-sm text-[#58595B] sm:grid-cols-2">

                <a
                  href="tel:+324241140"
                  className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-3 transition-colors hover:text-[#203558]"
                >
                  <Phone size={16} className="text-[#3A9CD7]" />
                  +32 424 11 40
                </a>

                <a
                  href="mailto:info@techbat.be"
                  className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-3 transition-colors hover:text-[#203558]"
                >
                  <Mail size={16} className="text-[#3A9CD7]" />
                  info@techbat.be
                </a>

              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* =====================================================
          BANDE COULEURS TECHBAT
      ===================================================== */}
      <div className="flex h-[4px]">
        <div className="w-1/5 bg-[#EE287A]" />
        <div className="w-1/5 bg-[#B857CC]" />
        <div className="w-1/5 bg-[#3A9CD7]" />
        <div className="w-1/5 bg-[#8CC53D]" />
        <div className="w-1/5 bg-[#EE9E5C]" />
      </div>
    </header>
  );
}

export default Header;
