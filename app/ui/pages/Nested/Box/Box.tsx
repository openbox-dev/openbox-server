import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_nested.box.$boxId";

export default function Box() {
  const loaderData = useLoaderData<typeof loader>;
  return <div className="Box">Page Box</div>;
}
