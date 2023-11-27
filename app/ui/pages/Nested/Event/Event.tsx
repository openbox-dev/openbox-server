import { useLoaderData } from "@remix-run/react";

import imagePlaceholder from "../../../../assets/image/card-placeholder.png";
import { loader } from "~/routes/_nested.event.$eventId";
import { EventService } from "~/services/event.service";

export default function Event() {
  const eventData = useLoaderData<typeof loader>();

  return (
    <div className="Event">
      <div className="title-page">
        <h1>{eventData.name}</h1>
      </div>
      <div className="hero-event">
        <div
          className="box-image-container"
          style={{
            backgroundImage: `url(${
              eventData.image ? eventData.image : imagePlaceholder
            })`,
          }}
        ></div>
        <p>— {eventData.description}</p>
      </div>
      <div className="body-event">
        <aside className="aside-event">
          <h3>Détails</h3>
          <div className="status">
            <h4>Status</h4>
            <span>{EventService.getEventStatus(eventData.startDate)}</span>
          </div>
          <div className="animator">
            <h4>
              {eventData.eventAnimator.length > 1
                ? "Intervenants"
                : "Intervenant"}
            </h4>
            <ul>
              {eventData.eventAnimator.map((animatorTable, index) => (
                <li key={index}>
                  {" "}
                  <span>
                    {animatorTable.animator.lastName.toUpperCase()}
                  </span>{" "}
                  <span>{animatorTable.animator.firstName}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="date">
            <h4>Date</h4>
            <span>
              {new Date(eventData.startDate).toLocaleDateString("default", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="lieu">
            <h4>Lieu</h4>
            <span>{eventData.room}</span>
          </div>
        </aside>
        <div className="ressource-event">
          {!eventData.eventRessource.length
            ? "Aucune ressource nécessaire pour cette box"
            : eventData.eventRessource.map((ressource) => (
                <li>{ressource.url}</li>
              ))}
        </div>
      </div>
    </div>
  );
}
