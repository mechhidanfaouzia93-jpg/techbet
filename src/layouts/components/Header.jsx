import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-techbat.png";

function Navbar() {
  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Qui sommes-nous ?", path: "/about" },
    { name: "Notre savoir-faire", path: "/expertise" },
    { name: "Nos réalisations", path: "/realisations" },
    { name: "Nos références", path: "/references" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="TECHBAT"
            className="h-16 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#203558]"
                    : "text-[#58595B] hover:text-[#203558]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#203558]" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* Bouton contact */}
          <Link
            to="/contact"
            className="rounded-full bg-[#203558] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#3A9CD7] hover:shadow-lg"
          >
            Contact
          </Link>
        </nav>

        {/* Menu mobile */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <span className="h-0.5 w-6 bg-[#203558]" />
          <span className="h-0.5 w-6 bg-[#203558]" />
          <span className="h-0.5 w-6 bg-[#203558]" />
        </button>
      </div>

      {/* Petite ligne colorée inspirée du logo */}
      <div className="flex h-1">
        <div className="w-1/5 bg-[#EE287A]" />
        <div className="w-1/5 bg-[#B857CC]" />
        <div className="w-1/5 bg-[#3A9CD7]" />
        <div className="w-1/5 bg-[#8CC53D]" />
        <div className="w-1/5 bg-[#EE9E5C]" />
      </div>
    </header>
  );
}

export default Navbar;