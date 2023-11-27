import type { loader } from "~/routes/_nested.box.$boxId";
import { useLoaderData } from "@remix-run/react";

import SeeMore from "~/ui/common/SeeMore/SeeMore";

import imagePlaceholder from "../../../../assets/image/card-placeholder.png";
import EventCard from "~/ui/common/EventCard/EventCard";

export default function Box() {
  const { box, events } = useLoaderData<typeof loader>();

  return (
    <div className="Box">
      <h1 className="box-title">{box.data?.name}</h1>
      <p className="box-description">—{box.data?.description}</p>
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
          <h3 className="contributors-title">Contributeurs</h3>
          {/* {boxData.box.boxAdmin &&
            boxData.box.boxAdmin.map((contributor) => {
              return (
                <div className="">
                  {contributor.user.firstName}
                  {contributor.user.lastName}
                  {contributor.user.promo}
                </div>
              );
            })} */}
          {/* ?map>div.. */}
        </div>
        <div className="event-section">
          <div className="event-card-container two-column-grid">
            {/* ?map>return <EventCard key={event.id} event={event as any} />; */}
            {events.data &&
              events.data.map((event) => {
                return <EventCard key={event.id} event={event as any} />; // any because for some reason prisma sets dates as strings
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
