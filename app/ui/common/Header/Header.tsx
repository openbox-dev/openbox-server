import { Link } from "@remix-run/react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import MediumLogo from "../../../assets/logo/medium-logo.svg";
import SmallLogo from "../../../assets/logo/small-logo.svg";
import BurgerIcon from "../../../assets/icon/burger.svg";

import ModalMenu from "./ModalMenu";
import { User } from "@prisma/client";

interface HeaderProps {
  user: User | null;
}

export default function Header({ user }: HeaderProps) {
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
        {user ? (
          <>
            <span>
              {user.firstName} {user.lastName}
            </span>
            <Link to={"logout"}>Déconnexion</Link>
          </>
        ) : (
          <>
            <Link to={"/login"}>Connexion</Link>
            <Link to={"/register"}>Inscription</Link>
          </>
        )}
      </div>

      <div className="burger-menu" onClick={() => setIsModalActive(true)}>
        <img src={BurgerIcon} className="sm-logo" alt="Burger Menu Icon" />
      </div>

      <AnimatePresence>
        {isModalActive && (
          <ModalMenu
            navigationLinks={navigationLinks}
            user={user}
            closeModal={() => setIsModalActive(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
