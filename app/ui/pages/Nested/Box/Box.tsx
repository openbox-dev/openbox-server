import type { loader } from "~/routes/_nested.box.$boxId";
import { Link, useLoaderData } from "@remix-run/react";

import arrowLink from "../../../../assets/icon/greenArrowLink.svg";
import imagePlaceholder from "../../../../assets/image/card-placeholder.png";

import SeeMore from "~/ui/common/SeeMore/SeeMore";
import EventCard from "~/ui/common/EventCard/EventCard";

export default function Box() {
  const { box, events } = useLoaderData<typeof loader>();

  return (
    <div className="Box">
      <h1 className="box-title">{box.data?.name}</h1>
      <p className="box-description">— {box.data?.description}</p>
      <div
        className="box-image"
        style={{
          backgroundImage: `url(${
            box.data?.image ? box.data.image : imagePlaceholder
          })`,
        }}
      ></div>
      <SeeMore />
      <section className="content-section">
        <div className="contributors-card">
          <h3 className="contributors-title">
            {box.data && box.data.boxAdmin.length > 1
              ? "Contributeurs"
              : "Contributeur"}
          </h3>
          <div className="contributors">
            {box.data?.boxAdmin &&
              box.data.boxAdmin.map((contributor) => (
                <div className="contributor" key={contributor.userId}>
                  <h4 className="contributor-group">
                    {contributor.user.promo}
                  </h4>
                  <span className="contributor-firstname">
                    {contributor.user.firstName}
                  </span>
                  <span className="contributor-lastname">
                    {contributor.user.lastName}
                  </span>
                </div>
              ))}
          </div>
        </div>
        <div className="event-section">
          <div className="event-card-container two-column-grid">
            {events.data &&
              events.data.map((event) => {
                return <EventCard key={event.id} event={event as any} />; // any because for some reason prisma sets dates as strings
              })}
          </div>
          <Link to={"/calendar"}>
            Voir le calendrier <img src={arrowLink} alt="Arrow icon" />
          </Link>
        </div>
      </section>
    </div>
  );
}
