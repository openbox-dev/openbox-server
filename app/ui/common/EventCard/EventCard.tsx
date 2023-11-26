import { Event } from "@prisma/client";
import { EventWithBox } from "~/services/event.service";
import imagePlaceholder from "../../../assets/image/card-placeholder.png";
import { Link } from "@remix-run/react";

interface EventCardProps {
  event: EventWithBox;
}

const getEventStatus = (startDate: Date) => {
  return "À VENIR";
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="EventCard">
      <span className="event-status">{getEventStatus(event.startDate)}</span>
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
          <Link to={`/event/${event.name.split(" ").join("-").toLowerCase()}`}>
            {event.name}
          </Link>
        </h3>
        <p>{event.description}</p>
      </div>
      <Link
        to={`/box/${event.box.name.split(" ").join("-").toLowerCase()}`}
        className="event-box-tag"
      >
        {event.box.name}
      </Link>
    </div>
  );
}
