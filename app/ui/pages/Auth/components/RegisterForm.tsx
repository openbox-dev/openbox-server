import { Form, Link, useActionData } from "@remix-run/react";

import arrowLink from "../../../../assets/icon/greenArrowLink.svg";
import { action } from "~/routes/_auth.register";
import { json } from "@remix-run/node";

export default function RegisterForm() {
  const formErrors = useActionData<typeof action>();

  return (
    <div className="RegisterForm">
      <h1>
        Bienvenue sur <Link to={"/"}>OpenBox</Link>
      </h1>
      <Form method="post">
        {formErrors && !formErrors.success ? (
          typeof formErrors.data === "string" ? (
            <span>{formErrors.data}</span>
          ) : (
            formErrors.data.map((error) => (
              <span className="error-text">
                {error.path === "promo"
                  ? "Cette promo n'est pas valide"
                  : error.message}
              </span>
            ))
          )
        ) : null}
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
        <div className="user-data">
          <label>
            <span>Prénom</span>
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Pietro"
            />
          </label>
          <label>
            <span>Nom</span>
            <input
              required
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Schirano"
            />
          </label>
          <label>
            <span>Promo</span>
            <input
              required
              type="text"
              name="promo"
              id="promo"
              placeholder="WEB2"
            />
          </label>
        </div>
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
        <Link to="/login">
          Je possède déjà un compte
          <img src={arrowLink} alt="Arrow icon" />
        </Link>
      </Form>
    </div>
  );
}
