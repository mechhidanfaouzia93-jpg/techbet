import { NavLink } from "react-router-dom";


export const Header = () => {


  return (
    <header className="bg-white shadow-sm border-b border-blue-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">


        <div className="flex items-center gap-3">
          <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/assets/logo-techbat.png"
            alt="logo techbat"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold text-blue-500 tracking-wide">
            Tech<span className="text-blue-300">Bat</span>
          </h1>
           </NavLink>
        </div>

        <nav className="flex items-center gap-6">

          <ul className="hidden md:flex items-center gap-6">
            <li>
              <NavLink to="/" className={linkStyle}>
                Accueil
              </NavLink>
            </li>

            <li>
              <NavLink to="/" className={linkStyle}>
            
              </NavLink>
            </li>

            <li>
              <NavLink to="/" className={linkStyle}>
            
              </NavLink>
            </li>


            <li>
              <NavLink
                to="/about"
                className={linkStyle}
              >
                À propos
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/faq"
                className={linkStyle}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};