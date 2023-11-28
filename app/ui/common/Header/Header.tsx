import { Link, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
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
  const [currentPageUrl, setCurrentPageUrl] = useState("/");
  const navigationLinks = {
    Accueil: "/",
    Calendrier: "/calendar",
    "Les Box": "/box",
    OpenVote: "/openvote",
  };

  /* TODO: Envoyer l'url de la page à l'header pour le Useeffect */
  useEffect(() => {
    setCurrentPageUrl("/" + window.location.href.split("/")[3]);
  }, []);

  return (
    <div className="Header">
      <img src={MediumLogo} className="md-logo" alt="OpenBox logo" />
      <img src={SmallLogo} className="sm-logo" alt="OpenBox logo" />
      <nav>
        <ul className="navigation-links">
          {Object.entries(navigationLinks).map(([pageName, pageUrl]) => {
            return (
              <li key={pageName}>
                <Link
                  className={pageUrl === currentPageUrl ? "active" : ""}
                  to={pageUrl}
                >
                  {pageName}
                </Link>
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
            <Link className="login-button" to={"/login"}>
              Connexion
            </Link>
            <Link className="register-button" to={"/register"}>
              Inscription
            </Link>
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
