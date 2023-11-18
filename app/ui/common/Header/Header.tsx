import { Link } from "@remix-run/react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import MediumLogo from "../../../assets/medium-logo.svg";
import SmallLogo from "../../../assets/small-logo.svg";
import BurgerIcon from "../../../assets/burger.svg";

import ModalMenu from "./ModalMenu";

export default function Header() {
  const [isModalActive, setIsModalActive] = useState(false);
  const navigationLinks = {
    Accueil: "/",
    Calendrier: "/calendar",
    OpenVote: "/openvote",
    "Les Box": "/box",
  };

  return (
    <div className="Header">
      <nav>
        <img src={MediumLogo} className="md-logo" alt="OpenBox logo" />
        <img src={SmallLogo} className="sm-logo" alt="OpenBox logo" />
        <ul className="navigation-links">
          {Object.entries(navigationLinks).map(([pageName, pageUrl]) => {
            return (
              <li key={pageName}>
                <Link to={pageUrl}>{pageName}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* TODO: ajouter user guard pour quand le user est co */}
      <div className="auth-links">
        <Link to={"/auth/login"}>Connexion</Link>
        <Link to={"/auth/register"}>Inscription</Link>
      </div>

      <div className="burger-menu" onClick={() => setIsModalActive(true)}>
        <img src={BurgerIcon} className="sm-logo" alt="Burger Menu Icon" />
      </div>

      <AnimatePresence>
        {isModalActive && (
          <ModalMenu
            navigationLinks={navigationLinks}
            closeModal={() => setIsModalActive(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
