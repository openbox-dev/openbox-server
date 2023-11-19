import { Link, useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/_index";
import Header from "../../common/Header/Header";
import SeeMore from "~/ui/common/SeeMore/SeeMore";

export default function Home() {
  // const {latestActualites, comingEvents} = useLoaderData<typeof loader>();

  return (
    <div className="Home">
      <section className="hero-banner">
        <div>
          <h1 className="section-title">
            OpenBox est un mouvement initié par des <span>Héticiens</span>
          </h1>
          <p className="section-description">
            — Ce mouvement vise à faire grandir le savoir et le pouvoir d’agir
            de chaque Heticien grâce au partage, la rencontre et la découverte.
          </p>
        </div>
        <div className="threejs-container"></div>
        <SeeMore />
      </section>

      <section className="event-section">
        <h2>Nos évènements récents</h2>
        <div className="event-list"></div>
        {/* link */}
        <Link to={"/calendar"}>Voir le calendrier (flèche)</Link>
      </section>

      <section className="box-explain-section">
        <div>
          <h2 className="section-title">Qu'est ce qu'une box ?</h2>
          <p className="section-description">
            — Les Box sont des opportunités de découvrir des sujets atypiques,
            rencontrer des personnes ou s'améliorer sur un aspect particulier de
            la tech comme du quotidien. Elles se présentent sous la forme
            d’ateliers, de médias partagés, de rencontres, et plus encore.
          </p>
        </div>
      </section>
      {/* <ul>
        {articlesData.success
          ? articlesData.data.map((article) => {
              return <li key={article.id}>{article.title}</li>;
            })
          : "Aucune Actu à afficher"}
      </ul> */}
    </div>
  );
}
