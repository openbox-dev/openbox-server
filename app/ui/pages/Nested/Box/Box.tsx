import type { loader } from "~/routes/_nested.box.$boxId";
import { useLoaderData } from "@remix-run/react";

import EventCard from "../../../common/EventCard/EventCard";

export default function Box() {
  const boxData = useLoaderData<typeof loader>();

  return <div>Page Box</div>;
}
