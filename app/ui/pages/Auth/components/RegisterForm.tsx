import { ChangeEvent, useState } from "react";
import { Form, Link, useActionData } from "@remix-run/react";

import { User_promotion } from "@prisma/client";
import { action } from "~/routes/_auth.register";

import arrowLink from "../../../../assets/icon/greenArrowLink.svg";

export default function RegisterForm() {
  const formErrors = useActionData<typeof action>();
  const [promo, setPromo] = useState<User_promotion>(User_promotion.WEB1);

  const handlePromotionChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    setPromo(value as User_promotion);
  };

  return (
    <div className="RegisterForm">
      <h1>
        Bienvenue sur <Link to={"/"}>OpenBox</Link>
      </h1>
      <Form method="post">
        {formErrors && !formErrors.success ? (
          typeof formErrors.data === "string" ? (
            <span className="error-text">{formErrors.data}</span>
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
            <select
              value={promo}
              onChange={handlePromotionChange}
              name="promo"
              id="promo"
            >
              {Object.keys(User_promotion).map((promotion) => {
                return (
                  <option key={promotion} value={promotion}>
                    {promotion}
                  </option>
                );
              })}
            </select>
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
