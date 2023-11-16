import { useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/_index";
import Header from "../../common/Header/Header";

export default function Home() {
  const articlesData = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
    </div>
  );
}
