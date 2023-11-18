import { Link } from "@remix-run/react";
import MediumLogo from "../../../assets/medium-logo.svg";
import SmallLogo from "../../../assets/small-logo.svg";
import BurgerIcon from "../../../assets/burger.svg";
import { useState } from "react";
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
              <li>
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
      {isModalActive && (
        <ModalMenu
          navigationLinks={navigationLinks}
          closeModal={() => setIsModalActive(false)}
        />
      )}
    </div>
  );
}
