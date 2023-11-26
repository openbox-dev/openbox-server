import { MetaFunction } from "@remix-run/node";
import { OpenVoteLoader } from "~/controllers/loaders/catalog.openvote.loader";

export const meta: MetaFunction = () => {
  return [
    { title: "OpenBox - OpenVote" },
    {
      description: "Page OpenVote de OpenBox",
    },
  ];
};

export default function placeHolder() {
  return <div className="soon">ici</div>;
}
export { OpenVoteLoader as loader };
