import { useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/_index";
import Header from "../../common/Header/Header";
import SeeMore from "~/ui/common/SeeMore/SeeMore";

export default function Home() {
  const articlesData = useLoaderData<typeof loader>();

  return (
    <div className="Home">
      <Header />

      <section className="hero-banner">
        <div>
          <h1>OpenBox est un mouvement initié par des <span>Héticiens</span></h1>
          <p>— Ce mouvement vise à faire grandir le savoir et le pouvoir d’agir de chaque Heticien grâce au partage, la rencontre et la découverte.</p>
        </div>
        <div className="threejs-container">
        </div>
        <SeeMore />
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
