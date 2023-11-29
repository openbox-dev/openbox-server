import { Form, Link, useLocation } from "@remix-run/react";

const Filter: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const q = params.get("q") || "";

  return (
    <div>
      <Form method="GET">
        <h3 className="Filter-Title">Filtres</h3>
        <input
          className="Searchbar"
          type="text"
          name="q"
          placeholder="Rechercher"
          defaultValue={q}
        />
      </Form>
      {q.length > 1 ? (
        <div className="search-result-text">
          <span>Résultats pour "{q}"</span>
          <Link to={location.pathname} prefetch="intent" title="">
            &times; Supprimer la recherche
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Filter;
