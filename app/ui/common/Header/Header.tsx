import { Link } from "@remix-run/react";
import MediumLogo from "../../../assets/medium-logo.svg";

export default function Header() {
  return (
    <div className="Header">
      <nav>
        <img src={MediumLogo} alt="OpenBox logo" />
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
    </div>
  );
}
