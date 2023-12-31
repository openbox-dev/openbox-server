import { Event } from "@prisma/client";
import {
  EventService,
  EventWithBoxAndAnimator,
} from "~/services/event.service";
import imagePlaceholder from "../../../assets/image/card-placeholder.png";
import { Link } from "@remix-run/react";

interface EventCardProps {
  event: EventWithBoxAndAnimator;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div
      className={`EventCard${
        EventService.getEventStatus(event.startDate) === "PASSÉ"
          ? " passed-event"
          : ""
      }`}
    >
      <span className="event-status">
        {EventService.getEventStatus(event.startDate)}
      </span>
      <div
        className="event-image-container"
        style={{
          backgroundImage: `url(${
            event.image ? event.image : imagePlaceholder
          })`,
        }}
      ></div>
      <div className="event-details-container">
        <p className="event-animators">
          {event.eventAnimator.map(({ animator }) => {
            return (
              <span key={animator.id} className="animators-name">
                {animator.firstName} {animator.lastName + " "}
              </span>
            );
          })}
          <span>
            {"- "} {new Date(event.startDate).toLocaleDateString()} en{" "}
            {event.room}
          </span>
        </p>
        <h3>
          <a href={`/event/${event.id}`}>{event.name}</a>
        </h3>
        <p className="event-description">{event.description}</p>
      </div>
      <a href={`/box/${event.boxId}`} className="event-box-tag">
        {event.box.name}
      </a>
    </div>
  );
}
