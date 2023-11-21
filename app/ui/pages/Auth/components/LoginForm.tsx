import { Form, Link } from "@remix-run/react";

import arrowLink from "../../../../assets/icon/greenArrowLink.svg";
import heticLogo from "../../../../assets/logo/hetic.svg";

export default function LoginForm() {
  return (
    <div className="LoginForm">
      <h1>
        Bienvenue sur <Link to={"/"}>OpenBox</Link>
      </h1>
      <Form method="post">
        <label>
          <span>Email</span>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="pietro@hetic.eu"
          />
        </label>
        <label>
          <span>Mot de passe</span>
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="i0'c4xg9CqG}h!"
          />
        </label>
        <button type="submit">S'inscrire</button>
        <Link to="/register">
          Je n'ai pas de compte
          <img src={arrowLink} alt="Arrow icon" />
        </Link>
      </Form>
      <span className="or-divider">OR</span>
      <button className="Oauth-cta" disabled>
        <img src={heticLogo} alt="Hetic Logo" />
        Se connecter avec Hetic
      </button>
    </div>
  );
}
