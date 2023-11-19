import { Link, useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/_index";

import BlueBox from "../../../assets/logo/blue-box.svg";
import RedBox from "../../../assets/logo/red-box.svg";
import BeigeBox from "../../../assets/logo/beige-box.svg";
import BrownBox from "../../../assets/logo/brown-box.svg";
import arrowLink from "../../../assets/icon/greenArrowLink.svg";

import SeeMore from "~/ui/common/SeeMore/SeeMore";

const boxes = [BlueBox, BrownBox, BeigeBox, RedBox];

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
        <div>ici les box events </div>
        <Link to={"/calendar"}>
          Voir le calendrier <img src={arrowLink} alt="Arrow icon" />
        </Link>
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

        <div className="boxes-container">
          {boxes.map((coloredBox, index) => {
            return <img src={coloredBox} alt="Icone de box" key={index} />;
          })}
        </div>
        {/* box cards */}
        <div>ici les box cards</div>
        <Link to={"/box"}>
          Découvrir nos Box <img src={arrowLink} alt="Arrow icon" />
        </Link>
      </section>

      <section className="actualite-section">
        <h2>L’actu OpenBox</h2>
        <div className="actualite-list"></div>
        {/* link */}
        <div>ici la derniere actualites </div>
        <Link to={"/actualites"}>
          Voir toute l’actualité <img src={arrowLink} alt="Arrow icon" />
        </Link>
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
