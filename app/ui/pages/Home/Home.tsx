import { useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/_index";
import Header from "../../common/Header/Header";

export default function Home() {
  const articlesData = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />

      <ul>
        {articlesData.success
          ? articlesData.data.map((article) => {
              return <li>{article.title}</li>;
            })
          : "Aucune Actu à afficher"}
      </ul>
    </div>
  );
}
