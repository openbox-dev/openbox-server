import { Form, Link } from "@remix-run/react";

export default function RegisterForm() {
  return (
    <div className="RegisterForm">
      <h1>Bienvenue sur OpenBox</h1>
      <Form method="post">
        <label>
          <span>Email</span>
          <input type="email" name="email" id="email" />
        </label>
        <label>
          <span>Prénom</span>
          <input type="text" name="firstName" id="firstName" />
        </label>
        <label>
          <span>Nom</span>
          <input type="text" name="lastName" id="lastName" />
        </label>
        <label>
          <span>Promo</span>
          <input type="text" name="promo" id="promo" />
        </label>
        <label>
          <span>Mot de passe</span>
          <input type="password" name="password" id="password" />
        </label>
        <button type="submit">go</button>
      </Form>
      <Link to="/login">
        <p>Je possède déjà un compte</p>
      </Link>
    </div>
  );
}
