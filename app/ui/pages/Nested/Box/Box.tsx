import type { loader } from "~/routes/_nested.box.$boxId";
import { useLoaderData } from "@remix-run/react";

export default function Box() {
  const box = useLoaderData<typeof loader>();
  
  return <div>Page Box</div>;
}
