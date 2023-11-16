import { Link } from "@remix-run/react";
import MediumLogo from "../../../assets/medium-logo.svg";
import SmallLogo from "../../../assets/small-logo.svg";
import BurgerIcon from "../../../assets/burger.svg";

export default function Header() {
  return (
    <div className="Header">
      <nav>
        <img src={MediumLogo} className="md-logo" alt="OpenBox logo" />
        <img src={SmallLogo} className="sm-logo" alt="OpenBox logo" />
        <ul className="navigation-links">
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/calendar"}>Calendrier</Link>
          </li>
          <li>
            <Link to={"/openvote"}>OpenVote</Link>
          </li>
          <li>
            <Link to={"/box"}>Les Box</Link>
          </li>
        </ul>
      </nav>

      {/* TODO: ajouter user guard pour quand le user est co */}
      <div className="auth-links">
        <Link to={"/auth/login"}>Connexion</Link>
        <Link to={"/auth/register"}>Inscription</Link>
      </div>

      <div className="burger-menu">
        <img src={BurgerIcon} className="sm-logo" alt="Burger Menu Icon" />
      </div>
    </div>
  );
}
