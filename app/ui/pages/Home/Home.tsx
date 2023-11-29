import { Link, useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/_index";

import BlueBox from "../../../assets/logo/blue-box.svg";
import RedBox from "../../../assets/logo/red-box.svg";
import BeigeBox from "../../../assets/logo/beige-box.svg";
import BrownBox from "../../../assets/logo/brown-box.svg";
import arrowLink from "../../../assets/icon/greenArrowLink.svg";

import SeeMore from "~/ui/common/SeeMore/SeeMore";
import Footer from "~/ui/common/Footer/Footer";
import Header from "~/ui/common/Header/Header";
import EventCard from "~/ui/common/EventCard/EventCard";
import BoxCard from "../Catalog/BoxCatalog/components/BoxCard";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./components/Box";

const boxes = [BlueBox, BrownBox, BeigeBox, RedBox];

interface Actualites {
  id: number;
  title: string;
  content: string;
  image: string;
  heading: string;
  user: {
    firstName: string;
    lastName: string;
  };
}

/*
 * Checks if the data is of type Actualites
 */
function isActualites(data: any): data is Actualites {
  return (data as Actualites).id !== undefined;
}

/*
 * Returns the latest actualites from the server data
 */
function useActualitesLoaderData(): Actualites {
  const serverData = useLoaderData<typeof loader>();
  if (!isActualites(serverData.latestActualites.data)) {
    throw new Error("Server data is not of type Actualites");
  }
  return serverData.latestActualites.data;
}

export default function Home() {
  const serverData = useLoaderData<typeof loader>();
  const latestActualites = useActualitesLoaderData();

  return (
    <>
      <Header user={serverData.user} />
      <ul></ul>
      <div className="Home">
        <section className="hero-banner">
          <div>
            <h1 className="section-title">
              OpenBox est un mouvement initié par des <span>Héticiens</span>
            </h1>
            <p className="section-description">
              — Ce mouvement vise à faire grandir le savoir et le pouvoir d’agir
              de chaque Heticien grâce au partage, la rencontre et la
              découverte.
            </p>
          </div>
          <div className="threejs-container">
            <Canvas>
              {/* <OrbitControls /> */}
              <Box />
            </Canvas>
          </div>
          <SeeMore />
        </section>

        <section className="event-section">
          <h2>Nos évènements</h2>
          {/* link */}
          <div className="event-card-container three-column-grid">
            {serverData.comingEvents &&
              serverData.comingEvents.map((event) => {
                return <EventCard key={event.id} event={event as any} />; // any because for some reason prisma sets dates as strings
              })}
          </div>
          <Link to={"/calendar"}>
            Voir le calendrier <img src={arrowLink} alt="Arrow icon" />
          </Link>
        </section>

        <section className="box-explain-section" id="what-is-a-box">
          <div>
            <h2 className="section-title">Qu'est ce qu'une box ?</h2>
            <p className="section-description">
              — Les Box sont des opportunités de découvrir des sujets atypiques,
              rencontrer des personnes ou s'améliorer sur un aspect particulier
              de la tech comme du quotidien. Elles se présentent sous la forme
              d’ateliers, de médias partagés, de rencontres, et plus encore.
            </p>
          </div>

          <div className="boxes-container">
            {boxes.map((coloredBox, index) => {
              return <img src={coloredBox} alt="Icone de box" key={index} />;
            })}
          </div>
          {/* box cards */}
          <div className="Catalog-Box">
            {serverData.boxes.map((box, index) => {
              const isOdd = index % 2 !== 0;
              const boxClass = isOdd ? "Odd-Box" : "Even-Box";
              return (
                <BoxCard
                  id={box.id}
                  description={box.description}
                  title={box.name}
                  className={boxClass}
                />
              );
            })}
          </div>
          <Link to={"/box"}>
            Découvrir nos Box <img src={arrowLink} alt="Arrow icon" />
          </Link>
        </section>

        <section className="actualite-section">
          <h2>L’actu OpenBox</h2>
          <div className="last-actualite">
            <h3 className="last-actualite-title">Dernière actualité</h3>
            <img
              src={latestActualites.image}
              alt="Dernière actualité"
              className="actualite-img"
            />
            <div className="last-actualite-details">
              <p className="actualite-details">
                {latestActualites.user.firstName}{" "}
                {latestActualites.user.lastName}
              </p>
              <h4 className="actualite-title">{latestActualites.title}</h4>
              <p className="actualite-description">
                {latestActualites.content}
              </p>
              <Link
                to={`/actualites/${latestActualites.id}`}
                className="actualite-heading"
              >
                {latestActualites.heading}
              </Link>
            </div>
          </div>
          <Link to={"/actualites"}>
            Voir toute l’actualité <img src={arrowLink} alt="Arrow icon" />
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}
